# Zoo Code Documentation Rebrand PRD

## Objective

Audit the documentation set for references to **Roo** / **Roo Code** and prepare a controlled migration plan to rename the product to **Zoo** / **Zoo Code**.

This document is an inventory and planning artifact only. No documentation content has been changed yet.

## Requested Outcome

- Find where the docs currently reference Roo / Roo Code
- Group the findings into reviewable areas
- Identify places that are simple copy updates vs places that need editorial or technical review
- Stop after producing this PRD for approval

## Audit Method

The audit searched the `docs/` tree for these case-insensitive patterns:

- `Roo Code`
- `Roo`
- `roocode`
- `roo-code`
- `Roo Cline`
- `roo-cline`

## Findings Summary

### Total impacted files

- **529 files** in `docs/` contain one or more Roo-related references.

### Impact by area

- `docs/(root)`: **7** files
- `docs/advanced-usage`: **31** files
- `docs/basic-usage`: **5** files
- `docs/credits`: **1** file
- `docs/features`: **37** files
- `docs/getting-started`: **3** files
- `docs/providers`: **27** files
- `docs/roo-code-cloud`: **12** files
- `docs/roo-code-router`: **1** file
- `docs/update-notes`: **405** files

## Rebrand Decision Areas

### 1. Straightforward product-copy replacements

These are likely safe to update directly from **Roo Code** to **Zoo Code**:

- page titles
- descriptions / keywords
- explanatory body copy
- UI instructions that mention the product by name
- captions and alt text

### 2. Historical references needing editorial review

These may require preserving historical wording rather than blindly renaming:

- release notes describing past Roo Code releases
- rebrand history such as “Roo Cline” → “Roo Code”
- sunset / deprecation pages
- references to past marketplace branding, org names, or prior extension labels

### 3. Technical identifiers that may or may not change in this migration

These should not be renamed automatically unless the underlying implementation is also changing:

- command IDs like `roo.acceptInput`
- VS Code settings keys like `roo-cline.*`
- filesystem paths like `.roo/commands/`, `.roo/rules`, `.rooignore`
- env vars such as `ROO_WEB_HOST`
- route segments or doc slugs that include `roo-code-*`
- image directories like `/img/using-mcp-in-roo/...`
- support and product URLs such as `roocode.com`, `app.roocode.com`, GitHub repo/org links, Discord links
- branded bot/app names such as `@Roomote`

### 4. Structural rename candidates

These areas suggest route, file, sidebar, and redirect work in addition to copy changes:

- `docs/roo-code-cloud/`
- `docs/roo-code-router/`
- `docs/providers/roo-code-router.md`
- pages with `redirect_from` values containing `roo-code-*`
- links pointing to routes that currently include `/roo-code-cloud/` or similar

## Proposed Migration Phases

### Phase 1 — Content-safe copy updates

Update reader-facing references from Roo / Roo Code to Zoo / Zoo Code where the text is clearly present-day product copy.

### Phase 2 — Branded asset and route review

Review pages whose filenames, routes, assets, or redirects contain Roo branding.

### Phase 3 — Technical identifier validation

Decide which identifiers remain as compatibility names and which should be migrated in product + docs together.

### Phase 4 — Historical content policy

Define how release notes, migration notes, and sunset content should talk about the old name.

## Recommended Rules Before Editing

1. Replace **Roo Code** → **Zoo Code** in reader-facing prose by default.
2. Replace standalone **Roo** → **Zoo** only when it clearly refers to the product or assistant persona.
3. Do **not** rename `.roo`, `roo-cline`, `roo.acceptInput`, `ROO_*`, repo URLs, Discord links, or app domains without explicit approval.
4. Treat `roo-code-cloud` and `roo-code-router` routes as a separate migration decision.
5. Keep historical release-note facts accurate even if headings and intro copy are normalized.

## Detailed Area Inventory

### Root docs pages (7)

- `docs/faq.md`
- `docs/index.mdx`
- `docs/reporting-errors.md`
- `docs/sunset.md`
- `docs/tips-and-tricks.md`
- `docs/tutorial-videos.json`
- `docs/tutorial-videos.mdx`

### Advanced usage (31)

#### Available tools

