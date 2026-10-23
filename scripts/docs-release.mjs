#!/usr/bin/env node
/**
 * Deterministic docs release generator for `zoo-stable-release` dispatches.
 *
 * Invoked by .github/workflows/zoo-stable-release.yml via `pnpm docs:release`.
 * Given a published Zoo Code extension release, it:
 *   1. creates docs/update-notes/vX.Y.Z.mdx if missing (never rewrites an
 *      existing notes page — human enrichment happens in reviewed PRs),
 *   2. adds the release to docs/update-notes/index.md and the
 *      "Extension Release Notes" category in sidebars.ts, newest-first,
 *   3. syncs package.json "version" to the extension version (never downgrades).
 *
 * The script is fully deterministic: re-running it with the same inputs
 * produces no additional changes, so dispatch retries are safe.
 *
 * It intentionally does NOT rewrite evergreen docs or generate prose with an
 * LLM. To enrich a generated notes page, edit it in a normal reviewed PR.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const UPDATE_NOTES_DIR = path.join(repoRoot, "docs", "update-notes");
const INDEX_PATH = path.join(UPDATE_NOTES_DIR, "index.md");
const SIDEBARS_PATH = path.join(repoRoot, "sidebars.ts");
const PACKAGE_JSON_PATH = path.join(repoRoot, "package.json");

function fail(message) {
  console.error(`docs:release: ${message}`);
  process.exit(1);
}

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    const key = argv[i];
    if (!key.startsWith("--")) fail(`unexpected argument: ${key}`);
    const value = argv[i + 1];
    if (value === undefined || value.startsWith("--")) fail(`missing value for ${key}`);
    args[key.slice(2)] = value;
    i += 1;
  }
  return args;
}

function parseSemver(version) {
  const match = /^(\d+)\.(\d+)\.(\d+)$/.exec(version);
  if (!match) return null;
  return { major: Number(match[1]), minor: Number(match[2]), patch: Number(match[3]) };
}

function compareSemver(a, b) {
  for (const part of ["major", "minor", "patch"]) {
    if (a[part] !== b[part]) return a[part] - b[part];
  }
  return 0;
}

function minorLabel(version) {
  return `${version.major}.${version.minor}`;
}

function readIfExists(filePath) {
  return existsSync(filePath) ? readFileSync(filePath, "utf8") : null;
}

function writeIfChanged(filePath, content, changed, label) {
  if (readIfExists(filePath) === content) return;
  writeFileSync(filePath, content);
  changed.push(label);
}

function todayUtc() {
  return new Date().toISOString().slice(0, 10);
}

function buildNotesContent({ version, tag, sourceSha, releaseUrl, changes, date }) {
  const shortSha = sourceSha.slice(0, 7);
  const changeSection = changes
    ? changes.trim()
    : `See the [GitHub release](${releaseUrl}) for the full change list.`;
  return `---
description: Zoo Code ${version} release notes.
keywords:
  - zoo code ${version}
  - release notes
  - changelog
---

# Zoo Code ${version} Release Notes (${date})

**Release:** [${tag}](${releaseUrl}) · **Commit:** [\`${shortSha}\`](${releaseUrl})

## Changes

${changeSection}

---

> This page was generated automatically when ${tag} was published. To enrich
> these notes, edit this page in a reviewed PR — do not change the automation.
`;
}

function updateNotesPage({ version, tag, sourceSha, releaseUrl, changes }, changed) {
  const notesPath = path.join(UPDATE_NOTES_DIR, `v${version}.mdx`);
  if (existsSync(notesPath)) {
    // Existing page (possibly human-enriched in a reviewed PR) is left alone.
    return extractNotesDate(notesPath);
  }
  const date = todayUtc();
  writeFileSync(
    notesPath,
    buildNotesContent({ version, tag, sourceSha, releaseUrl, changes, date }),
  );
  changed.push(`docs/update-notes/v${version}.mdx`);
  return date;
}

function extractNotesDate(notesPath) {
  const content = readFileSync(notesPath, "utf8");
  const match = /Release Notes \((\d{4}-\d{2}-\d{2})\)/.exec(content);
  return match ? match[1] : todayUtc();
}

function updateIndex({ version }, date, changed) {
  const content = readFileSync(INDEX_PATH, "utf8");
  if (content.includes(`(/update-notes/v${version})`)) return; // idempotent

  const entry = `- [${version}](/update-notes/v${version}) (${date})`;
  const target = parseSemver(version);
  const lines = content.split("\n");

  const sectionRe = /^### Version (\d+)\.(\d+)\s*$/;
  const bulletRe = /^- \[(\d+)\.(\d+)\.(\d+)\]\(\/update-notes\/v[\d.]+\)/;

  let sectionStart = -1;
  let sectionEnd = lines.length; // exclusive: first line after the section's bullets
  for (let i = 0; i < lines.length; i += 1) {
    const m = sectionRe.exec(lines[i]);
    if (!m) continue;
    const inSection = sectionStart !== -1 && sectionEnd === lines.length;
    if (inSection) {
      sectionEnd = i;
      break;
    }
    if (Number(m[1]) === target.major && Number(m[2]) === target.minor) {
      sectionStart = i;
    }
  }

  if (sectionStart !== -1) {
    // Insert into the existing minor section, newest-first.
    let insertAt = -1;
    for (let i = sectionStart + 1; i < sectionEnd; i += 1) {
      const b = bulletRe.exec(lines[i]);
      if (!b) continue;
      const other = { major: Number(b[1]), minor: Number(b[2]), patch: Number(b[3]) };
      if (compareSemver(other, target) < 0) {
        insertAt = i;
        break;
      }
      insertAt = i + 1;
    }
    if (insertAt === -1) insertAt = sectionStart + 1;
    lines.splice(insertAt, 0, entry);
  } else {
    // Create a new minor section before the first older minor section.
    const block = [`### Version ${minorLabel(target)}`, "", entry, "", "---", ""];
    let insertAt = -1;
    for (let i = 0; i < lines.length; i += 1) {
      const m = sectionRe.exec(lines[i]);
      if (!m) continue;
      const otherMinor = { major: Number(m[1]), minor: Number(m[2]), patch: 0 };
      const thisMinor = { major: target.major, minor: target.minor, patch: 0 };
      if (compareSemver(otherMinor, thisMinor) < 0) {
        insertAt = i;
        break;
      }
    }
    if (insertAt === -1) {
      // Older than every documented minor: append at the end.
      while (lines.length > 0 && lines[lines.length - 1] === "") lines.pop();
      lines.push("", "---", "", ...block.slice(0, 3));
    } else {
      lines.splice(insertAt, 0, ...block);
    }
  }

  writeIfChanged(INDEX_PATH, lines.join("\n"), changed, "docs/update-notes/index.md");
}

function updateSidebars({ version }, changed) {
  const content = readFileSync(SIDEBARS_PATH, "utf8");
  const docId = `update-notes/v${version}`;
  if (content.includes(`id: "${docId}"`)) return; // idempotent

  const target = parseSemver(version);
  const minor = minorLabel(target);
  const lines = content.split("\n");

  const releaseNotesIdx = lines.findIndex((line) => line.includes('"update-notes/index"'));
  if (releaseNotesIdx === -1) {
    fail('could not find "update-notes/index" in sidebars.ts; add the entry manually');
  }

  const categoryRe = /label: "(\d+)\.(\d+)",/;
  const entryRe = /^(\s*)\{ type: "doc", id: "update-notes\/v(\d+)\.(\d+)\.(\d+)", label: "[\d.]+" \},/;

  // Look for an existing minor category after the release-notes index entry.
  let categoryIdx = -1;
  for (let i = releaseNotesIdx + 1; i < lines.length; i += 1) {
    if (lines[i].includes('label: "FAQ"')) break; // left the release-notes category
    const m = categoryRe.exec(lines[i]);
    if (m && Number(m[1]) === target.major && Number(m[2]) === target.minor) {
      categoryIdx = i;
      break;
    }
  }

  if (categoryIdx !== -1) {
    // Normalize a single-line `items: [{...}]` array into multi-line so the
    // new entry can be inserted as its own line.
    for (let i = categoryIdx + 1; i < lines.length; i += 1) {
      const single = /^(\s*)items: \[(.+)\],\s*$/.exec(lines[i]);
      if (single) {
        const inner = single[2].trim();
        const entries = inner.length > 0 ? inner.split(/(?<=\}), (?=\{)/) : [];
        lines.splice(i, 1, `${single[1]}items: [`, ...entries.map((e) => `${single[1]}  ${e},`), `${single[1]}],`);
        break;
      }
      if (/^\s*\}/.test(lines[i]) || (lines[i].includes("items: [") && !single)) break;
    }
    // Insert into the existing minor category, newest-first. Entries are
    // single-line `{ type: "doc", ... },` items inside a multi-line array.
    let insertAt = -1;
    let indent = "                ";
    for (let i = categoryIdx + 1; i < lines.length; i += 1) {
      const e = entryRe.exec(lines[i]);
      if (e) {
        indent = e[1];
        const other = { major: Number(e[2]), minor: Number(e[3]), patch: Number(e[4]) };
        if (compareSemver(other, target) < 0) {
          insertAt = i;
          break;
        }
        insertAt = i + 1;
        continue;
      }
      if (/^\s*\]/.test(lines[i]) || lines[i].includes('label: "')) {
        // End of this category's items (or start of the next category).
        if (insertAt === -1) insertAt = i;
        break;
      }
    }
    if (insertAt === -1) fail(`could not locate items array for sidebar category "${minor}"`);
    lines.splice(
      insertAt,
      0,
      `${indent}{ type: "doc", id: "${docId}", label: "${version}" },`,
    );
  } else {
    // New minor: insert its category before the first older minor category so
    // the sidebar stays newest-first (normally that means right after the index).
    const indexIndent = /^(\s*)/.exec(lines[releaseNotesIdx])[1];
    // Multi-line items array so later patch releases can be inserted cleanly.
    const block = [
      `${indexIndent}{`,
      `${indexIndent}  type: "category",`,
      `${indexIndent}  label: "${minor}",`,
      `${indexIndent}  items: [`,
      `${indexIndent}    { type: "doc", id: "${docId}", label: "${version}" },`,
      `${indexIndent}  ],`,
      `${indexIndent}},`,
    ];
    let insertAt = -1;
    for (let i = releaseNotesIdx + 1; i < lines.length; i += 1) {
      if (lines[i].includes('label: "FAQ"')) break;
      const m = categoryRe.exec(lines[i]);
      if (!m) continue;
      if (Number(m[1]) * 1000 + Number(m[2]) < target.major * 1000 + target.minor) {
        // Back up to the category block's opening "{" line.
        insertAt = i;
        while (insertAt > 0 && lines[insertAt].trim() !== "{") insertAt -= 1;
        break;
      }
    }
    if (insertAt === -1) {
      fail(
        `sidebar category "${minor}" is older than every documented minor; add it manually to keep ordering correct`,
      );
    }
    lines.splice(insertAt, 0, ...block);
  }

  writeIfChanged(SIDEBARS_PATH, lines.join("\n"), changed, "sidebars.ts");
}

function syncPackageVersion({ version }, changed) {
  const target = parseSemver(version);
  const pkg = JSON.parse(readFileSync(PACKAGE_JSON_PATH, "utf8"));
  const current = parseSemver(pkg.version);
  // Never downgrade: keep the higher of the two versions.
  if (current && compareSemver(current, target) >= 0 && pkg.version !== "0.0.0") return;
  pkg.version = version;
  writeFileSync(PACKAGE_JSON_PATH, `${JSON.stringify(pkg, null, 2)}\n`);
  changed.push("package.json");
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const version = args.version ?? fail("--version is required");
  const tag = args.tag ?? fail("--tag is required");
  const sourceSha = args["source-sha"] ?? fail("--source-sha is required");
  const releaseUrl = args["release-url"] ?? fail("--release-url is required");
  const changesFile = args["changes-file"];

  if (!parseSemver(version)) fail(`--version must be semver X.Y.Z, got "${version}"`);
  if (tag !== `v${version}`) fail(`--tag must be v${version}, got "${tag}"`);
  if (!/^[0-9a-f]{40}$/.test(sourceSha)) fail(`--source-sha must be a full commit SHA`);
  if (!/^https:\/\/github\.com\//.test(releaseUrl)) fail(`--release-url must be a GitHub URL`);

  let changes = "";
  if (changesFile) {
    changes = readIfExists(changesFile) ?? "";
  }

  const release = { version, tag, sourceSha, releaseUrl, changes: changes.trim() };
  const changed = [];

  const date = updateNotesPage(release, changed);
  updateIndex(release, date, changed);
  updateSidebars(release, changed);
  syncPackageVersion(release, changed);

  if (changed.length === 0) {
    console.log(`docs:release: ${tag} already recorded; no changes (idempotent no-op).`);
  } else {
    console.log(`docs:release: recorded ${tag} in: ${changed.join(", ")}`);
  }
}

main();
