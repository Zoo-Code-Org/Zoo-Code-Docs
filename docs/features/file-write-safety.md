---
description: How Zoo Code guards every file the agent writes — version-checked writes that fail loudly instead of silently clobbering, per-write checkpoints, per-step change cards, and one-click rollback.
keywords:
  - file write safety
  - guarded writes
  - version guard
  - atomic writes
  - write rejection
  - stale version
  - change cards
  - rollback
  - per-write checkpoints
  - change journal
---

# File-Write Safety

When the agent writes a file, Zoo Code checks the on-disk state against what the agent actually saw before the write is published. If the file changed underneath — by you, another agent instance, or a background process — the write is **rejected loudly** with a message that tells the agent exactly what to do (re-read the file, then retry) instead of silently overwriting your changes.

Every accepted write is also **atomic** (the file either holds the old content or the new one, never a partial write) and is recorded: a checkpoint snapshot per write and a one-line journal entry per change, which power the per-step change cards and the rollback controls in the chat.

---

## How a write is guarded

Three pieces work together:

- **Version token** — a fingerprint of the on-disk file state: device, inode, size, and the file's modification and change times (in nanoseconds). Two reads of an unchanged file produce the same token; any change produces a different one.
- **Observation** — reading a file records its version token for the task. A write is only allowed to proceed against a file the agent has observed (read) first.
- **Guarded publish** — the write is re-checked against the observed token at publish time:

  | Write kind | Guard |
  |---|---|
  | Create a new file | Fails if the file already exists and was not read first |
  | Update (overwrite) | Publishes only if the on-disk token still matches the observed one |
  | Edit (literal replace / patch) | Requires a prior observation, then publishes only on a token match |

Writes to the same file are ordered through a per-path queue, so concurrent tool calls cannot interleave half-written states. The actual bytes are published by the atomic write primitive: write to a temporary file in the same directory, then rename over the target — a crash mid-write leaves either the old or the new content, never a truncated file.

---

## When a write is rejected

A rejected write does not happen silently. The tool returns an error to the agent that names the problem and the fix:

- File not read yet -- read the file, then retry. — the agent tried to edit a file it never read. It reads the file, then retries the same edit.
- File already exists at (path) and was not read before this write -- read the file first, then retry. — a create-style write targeted an existing file the agent had not read.
- Stale version -- the file changed since you read it (expected (token), current (token)); re-read the file, then retry. — the file was modified after the agent read it. The write is refused and the agent re-reads, so your newer content becomes the base for the retry.
- File was deleted after it was read -- the version recorded at read time (token) no longer exists; re-read the file, then retry. — the file was removed after the read. The agent re-reads (creating a fresh observation) before retrying.

Real I/O failures (permission denied, disk error) are surfaced as I/O errors, not guard verdicts — the guard only rejects on a state mismatch.

Because a rejection is a normal tool error, the agent recovers on its own: it re-reads the file, re-bases its edit on the current content, and retries. You do not need to intervene unless you want to.

---

## Per-write checkpoints

With checkpoints enabled, Zoo Code snapshots the workspace **after every successful agent write**, in addition to the task-start baseline. The snapshots live in the same shadow Git store that powers the existing [Checkpoints](/features/checkpoints) feature — no new storage.

The behavior is controlled by the **Checkpoint after each file write** setting (on by default) in Settings → Checkpoints:

- **On** (default): each accepted write produces its own checkpoint, so a change card can roll back to the state *before* that specific write.
- **Off**: checkpoints are only taken at the existing coarser cadence.

---

## Per-step change cards

After a step in which the agent changed files, a **change card** appears in the chat:

<img src="/img/file-write-safety/change-card-summary.png" alt="Change card summary: three files changed this step with per-file add/remove counts and a Rollback step button" width="880" />

*The summary card lists each changed file with its additions and removals, plus a step-level rollback button.*

- **Summary** (default): file names with added/removed line counts.
- **Full**: the unified diff for each file, shown inline in the card. Selected with the **Show full diff in change cards** setting:

<img src="/img/file-write-safety/change-card-full.png" alt="Change card full detail with inline unified diffs for each changed file" width="880" />

The card data comes from the per-task change journal (changes.jsonl), which records one line per written file: the file path, the operation (created or modified), and the checkpoint the write produced. The journal is appended one line at a time; if a line is ever torn, the loader repairs the tail and keeps the readable prefix.

---

## Rollback

The change card offers two rollback scopes:

- **Per file** — the rollback button on a file row restores that one file to the content it had at the step's checkpoint. The other files of the step are untouched.
- **Per step** — the **Rollback step** button restores every file the step touched.

Each action asks for confirmation before anything is written:

<img src="/img/file-write-safety/rollback-state.png" alt="Change card with per-file rollback states: one file rolled back, one failed rollback, and a step in progress" width="880" />

Rollback reuses the existing checkpoint restore service — the same shadow Git store and the same restore primitive the Checkpoints UI uses — so a rolled-back file is restored exactly to the checkpointed content. Failures are reported per file in the card: a rollback that cannot restore one file says so next to that file instead of failing the whole step.

Rollback requires checkpoints to be enabled for the task. If they are not, the card shows a message instead of acting.

---

## Settings

| Setting | Default | Effect |
|---|---|---|
| **Checkpoint after each file write** | On | Takes a checkpoint after every successful agent write (see [Checkpoints](/features/checkpoints)). |
| **Show full diff in change cards** | Off (summary) | Full: show the inline unified diff in change cards. Summary: file list with line counts. |

<img src="/img/file-write-safety/settings-checkpoints.png" alt="Checkpoints settings section showing the per-write checkpoint and change card detail controls" width="800" />

Both settings are regular persisted settings: they round-trip through the settings export/import and apply to new tasks once saved.

---

## Default write path

The file-write safety guards apply to every file the agent writes — write-to-file, edit-file, search-replace, and apply-diff all publish through the guarded path. The diff-approval behavior that pairs with it: when the agent edits a file, the change is approved in the chat (the change card above) rather than opening a separate diff editor, so the write happens while your focus stays in the conversation.

---

## Where the data lives

| Data | Location |
|---|---|
| Checkpoint snapshots (per write + task start) | The task's shadow Git checkpoint store (same as the existing Checkpoints feature) |
| Change journal | changes.jsonl inside the task's storage directory |
| Version tokens | Computed on demand from file statistics; nothing is stored |
