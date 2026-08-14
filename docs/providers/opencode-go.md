---
sidebar_label: OpenCode Go
description: Use OpenCode Go with Zoo Code for curated open coding models through a low-cost subscription.
keywords:
  - opencode go
  - glm-5.3
  - qwen3.8 max
  - coding models
  - zoo code
  - api provider
---

# Using OpenCode Go With Zoo Code

OpenCode Go is a subscription provider for a curated set of open coding models. Zoo Code loads the current model catalog from OpenCode Go and applies model-specific context, reasoning, caching, and pricing metadata.

**Website:** [https://opencode.ai/docs/go/](https://opencode.ai/docs/go/)

---

## Getting an API Key

1. Sign in to the [OpenCode console](https://opencode.ai/auth).
2. Subscribe to OpenCode Go.
3. Copy your API key.
4. In Zoo Code settings, select **Opencode Go** and enter the API key.

---

## Available Models

The catalog includes GLM-5.3 and Qwen3.8 Max:

- **GLM-5.3**: 1M-token context window, 128K maximum output, and always-on reasoning with Low, High, and Max effort levels.
- **Qwen3.8 Max**: Multimodal input, 1M-token context window, 128K maximum output, prompt caching, and preserved reasoning.

The model list is fetched dynamically and may change. See the [OpenCode Go documentation](https://opencode.ai/docs/go/) for current availability, usage limits, and pricing.

---

## Configuration in Zoo Code

1. Open Zoo Code settings using the gear icon (<Codicon name="gear" />).
2. Select **Opencode Go** from the API Provider dropdown.
3. Enter your OpenCode Go API key.
4. Refresh the model list and select a model.

Zoo Code automatically uses the API protocol required by the selected model.
