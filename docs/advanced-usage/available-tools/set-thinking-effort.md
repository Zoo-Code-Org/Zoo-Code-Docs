---
description: Discover how the set_thinking_effort tool lets the model adjust its own thinking effort mid-task, with guardrails that keep changes bounded.
keywords:
  - set_thinking_effort
  - Zoo Code tools
  - thinking effort
  - reasoning effort
  - mid-task adjustment
  - dynamic thinking effort
---

# set_thinking_effort

The `set_thinking_effort` tool adjusts the current task's thinking effort while the task is running. The model calls it when it judges that the task needs more or less reasoning than the current effort provides. The change applies from the next API request.

---

## Parameters

The tool accepts these parameters:

- `effort` (required): The effort level to apply. Valid levels: `none`, `minimal`, `low`, `medium`, `high`, `xhigh`, `max`. A requested level the model does not support is clamped to the nearest supported level.
- `reason` (required): Why the change is needed. The reason appears in the in-chat display line.

---

## What It Does

This tool sets the task-local thinking effort override for the running task. The override applies to the next API request and stays in effect for the rest of the task until it is changed again. It is never written to the provider settings.

The tool does not require user approval. The model decides when to call it, and the user can still change the effort at any time with the composer thinking effort selector.

---

## When is it used?

- When the model starts a task at a moderate effort and later determines that a specific step needs deeper analysis
- When a long task contains phases that need less reasoning, to keep the task fast and within budget
- When the task direction changes and the previous effort no longer fits the work

---

## Key Features

- Model-initiated, with a required reason shown in the chat
- No approval gate; the user retains control through the composer toggle
- Applies from the next request, never mid-stream
- Task-local: it does not modify the provider settings or other tasks
- Guardrails keep the effort bounded within a single task

---

## Limitations

- Requires the **Dynamic Thinking Effort** experimental setting to be enabled; otherwise the tool is not exposed to the model
- Requires a model that advertises per-request thinking effort; otherwise the call returns an error
- A requested level that the model does not support is clamped to the nearest supported level; if the model advertises no usable levels, the call is refused
- Oscillation is refused: returning to the level the task just moved away from (A → B → A) keeps the current effort
- Upward changes are capped at 3 per task; further upward changes are refused
- Setting `effort` to `disable` is not supported; use the provider settings to turn reasoning off

---

## How It Works

When the model calls `set_thinking_effort`, the tool follows this process:

1. **Validation**:
   - Rejects missing `effort` or `reason`
   - Rejects levels outside the valid set
   - Clamps the requested level to the nearest level in the model's capability array

2. **Guardrails**:
   - If the task is already at the requested level, the call is a no-op and the tool confirms the current effort
   - If the requested level would oscillate back to the level the task just left, the change is refused and a refusal line appears in the chat
   - If the change is upward and the task has already made 3 upward changes, the change is refused and a refusal line appears in the chat

3. **Application**:
   - Sets the task-local runtime effort with the source marked as model-driven
   - Appends one line to the chat: `Thinking effort: <level> (Zoo) — <reason>`
   - The task header chip updates to show the new effort with the **Zoo (auto)** source badge
   - The next API request carries the new effort; the provider settings are unchanged

---

## Usage Examples

Raising the effort before a complex refactoring step:

```
<set_thinking_effort>
<effort>high</effort>
<reason>The next step refactors the authentication module across 6 files; deeper analysis reduces the chance of breaking edge cases.</reason>
</set_thinking_effort>
```

Lowering the effort for a repetitive batch step:

```
<set_thinking_effort>
<effort>low</effort>
<reason>The remaining 40 files need the same one-line change; fast responses keep the task within budget.</reason>
</set_thinking_effort>
```

Refused oscillation: the task moves from `high` to `medium`, then requests `high` again. The tool refuses with:

```
Thinking effort change refused: oscillation between 'high' and 'medium' detected. Keep the current effort.
```
