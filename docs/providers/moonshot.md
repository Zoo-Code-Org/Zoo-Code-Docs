---
sidebar_label: Moonshot
description: Configure Moonshot AI's language models in Zoo Code. Access Kimi K2 series models through Moonshot's API with dynamic model picker and multi-region support.
keywords:
  - moonshot
  - moonshot ai
  - kimi k2
  - zoo code
  - api provider
  - kimi-k2.5
  - kimi-k2.6
  - kimi-k2.7-code
---

# Using Moonshot With Zoo Code

Zoo Code supports accessing models through the Moonshot AI API, featuring the Kimi K2 series of language models with dynamic model discovery and multi-region endpoint support.

**Website:** [https://platform.moonshot.ai/](https://platform.moonshot.ai/) (Global) | [https://platform.moonshot.cn/](https://platform.moonshot.cn/) (China)

---

## Getting an API Key

1.  **Sign Up/Sign In:** Go to the [Moonshot Platform](https://platform.moonshot.ai/) (or [platform.moonshot.cn](https://platform.moonshot.cn/) for China-based access). Create an account or sign in.
2.  **Navigate to API Keys:** Find your API keys in the API keys section of the platform console.
3.  **Create a Key:** Create a new API key. Give your key a descriptive name (e.g., "Zoo Code").
4.  **Copy the Key:** **Important:** Copy the API key _immediately_. You will not be able to see it again. Store it securely.

---

## Base URL Selection

Moonshot provides two API endpoints depending on your region. Select the appropriate one in the **Moonshot Base URL** dropdown in Zoo Code settings:

| Endpoint          | Base URL                     | Use Case                |
| ----------------- | ---------------------------- | ----------------------- |
| `api.moonshot.ai` | `https://api.moonshot.ai/v1` | Global access (default) |
| `api.moonshot.cn` | `https://api.moonshot.cn/v1` | China-based access      |

Choose the endpoint that matches your account region for the best connectivity and latency.

---

## Available Models

Zoo Code supports the following Moonshot models. The model list is fetched dynamically from the Moonshot API using the **Refresh Models** button in settings.

| Model                      | Context | Max Output | Multimodal           | Key Features                                          |
| -------------------------- | ------- | ---------- | -------------------- | ----------------------------------------------------- |
| `kimi-k2-0905-preview`     | 256K    | 16K        | Text only            | Default model. Agentic coding, prompt caching         |
| `kimi-k2-thinking`         | 256K    | 16K        | Text only            | Reasoning model with deep thinking support            |
| `kimi-k2-turbo-preview`    | 256K    | 32K        | Text only            | High-speed variant (up to 100 tokens/s)               |
| `kimi-k2.5`                | 256K    | 16K        | Text + Image + Video | Multimodal with thinking mode support                 |
| `kimi-k2.6`                | 256K    | 16K        | Text + Image + Video | Improved coding, self-correction                      |
| `kimi-k2.7-code`           | 256K    | 16K        | Text + Image + Video | Best for coding tasks, long-context programming       |
| `kimi-k2.7-code-highspeed` | 256K    | 16K        | Text + Image + Video | High-speed coding (~180 tokens/s, up to 260 tokens/s) |

### Refreshing the Model List

The models available in Zoo Code are fetched live from the Moonshot API:

1.  Enter your API key in the settings.
2.  Click the **Refresh Models** button to fetch the current model list.
3.  The model dropdown will populate with all available models from your selected endpoint.

**Note:** An API key is required to fetch the model list. The Refresh Models button will show an error if no key is configured.

For the complete, up-to-date model list and pricing, see [Moonshot's API documentation](https://platform.moonshot.ai/docs).

---

## Configuration in Zoo Code

1.  **Open Zoo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Zoo Code panel.
2.  **Select Provider:** Choose "Moonshot" from the "API Provider" dropdown.
3.  **Select Base URL:** Choose the appropriate endpoint (`api.moonshot.ai` or `api.moonshot.cn`) from the "Moonshot Base URL" dropdown.
4.  **Enter API Key:** Paste your Moonshot API key into the "Moonshot API Key" field.
5.  **Refresh Models:** Click the **Refresh Models** button to fetch the available models.
6.  **Select Model:** Choose your desired model from the "Model" dropdown.

---

## Tips and Notes

- **Multi-Region Support:** Use `api.moonshot.ai` for global access and `api.moonshot.cn` for China-based accounts.
- **Dynamic Model Picker:** Models are fetched from the Moonshot API, so you always have access to the latest models without updating Zoo Code.
- **Prompt Caching:** Most Kimi K2 models support prompt caching, reducing costs for repeated prefix tokens.
- **Max Tokens:** Moonshot requires the `max_tokens` parameter. The default is set based on the selected model's capabilities.
- **Pricing:** Refer to the [Moonshot platform](https://platform.moonshot.ai/) for details on model costs and pricing.
