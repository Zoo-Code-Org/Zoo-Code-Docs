---
sidebar_label: DeepSeek
description: Configure DeepSeek models in Zoo Code, including DeepSeek V4 Pro 0813 for coding, reasoning, and long-context agentic tasks.
keywords:
  - deepseek
  - deepseek chat
  - deepseek reasoner
  - zoo code
  - api provider
  - reasoning ai
  - coding ai
  - deepseek r1
  - deepseek v4 pro 0813
---

# Using DeepSeek With Zoo Code

Zoo Code supports DeepSeek V4 models through the DeepSeek API and compatible hosted providers.

**Website:** [https://platform.deepseek.com/](https://platform.deepseek.com/)

---

## Getting an API Key

1.  **Sign Up/Sign In:** Go to the [DeepSeek Platform](https://platform.deepseek.com/). Create an account or sign in.
2.  **Navigate to API Keys:** Find your API keys in the [API keys](https://platform.deepseek.com/api_keys) section of the platform.
3.  **Create a Key:** Click "Create new API key".  Give your key a descriptive name (e.g., "Zoo Code").
4.  **Copy the Key:**  **Important:** Copy the API key *immediately*.  You will not be able to see it again.  Store it securely.

---

## Available Models

Zoo Code supports all models available through the DeepSeek API.

DeepSeek V4 Pro 0813 is available through these Zoo Code providers using each provider's published model ID:

| Provider | Model ID |
| --- | --- |
| DeepSeek | `deepseek-v4-pro` |
| Fireworks AI | `accounts/fireworks/models/deepseek-v4-pro` |
| OpenCode Go | `deepseek-v4-pro` |
| Baseten | `deepseek-ai/DeepSeek-V4-Pro` |

For the complete, up-to-date model list, see [DeepSeek's API documentation](https://api-docs.deepseek.com/quick_start/pricing).

---

## Configuration in Zoo Code

1.  **Open Zoo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Zoo Code panel.
2.  **Select Provider:** Choose "DeepSeek" from the "API Provider" dropdown.
3.  **Enter API Key:** Paste your DeepSeek API key into the "DeepSeek API Key" field.
4.  **Select Model:** Choose your desired model from the "Model" dropdown.

---

## Tips and Notes
*   **Pricing:** Refer to the [DeepSeek Pricing](https://api-docs.deepseek.com/quick_start/pricing/) page for details on model costs.