- `docs/advanced-usage/available-tools/access-mcp-resource.md`
- `docs/advanced-usage/available-tools/apply-diff.md`
- `docs/advanced-usage/available-tools/apply-patch.md`
- `docs/advanced-usage/available-tools/ask-followup-question.md`
- `docs/advanced-usage/available-tools/attempt-completion.md`
- `docs/advanced-usage/available-tools/codebase-search.md`
- `docs/advanced-usage/available-tools/edit-file.md`
- `docs/advanced-usage/available-tools/edit.md`
- `docs/advanced-usage/available-tools/execute-command.md`
- `docs/advanced-usage/available-tools/generate-image.md`
- `docs/advanced-usage/available-tools/list-files.md`
- `docs/advanced-usage/available-tools/new-task.md`
- `docs/advanced-usage/available-tools/read-command-output.md`
- `docs/advanced-usage/available-tools/read-file.md`
- `docs/advanced-usage/available-tools/run-slash-command.md`
- `docs/advanced-usage/available-tools/search-files.md`
- `docs/advanced-usage/available-tools/search-replace.md`
- `docs/advanced-usage/available-tools/skill.md`
- `docs/advanced-usage/available-tools/switch-mode.md`
- `docs/advanced-usage/available-tools/tool-use-overview.md`
- `docs/advanced-usage/available-tools/update-todo-list.md`
- `docs/advanced-usage/available-tools/use-mcp-tool.md`
- `docs/advanced-usage/available-tools/write-to-file.md`

#### Other advanced usage pages

- `docs/advanced-usage/context-poisoning.md`
- `docs/advanced-usage/large-projects.md`
- `docs/advanced-usage/local-development-setup.mdx`
- `docs/advanced-usage/local-models.md`
- `docs/advanced-usage/prompt-engineering.md`
- `docs/advanced-usage/prompt-structure.md`
- `docs/advanced-usage/rate-limits-costs.md`
- `docs/advanced-usage/roo-code-nightly.mdx`

### Basic usage (5)

- `docs/basic-usage/context-mentions.md`
- `docs/basic-usage/how-tools-work.md`
- `docs/basic-usage/the-chat-interface.md`
- `docs/basic-usage/typing-your-requests.md`
- `docs/basic-usage/using-modes.md`

### Credits (1)

- `docs/credits/overview.md`

### Features (37)

- `docs/features/api-configuration-profiles.mdx`
- `docs/features/auto-approving-actions.mdx`
- `docs/features/boomerang-tasks.mdx`
- `docs/features/checkpoints.mdx`
- `docs/features/code-actions.mdx`
- `docs/features/codebase-indexing.mdx`
- `docs/features/concurrent-file-reads.md`
- `docs/features/custom-instructions.md`
- `docs/features/custom-modes.mdx`
- `docs/features/diagnostics-integration.md`
- `docs/features/enhance-prompt.md`
- `docs/features/experimental/background-editing.md`
- `docs/features/experimental/concurrent-file-edits.md`
- `docs/features/experimental/custom-tools.md`
- `docs/features/experimental/experimental-features.md`
- `docs/features/image-generation.md`
- `docs/features/index.md`
- `docs/features/intelligent-context-condensing.mdx`
- `docs/features/keyboard-shortcuts.md`
- `docs/features/marketplace.mdx`
- `docs/features/mcp/mcp-vs-api.md`
- `docs/features/mcp/overview.md`
- `docs/features/mcp/recommended-mcp-servers.md`
- `docs/features/mcp/server-transports.md`
- `docs/features/mcp/using-mcp-in-roo.mdx`
- `docs/features/mcp/what-is-mcp.md`
- `docs/features/message-queueing.md`
- `docs/features/model-temperature.md`
- `docs/features/more-features.md`
- `docs/features/rooignore.md`
- `docs/features/settings-management.md`
- `docs/features/shell-integration.mdx`
- `docs/features/skills.mdx`
- `docs/features/slash-commands.mdx`
- `docs/features/suggested-responses.md`
- `docs/features/task-todo-list.mdx`
- `docs/features/worktrees.mdx`

### Getting started (3)

- `docs/getting-started/connecting-api-provider.md`
- `docs/getting-started/installing.mdx`
- `docs/getting-started/your-first-task.md`

