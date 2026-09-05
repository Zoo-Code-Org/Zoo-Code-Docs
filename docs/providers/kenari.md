---
description: Configure Kenari in Zoo Code to reach Claude, GPT, DeepSeek, GLM, Kimi and more through one OpenAI-compatible gateway billed in Indonesian Rupiah.
keywords:
  - zoo code
  - kenari
  - ai provider
  - openai compatible
  - rupiah
  - indonesia
  - language models
  - api configuration
sidebar_label: Kenari
---

# Using Kenari With Zoo Code

Zoo Code supports accessing models through [Kenari](https://kenari.id), an Indonesian OpenAI-compatible AI gateway billed in Rupiah (IDR). One `kn-` API key reaches Claude, GPT, DeepSeek, GLM, Kimi and more over a single endpoint.

**Website:** [https://kenari.id](https://kenari.id)

---

## Getting an API Key

1.  **Sign Up/Sign In:** Go to [kenari.id](https://kenari.id) and create an account or sign in.
2.  **Create a Key:** Open **API keys** in the dashboard and click **Create key**. The key is prefixed `kn-` and is shown only once, so copy it right away. One key works for every model.

---

## Available Models

When you select Kenari as your provider, Zoo Code fetches the available models from Kenari's public `/v1/models` endpoint so the list stays current without an extension update. Other provider selections do not contact Kenari. Like any direct network request, Kenari receives standard connection metadata such as your IP address; no workspace content is included in this model-catalog request.

Prices are listed in Rupiah in the [Kenari catalog](https://kenari.id/docs) rather than inside Zoo Code, because Kenari bills in IDR while the extension shows prices in USD.

---

## Configuration in Zoo Code

1.  **Open Zoo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Zoo Code panel.
2.  **Select Provider:** Choose "Kenari" from the "API Provider" dropdown.
3.  **Enter API Key:** Paste your `kn-` key into the "Kenari API Key" field.
4.  **Select Model:** Choose your desired model from the "Model" dropdown.

---

## Tips and Notes

- **One key, many models:** A single `kn-` key reaches Claude, GPT, DeepSeek, GLM, Kimi and others through the same endpoint.
- **Rupiah billing:** Usage is metered and billed in Indonesian Rupiah, with no foreign card required.
- **OpenAI and Anthropic compatible:** Kenari serves both the OpenAI `/chat/completions` and Anthropic `/messages` shapes, so existing tooling works unchanged.

---

## Relevant resources

- [Kenari documentation](https://kenari.id/docs)
- [OpenAPI specification](https://kenari.id/openapi.json)
