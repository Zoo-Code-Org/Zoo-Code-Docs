---
sidebar_label: MiMo
description: Configure Xiaomi MiMo models in Zoo Code. Access MiMo V2.5 Pro and V2.5 for deep reasoning and tool calling with 1M context windows.
keywords:
  - mimo
  - xiaomi
  - mimo v2.5 pro
  - mimo v2.5
  - zoo code
  - api provider
  - reasoning ai
  - coding ai
  - tool calling
---

# Using MiMo With Zoo Code

Zoo Code supports accessing models through the Xiaomi MiMo API, including `mimo-v2.5-pro` and `mimo-v2.5`. MiMo models are designed for deep reasoning, tool calling, and structured output with support for up to 1 million tokens of context.

**Website:** [https://platform.xiaomimimo.com/](https://platform.xiaomimimo.com/)

---

## Getting an API Key

1.  **Sign Up/Sign In:** Go to the [MiMo Platform](https://platform.xiaomimimo.com/). Create an account or sign in.
2.  **Navigate to API Keys:** Find your API keys in the platform dashboard.
3.  **Create a Key:** Click "Create new API key". Give your key a descriptive name (e.g., "Zoo Code").
4.  **Copy the Key:** **Important:** Copy the API key *immediately*. You will not be able to see it again. Store it securely.

---

## Available Models

Zoo Code supports the following MiMo models:

| Model | Context Window | Max Output | Images | Description |
|-------|---------------|------------|--------|-------------|
| `mimo-v2.5-pro` (default) | 1M tokens | 131K tokens | No | Flagship reasoning model with deep thinking and tool calling |
| `mimo-v2.5` | 1M tokens | 131K tokens | Yes | Full-modal model (text, image, audio, video input) with deep thinking |

For the complete, up-to-date model list and capabilities, see [MiMo's API documentation](https://platform.xiaomimimo.com/docs/en-US/quick-start/model-hyperparameters).

---

## Configuration in Zoo Code

1.  **Open Zoo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Zoo Code panel.
2.  **Select Provider:** Choose "Xiaomi MiMo" from the "API Provider" dropdown.
3.  **Enter API Key:** Paste your MiMo API key into the "MiMo API Key" field.
4.  **Select Model:** Choose your desired model from the "Model" dropdown.
5.  **(Optional) Base URL:** If you need to use a custom base URL for the MiMo API, enter it in the "Base URL" field. The default is `https://token-plan-sgp.xiaomimimo.com/v1`. Other regional endpoints are also available (e.g., `https://token-plan-cn.xiaomimimo.com/v1` for China, `https://token-plan-ams.xiaomimimo.com/v1` for Europe).

---

## Tips and Notes

*   **Pricing:** MiMo offers competitive pricing. See the [MiMo pricing page](https://platform.xiaomimimo.com/) for current rates. Note that long-context usage (above 256K tokens) is charged at 2x the standard rate.
*   **Thinking Mode:** MiMo models support deep thinking mode which is enabled by default. The model reasons through complex problems step by step, improving accuracy on coding and reasoning tasks.
*   **Tool Calling:** MiMo models support tool calling for agentic workflows. Reasoning content is preserved across multi-turn conversations with tool calls for consistent results.
*   **Cache Pricing:** Cache reads are available at a discounted rate. Cache writes are currently free for a limited time.
