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

Zoo Code automatically fetches all available models from Z AI's API based on your selected region.

For the complete, up-to-date model list and specifications, see the official provider documentation:
- **International:** [Z AI model documentation](https://z.ai/model-api)
- **China Mainland:** [BigModel documentation](https://open.bigmodel.cn/)

### GLM-5.3

GLM-5.3 is available through the international Z AI API and the international and China Coding Plan endpoints. It supports a 1 million token context window, up to 128K output tokens, prompt caching, and `low`, `high`, or `max` reasoning effort.

Zoo Code follows the model's required request behavior automatically:

- Thinking is always enabled because GLM-5.3 does not accept `thinking.type: "disabled"`.
- Preserved thinking is enabled with `thinking.clear_thinking: false`, and prior `reasoning_content` is passed back unchanged across turns.
- Reasoning effort defaults to `max`; users can also select `high` or `low`.
- Temperature defaults to `1`. Zoo Code omits `top_p`, allowing Z AI to apply its default of `0.95`.

See the [Z AI Chat Completion API documentation](https://docs.z.ai/api-reference/llm/chat-completion) for the provider's complete request schema.

---

## Configuration in Zoo Code

1. **Open Zoo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Zoo Code panel.
2. **Select Provider:** Choose "Z AI" from the "API Provider" dropdown.
3. **Select Region:** Choose your region:
   - "International" (default) for global access
   - "China" for mainland China access
4. **Enter API Key:** Paste your Z AI API key into the "Z AI API Key" field.
5. **Select Model:** Choose your desired model from the "Model" dropdown. Available models depend on your selected region.

### Defaults & Behavior
- **Automatic Base URL:** Selected region determines the API endpoint automatically:
  - International → `https://api.z.ai/api/paas/v4`
  - China → `https://open.bigmodel.cn/api/paas/v4`
- **Dynamic Models:** Changing the region automatically updates the model catalog and target endpoint.
- **No Manual Base URL Needed:** You typically do not need to configure a custom base URL.

---

## Tips and Notes

* **Region Selection:** The region setting determines both the API endpoint and available models:
  - International: Uses `https://api.z.ai/api/paas/v4`
  - China: Uses `https://open.bigmodel.cn/api/paas/v4`
* **Automatic Base URL:** Base URL is selected from your region; manual override is not required in typical setups.
* **OpenAI Compatibility:** Z AI uses an OpenAI-compatible API, providing streaming responses and usage reporting.
* **Model Selection:** Models are automatically filtered based on your selected region to ensure compatibility.
* **API Key Required:** A valid API key is required for all requests. Ensure you've obtained one from the appropriate regional platform.
* **Pricing:** Check the respective regional websites for current pricing information.
