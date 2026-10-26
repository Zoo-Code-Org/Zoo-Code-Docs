---
sidebar_label: DeepSeek
description: Configure DeepSeek V4 models in Zoo Code through the first-party API and compatible hosted providers.
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

Zoo Code supports DeepSeek V4 models through the DeepSeek API and compatible hosted providers. DeepSeek and OpenCode Go route the stable `deepseek-v4-pro` alias to the DeepSeek V4 Pro 0813 checkpoint. Fireworks AI and Baseten offer separate IDs for the published V4 Pro preview weights and the 0813 checkpoint.

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

DeepSeek V4 Pro is available through these Zoo Code providers using each provider's published model ID:

| Provider | Model ID | Version served |
| --- | --- | --- |
| DeepSeek | `deepseek-v4-pro` | 0813 checkpoint |
| OpenCode Go | `deepseek-v4-pro` | 0813 checkpoint |
| Fireworks AI | `accounts/fireworks/models/deepseek-v4-pro` | Published V4 Pro preview weights |
| Fireworks AI | `accounts/fireworks/models/deepseek-v4-pro-0813` | 0813 checkpoint |
| Baseten | `deepseek-ai/DeepSeek-V4-Pro` | Published V4 Pro preview weights |
| Baseten | `deepseek-ai/DeepSeek-V4-Pro-0813` | 0813 checkpoint |

For the complete, up-to-date model list, see [DeepSeek's API documentation](https://api-docs.deepseek.com/quick_start/pricing).

---

## Configuration in Zoo Code

1.  **Open Zoo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Zoo Code panel.
2.  **Select Provider:** Choose "DeepSeek" from the "API Provider" dropdown.
3.  **Enter API Key:** Paste your DeepSeek API key into the "DeepSeek API Key" field.
4.  **Select Model:** Choose your desired model from the "Model" dropdown.

---

## Tips and Notes
*   **First-party pricing:** At 16:00 UTC on August 16, 2026, DeepSeek introduces peak and off-peak pricing. Peak hours are 01:00-04:00 and 06:00-10:00 UTC; all other hours are half-price. Peak V4 Pro rates per million tokens are $1.32 for cache misses, $0.044 for cache hits, and $3.96 for output. Peak V4 Flash rates are $0.44, $0.014, and $1.32 respectively. Zoo Code uses peak rates for static cost estimates.
*   **Hosted-provider pricing:** OpenCode Go keeps its published V4 Pro rates of $0.435 input, $0.003625 cached input, and $0.87 output, while V4 Flash remains $0.14, $0.0028, and $0.28. Baseten charges $1.32 input, $0.132 cached input, and $3.96 output for its dated 0813 model; its preview model remains $1.74, $0.145, and $3.48. Fireworks charges $1.32, $0.044, and $3.96 for 0813, while its preview model remains $1.74, $0.145, and $3.48. Provider prices are independent, so refer to each provider's pricing page for future changes.