### Providers (27)

- `docs/providers/anthropic.md`
- `docs/providers/baseten.md`
- `docs/providers/bedrock.md`
- `docs/providers/deepseek.md`
- `docs/providers/fireworks.md`
- `docs/providers/gemini.md`
- `docs/providers/index.json`
- `docs/providers/index.mdx`
- `docs/providers/litellm.md`
- `docs/providers/lmstudio.md`
- `docs/providers/minimax.md`
- `docs/providers/mistral.md`
- `docs/providers/moonshot.md`
- `docs/providers/ollama.md`
- `docs/providers/openai-chatgpt-plus-pro.md`
- `docs/providers/openai-compatible.md`
- `docs/providers/openai.md`
- `docs/providers/openrouter.md`
- `docs/providers/qwen-code.md`
- `docs/providers/requesty.md`
- `docs/providers/roo-code-router.md`
- `docs/providers/sambanova.md`
- `docs/providers/vercel-ai-gateway.md`
- `docs/providers/vertex.md`
- `docs/providers/vscode-lm.md`
- `docs/providers/xai.md`
- `docs/providers/zai.md`

### Roo Code Cloud (12)

- `docs/roo-code-cloud/analytics.mdx`
- `docs/roo-code-cloud/cloud-agents.mdx`
- `docs/roo-code-cloud/connect.mdx`
- `docs/roo-code-cloud/environments.mdx`
- `docs/roo-code-cloud/github-integration.mdx`
- `docs/roo-code-cloud/login.mdx`
- `docs/roo-code-cloud/overview.md`
- `docs/roo-code-cloud/slack-integration.mdx`
- `docs/roo-code-cloud/task-sharing.mdx`
- `docs/roo-code-cloud/task-sync.mdx`
- `docs/roo-code-cloud/team-plan.mdx`
- `docs/roo-code-cloud/what-is-roo-code-cloud.md`

### Roo Code Router (1)

- `docs/roo-code-router/overview.md`

### Update notes (405)

All files under `docs/update-notes/` were matched by the audit.

This includes:

- the index page
- version landing pages
- legacy `.md` release notes
- newer `.mdx` release notes
- pages whose frontmatter, headings, or body copy contain Roo references

Because this section contains the majority of impacted files, it should be reviewed as a separate workstream with a clear historical-content policy.

## High-Risk Examples Called Out During Audit

These examples show why the migration should be reviewed rather than done as a blind find/replace:

- `docs/features/settings-management.md` contains `roo-cline.*` settings keys and example filenames like `roo-code-settings.json`
- `docs/features/slash-commands.mdx` contains `.roo/commands/` paths
- `docs/features/rooignore.md` documents `.rooignore`
- `docs/features/mcp/using-mcp-in-roo.mdx` references a Roo-branded page slug and image path
- `docs/roo-code-cloud/environments.mdx` contains `ROO_*` env vars and `preview.roocode.cloud`
- `docs/getting-started/installing.mdx` references marketplace identity, GitHub org/repo, and support/community URLs
- `docs/sunset.md` is explicitly historical and time-bound
- `docs/update-notes/` contains historical release branding across hundreds of files

## Proposed Acceptance Criteria For The Next Step

The implementation pass should be considered complete only when:

1. All approved reader-facing Roo references in docs prose are migrated to Zoo naming.
2. Any untouched Roo-branded identifiers are intentionally documented as compatibility exceptions.
3. Route / filename / redirect changes are either completed together or deferred explicitly.
4. Historical release-note language is handled consistently.
5. No `.roo`, `roo-cline`, `ROO_*`, command IDs, or external URLs are changed accidentally.

## Approval Needed Before Implementation

Before executing the rebrand edits, these decisions should be confirmed:

- Should `docs/update-notes/` be fully renamed in prose, or treated as historical content?
- Should `docs/roo-code-cloud/` and `docs/roo-code-router/` routes be renamed now, or left in place with redirects later?
- Should technical identifiers like `.roo`, `roo-cline`, `roo.acceptInput`, and `ROO_*` remain unchanged for compatibility?
- Should external URLs and GitHub org references remain as-is until product infrastructure is renamed?

