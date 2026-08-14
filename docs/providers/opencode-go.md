---
sidebar_label: OpenCode Go
description: Configure OpenCode Go in Zoo Code for subscription access to GLM-5.3 and other coding models through a dynamically updated catalog.
keywords:
  - open code go
  - opencode go
  - glm 5.3
  - coding models
  - zoo code
  - api provider
  - subscription
  - openai compatible
---

# Using OpenCode Go With Zoo Code

[OpenCode Go](https://opencode.ai/docs/go/) is a subscription service for coding models. Zoo Code fetches its model catalog dynamically and applies model-specific capabilities, context limits, and pricing metadata for supported models.

**Website:** [https://opencode.ai/docs/go/](https://opencode.ai/docs/go/)

---

## Getting an API Key

1. Sign in to [OpenCode Zen](https://opencode.ai/auth) and subscribe to OpenCode Go.
2. Copy your API key from the OpenCode console.
3. Keep the key secure. Zoo Code stores it using VS Code's secret storage.

---

## GLM-5.3

GLM-5.3 is available in Zoo Code through OpenCode Go with model ID `glm-5.3`. The integration supports:

- A 1,000,000-token context window and up to 131,072 output tokens
- Always-on reasoning with Low, High, and Max effort levels; Max is the default
- Tool calling, reasoning preservation across tool calls, prompt cache accounting, and streaming output
- Published OpenCode Go rates of $1.40 input, $0.26 cached input, and $4.40 output per million tokens

OpenCode Go includes GLM-5.3 in its subscription usage allowance. See the [OpenCode Go documentation](https://opencode.ai/docs/go/#usage-limits) for current plan prices and limits.

:::note
Z AI's standard pay-as-you-go API has not published GLM-5.3 availability or token pricing yet. Select **Opencode Go** in Zoo Code to use the currently supported route.
:::

---

## Configuration in Zoo Code

1. **Open Zoo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Zoo Code panel.
2. **Select Provider:** Choose **Opencode Go** from the **API Provider** dropdown.
3. **Enter API Key:** Paste your OpenCode Go API key.
4. **Select Model:** Choose `glm-5.3` from the model dropdown.

Zoo Code fetches the public OpenCode Go model list automatically. Use **Refresh Models** if a newly released model does not appear immediately.

---

## Relevant Resources

- [OpenCode Go documentation](https://opencode.ai/docs/go/)
- [GLM-5.3 model documentation](https://docs.z.ai/guides/llm/glm-5.3)
