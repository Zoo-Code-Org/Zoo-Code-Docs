---
description: Control how hard a capable model thinks. Set the thinking effort for a task, have the model adjust it mid-task, and declare supported levels for self-hosted models.
keywords:
  - thinking effort
  - reasoning effort
  - dynamic thinking effort
  - model reasoning
  - per-request effort
  - self-hosted models
  - supported reasoning effort levels
---

# Thinking Effort

Zoo Code sends a **thinking effort** value with each request to models that support it. The value controls how much reasoning the model applies before answering. Higher levels take longer and cost more. Lower levels respond faster.

The effort resolves at two levels:

- **Profile default** — the "Model Reasoning Effort" value in the provider settings. Stored per API configuration profile and sent with every request.
- **Task-local override** — set from the chat during a task. It applies from the next request and is never written to settings. When the task ends, the profile default applies again.

---

## Setting the effort for a task

### Composer toggle

The composer bottom bar shows a thinking effort selector (brain icon) when the selected model supports per-request effort.

<img src="/img/thinking-effort/thinking-effort-composer.png" alt="Composer thinking effort menu listing the levels the model supports" width="600" />

*The composer menu lists only the levels the model advertises. Selecting a level applies it from the next request.*

- Selecting a level sets the task-local override. The change takes effect from the next API request, not mid-stream.
- If no task is open, the selection is kept and applied to the next task you start, when that task's model supports the level.
- The selection is never persisted to settings.

### Task header chip

The task header shows the current effective effort with a source badge:

| Badge | Meaning |
|---|---|
| **you** | Set with the composer toggle, and different from the profile default |
| **Zoo (auto)** | Set by the model with the `set_thinking_effort` tool, or inherited from a parent task |
| **default** | The profile default or the model default |

<img src="/img/thinking-effort/thinking-effort-chip.png" alt="Task header chip showing the effective effort and its source badge" width="600" />

*The source badge shows where the current effort came from.*

### In-chat display

Each effort change appends one line to the chat:

- Model-driven: `Thinking effort: high (Zoo) — <reason>`
- User-driven: `Thinking effort set to: low`
- Refused: a refusal line (see [Model-driven changes](#model-driven-changes))

---

## Effort levels and precedence

Not every level is available for every model. The composer menu and the settings dropdown show only what the model advertises.

| Level | Settings label |
|---|---|
| `none` | None |
| `minimal` | Minimal (Fastest) |
| `low` | Low |
| `medium` | Medium |
| `high` | High |
| `xhigh` | Extra High |
| `max` | Max |

The effective effort resolves in this order, strongest first:

1. Task-local override — composer toggle, `set_thinking_effort`, or the subtask start effort
2. Profile default — "Model Reasoning Effort" in the provider settings
3. Model default

---

## Model Reasoning Effort setting

The "Model Reasoning Effort" dropdown in the provider settings sets the profile default. It appears for providers whose models support reasoning effort, for example [OpenAI](/providers/openai), [DeepSeek](/providers/deepseek), [xAI](/providers/xai), and [Kimi Code](/providers/kimi-code).

- Selecting **None** turns reasoning off for that profile.
- The selection is stored with the profile and survives reloads.
- The per-provider pages list the exact levels and wire details for each provider.

---

## Model-driven changes

With the **Dynamic Thinking Effort** experimental setting enabled, a capable model can call the `set_thinking_effort` tool to adjust its own effort mid-task, for example after it judges that the task needs deeper analysis.

- The tool is model-initiated. It does not require user approval, and the model supplies a reason that appears in the in-chat line.
- Guardrails apply: a requested level is clamped to the nearest level the model supports, a level change that ping-pongs back (A → B → A) is refused, and at most 3 upward changes per task are allowed.
- Refused changes show a refusal line in the chat and leave the effort unchanged.

The experimental setting gates model-driven changes only. The composer toggle, header chip, and in-chat display are gated by model capability and work with the experimental setting off. See [Experimental Features](/features/experimental/experimental-features) and the [set_thinking_effort](/advanced-usage/available-tools/set-thinking-effort) tool reference.

---

## Subtask start effort

When the orchestrator starts a subtask with `new_task`, the approval block shows an effort selector next to the prompt, pre-filled with the parent task's effective effort.

- Change the selection before approving to start the subtask at a different effort.
- Leave it as-is to inherit the parent's effort.
- The selection applies to the subtask only. The parent task keeps its own effort.

---

## Self-hosted and OpenAI-compatible models

Self-hosted models do not advertise thinking effort support, so the controls are hidden by default. Declare the levels your model accepts on the [OpenAI Compatible](/providers/openai-compatible) provider page:

1. Open Settings and select your **OpenAI Compatible** profile.
2. Tick **Enable Reasoning Effort**.
3. Under **Supported Reasoning Effort Levels**, tick the levels your model accepts (None → Max).
4. Select the default level in **Model Reasoning Effort**.
5. Click **Save**.

<img src="/img/thinking-effort/thinking-effort-f7-levels.png" alt="Supported Reasoning Effort Levels declaration on an OpenAI Compatible profile" width="600" />

*Declaring the levels your model accepts unlocks the thinking effort controls for that profile.*

After saving, the composer toggle, header chip, and in-chat display render for that profile, and the declared levels appear in the menu. A declaration with no levels selected keeps the controls off.

**Scope note:** on the OpenAI Compatible provider page, the declaration unlocks the controls and the profile default. The selected level is not yet sent to the server with each request. The [Ollama](/providers/ollama) provider already sends the selected level through Ollama's `think` parameter.

---

## Provider support

Per-request thinking effort (the task-local surfaces above) is available where the model advertises the capability:

| Provider | Levels | Notes |
|---|---|---|
| [Anthropic](/providers/anthropic) / [Vertex](/providers/vertex) | low, medium, high, Extra High, Max | Adaptive-thinking models |
| [OpenAI](/providers/openai) | low, medium, high | o-series and GPT-5 families |
| [OpenRouter](/providers/openrouter) | per model | Capability comes from the model metadata |
| [Google Gemini](/providers/gemini) | Minimal, Low, Medium, High | `thinkingBudget` on 2.5 models |
| [DeepSeek](/providers/deepseek) | low, high, max | |
| [xAI](/providers/xai) | low, medium, high | Grok reasoning models |
| [Z.ai](/providers/zai) | None → Max | GLM models with a `thinking` toggle |
| [Friendli](/providers/friendli), [Requesty](/providers/requesty), Poe, Unbound | low, medium, high (extended on Friendli) | |
| [Kimi Code](/providers/kimi-code), nanoGPT, opencode-go | low, medium, high (varies) | |
| [Ollama](/providers/ollama) | low, medium, high | Sent through the `think` parameter. Extra High and Max map to high |
| [OpenAI Compatible](/providers/openai-compatible) (self-hosted) | user-declared | Declaration unlocks the controls. The selected level is not yet sent with each request |

Profiles that do not advertise the capability (and have no declaration) keep their current behavior. No thinking effort parameter is sent.
