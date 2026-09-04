---
sidebar_label: OpenAI
description: Connect Zoo Code to OpenAI's official API for access to GPT and reasoning models with advanced capabilities and verbosity control.
keywords:
  - OpenAI
  - GPT models
  - reasoning models
  - Zoo Code
  - AI integration
  - API key
  - official OpenAI API
  - verbosity
  - reasoning effort
---

# Using OpenAI With Zoo Code

Zoo Code supports a curated set of models through the official OpenAI API, including GPT-6 Astra and GPT-5 models with model-specific reasoning controls.

:::info Want to use a ChatGPT Plus/Pro subscription instead?
Use the **OpenAI – ChatGPT Plus/Pro** provider to sign in via OAuth (no API key): [OpenAI – ChatGPT Plus/Pro](/providers/openai-chatgpt-plus-pro).
:::

**Website:** [https://openai.com/](https://openai.com/)

---

## Getting an API Key

1.  **Sign Up/Sign In:** Go to the [OpenAI Platform](https://platform.openai.com/). Create an account or sign in.
2.  **Navigate to API Keys:** Go to the [API keys](https://platform.openai.com/api-keys) page.
3.  **Create a Key:** Click "Create new secret key". Give your key a descriptive name (e.g., "Zoo Code").
4.  **Copy the Key:** **Important:** Copy the API key *immediately*. You will not be able to see it again. Store it securely.

---

## Available Models

Zoo Code's model picker lists models whose capabilities and pricing have been verified for the native integration. It does not automatically list every model returned by OpenAI.

GPT-6 Astra uses the model ID `gpt-6-astra`. OpenAI released it in the API and made it available in ChatGPT Work and Codex for Pro, Enterprise, and Business Premium users. You can use the API model here or connect an eligible ChatGPT subscription through the [ChatGPT Plus/Pro provider](/providers/openai-chatgpt-plus-pro).

GPT-6 Astra supports text and image input, a 1,050,000-token context window, up to 922,000 input tokens, and up to 128,000 output tokens. It produces text output. Zoo Code uses OpenAI's Responses API because Astra tool calling is not supported through Chat Completions.

For current capabilities and rollout status, see [OpenAI's GPT-6 Astra model page](https://developers.openai.com/api/docs/models/gpt-6-astra) and [API changelog](https://developers.openai.com/api/docs/changelog).

---

## Configuration in Zoo Code

### Setup

1.  **Open Zoo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Zoo Code panel.
2.  **Select Provider:** Choose "OpenAI" from the "API Provider" dropdown.
3.  **Enter API Key:** Paste your OpenAI API key into the "OpenAI API Key" field.
4.  **Select Model:** Choose your desired model from the "Model" dropdown.
5.  **(Optional) Base URL:** If you need to use a custom base URL, enter the URL. Most people won't need to adjust this.

---

## Advanced Features

### Reasoning Effort Control

For models that support reasoning, Zoo Code shows only the levels accepted by the selected model.

**GPT-6 Astra:**
- `low`
- `medium` (Zoo Code default)
- `high`
- `xhigh`
- `max`

GPT-6 Astra does not accept `none` or `minimal`. Zoo Code falls back to its `medium` default if an imported profile contains an unsupported effort.

**GPT-5 Models:**
- Supported levels vary by model and can include `none`, `minimal`, `low`, `medium`, `high`, `xhigh`, and `max`.

**o1/o3/o4 Models:**
- `low` - Minimal thinking time
- `medium` - Balanced approach
- `high` - Maximum thinking for complex problems

Some models have preset reasoning levels that cannot be changed.

### Verbosity Control

Available for models that explicitly advertise support in Zoo Code, verbosity controls the detail level of responses:

- `low` - Concise, direct responses
- `medium` (default) - Balanced detail
- `high` - Comprehensive, detailed responses

### Temperature Settings

Temperature controls output randomness where the selected model supports it. GPT-6 Astra does not accept custom `temperature` or `top_p` values, so Zoo Code omits them. The same is true for several reasoning models.

### Conversation Continuity

The native provider uses the Responses API and preserves compatible response and reasoning items across tool turns. GPT-6 Astra also supports prompt caching. Cache writes are billed separately, cached reads use a lower rate, and requests above 272,000 input tokens use long-context pricing for the entire request. See [OpenAI's prompt caching guide](https://developers.openai.com/api/docs/guides/prompt-caching).

---

## Tips and Notes

*   **Pricing:** Refer to [OpenAI API pricing](https://developers.openai.com/api/docs/pricing) for current standard, Flex, Fast, Batch, cache, and long-context rates.
*   **Azure OpenAI Service:** If you'd like to use the Azure OpenAI service, please see our section on [OpenAI-compatible](/providers/openai-compatible) providers.
*   **Context Optimization:** For GPT-5-Codex, leverage prompt caching by maintaining consistent context across requests to reduce costs significantly.
