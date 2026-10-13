---
sidebar_label: Z AI
description: Configure Z AI models in Zoo Code. Access GLM family models with region-aware routing for international and China mainland users.
keywords:
  - z ai
  - zai
  - zhipu ai
  - glm models
  - zoo code
  - api provider
  - china ai
  - international ai
  - openai compatible
---

# Using Z AI With Zoo Code

Z AI (Zhipu AI) provides advanced language models with the GLM family. The provider offers region-aware routing with separate endpoints for international users and China mainland users.

**Website:** [https://z.ai/model-api](https://z.ai/model-api) (International) | [https://open.bigmodel.cn/](https://open.bigmodel.cn/) (China)

---

## Getting an API Key

### International Users

1. **Sign Up/Sign In:** Go to [https://z.ai/model-api](https://z.ai/model-api). Create an account or sign in.
2. **Navigate to API Keys:** Access your account dashboard and find the API keys section.
3. **Create a Key:** Generate a new API key for your application.
4. **Copy the Key:** **Important:** Copy the API key immediately and store it securely.

### China Mainland Users

1. **Sign Up/Sign In:** Go to [https://open.bigmodel.cn/](https://open.bigmodel.cn/). Create an account or sign in.
2. **Navigate to API Keys:** Access your account dashboard and find the API keys section.
3. **Create a Key:** Generate a new API key for your application.
4. **Copy the Key:** **Important:** Copy the API key immediately and store it securely.

---

## Available Models

Zoo Code provides a model catalog for each Z AI entrypoint. GLM-5.3 is currently available through the International Coding and China Coding entrypoints for GLM Coding Plan subscribers.

### GLM-5.3

GLM-5.3 supports a 1,000,000-token context window, up to 131,072 output tokens, prompt caching, tool calling, and always-on reasoning with Low, High, and Max effort levels. Max is the default.

Z AI has not yet published GLM-5.3 availability or per-token pricing for its standard pay-as-you-go API. Zoo Code therefore lists `glm-5.3` only when you select a Coding entrypoint. Until official GLM-5.3 pricing is available, Zoo Code estimates usage with the existing GLM-5.2 rates:

- International: $1.40 input, $0.26 cached input, and $4.40 output per million tokens
- China mainland: $0.68 input, $0.13 cached input, and $2.28 output per million tokens

For the complete, up-to-date model list and specifications, see the official provider documentation:
- **International:** [Z AI model documentation](https://z.ai/model-api)
- **China Mainland:** [BigModel documentation](https://open.bigmodel.cn/)

---

## Configuration in Zoo Code

1. **Open Zoo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Zoo Code panel.
2. **Select Provider:** Choose "Z AI" from the "API Provider" dropdown.
3. **Select Region:** Choose your region:
   - "International Coding" (default) for the international GLM Coding Plan
   - "China Coding" for the mainland GLM Coding Plan
   - "International API" for the international pay-as-you-go API
   - "China API" for the mainland pay-as-you-go API
4. **Enter API Key:** Paste your Z AI API key into the "Z AI API Key" field.
5. **Select Model:** Choose your desired model from the "Model" dropdown. Available models depend on your selected region.

### Defaults & Behavior
- **Automatic Base URL:** Selected region determines the API endpoint automatically:
  - International Coding → `https://api.z.ai/api/coding/paas/v4`
  - China Coding → `https://open.bigmodel.cn/api/coding/paas/v4`
  - International API → `https://api.z.ai/api/paas/v4`
  - China API → `https://open.bigmodel.cn/api/paas/v4`
- **Dynamic Models:** Changing the region automatically updates the model catalog and target endpoint.
- **No Manual Base URL Needed:** You typically do not need to configure a custom base URL.

---

## Tips and Notes

* **Entrypoint Selection:** The entrypoint determines the region, API endpoint, and available models. GLM-5.3 currently requires one of the Coding entrypoints.
* **Automatic Base URL:** Base URL is selected from your region; manual override is not required in typical setups.
* **OpenAI Compatibility:** Z AI uses an OpenAI-compatible API, providing streaming responses and usage reporting.
* **Model Selection:** Models are automatically filtered based on your selected region to ensure compatibility.
* **API Key Required:** A valid API key is required for all requests. Ensure you've obtained one from the appropriate regional platform.
* **Pricing:** Check the respective regional websites for current pricing information.
