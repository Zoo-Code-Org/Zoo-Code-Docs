---
sidebar_label: IO Intelligence
description: Configure IO Intelligence (io.net) in Zoo Code to run open-weight models such as DeepSeek, Qwen, GLM, Kimi and Llama through one OpenAI-compatible API key.
keywords:
  - zoo code
  - io intelligence
  - io.net
  - ai provider
  - open-weight models
  - deepseek
  - qwen
  - llama
  - api configuration
---

# Using IO Intelligence With Zoo Code

Zoo Code supports [IO Intelligence](https://io.net/intelligence), the inference API from io.net. One API key gives access to a catalog of open-weight models (DeepSeek, Qwen, GLM, Kimi, Llama, Gemma, gpt-oss and more) over an OpenAI-compatible endpoint.

**Website:** [https://io.net/intelligence](https://io.net/intelligence)

---

## Getting an API Key

1.  **Sign Up/Sign In:** Go to [ai.io.net](https://ai.io.net/ai/api-keys) and create an account or sign in.
2.  **Create a Key:** Open **API Keys**, create a new key and copy it. The [API keys guide](https://io.net/docs/guides/intelligence/api-keys-and-secrets) covers key management in detail.

---

## Available Models

Zoo Code fetches the model list from the IO Intelligence `/models` endpoint, so the catalog stays current without an extension update. Context window, output limit and per-token prices come from the catalog. The default model is `meta-llama/Llama-3.3-70B-Instruct`.

Two things to know about the list:

- Models that the catalog marks as not supporting tool calling are left out, since Zoo Code depends on tool calls.
- Some models are limited to higher account tiers. The list is fetched with your key, so it reflects what your account can use.

The full catalog, with tier information, is on the [io.net models page](https://io.net/docs/guides/intelligence/exploring-ai-models).

---

## Configuration in Zoo Code

1.  **Open Zoo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Zoo Code panel.
2.  **Select Provider:** Choose "IO Intelligence" from the "API Provider" dropdown.
3.  **Enter API Key:** Paste your IO Intelligence API key into the "IO Intelligence API Key" field.
4.  **Select Model:** Choose your desired model from the "Model" dropdown.

---

## Tips and Notes

- **Reasoning models:** Models that return reasoning content, such as the DeepSeek and Kimi thinking variants, stream it to Zoo Code as reasoning output alongside the answer.
- **Model ids:** The picker uses the same Hugging Face style ids as the io.net API, for example `deepseek-ai/DeepSeek-V3.2` or `Qwen/Qwen3.6-27B`.
- **One key, many models:** A single key reaches every model your account tier allows, so switching models does not need a new key.

---

## Relevant resources

- [IO Intelligence product page](https://io.net/intelligence)
- [io.net documentation](https://io.net/docs)
- [Models on IO Intelligence](https://io.net/docs/guides/intelligence/exploring-ai-models)
- [API keys and secrets guide](https://io.net/docs/guides/intelligence/api-keys-and-secrets)
