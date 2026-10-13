---
description: Configure NanoGPT in Zoo Code to access its model catalog, routing preferences, and subscription-supported models.
keywords:
  - zoo code
  - nanogpt
  - ai provider
  - language models
  - api configuration
  - model routing
sidebar_label: NanoGPT
---

# Using NanoGPT With Zoo Code

Zoo Code includes a dedicated [NanoGPT](https://nano-gpt.com/) provider. It loads NanoGPT's current model catalog and supports NanoGPT routing preferences without requiring a custom OpenAI-compatible configuration.

**Website:** [https://nano-gpt.com/](https://nano-gpt.com/)

---

## Getting an API Key

1. Sign in or create an account on [NanoGPT](https://nano-gpt.com/).
2. Open the [NanoGPT API page](https://nano-gpt.com/api).
3. Create and copy an API key.

---

## Configuration in Zoo Code

1. **Open Zoo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Zoo Code panel.
2. **Select Provider:** Choose "NanoGPT" from the "API Provider" dropdown.
3. **Enter API Key:** Paste your NanoGPT API key.
4. **Select Model:** Choose a model from the fetched catalog.
5. **Choose Routing:** Keep automatic routing or select a preference such as fast, cheap, latency, throughput, tools, or caching.

---

## Tips and Notes

- **Model capabilities:** Zoo Code uses NanoGPT's model catalog to show models that support tool calling and to populate context, output, vision, reasoning, and pricing metadata.
- **Routing preferences:** A routing preference affects API requests without changing the model saved in your Zoo Code configuration.
- **Muse Spark 1.2 Contributor:** Zoo Code keeps mixed tool-result and environment context in one contiguous tool message for `meta/muse-spark-1.2-contributor`. This improves multi-turn tool reliability without disabling parallel tool calls.
- **Current model details:** See [NanoGPT's model catalog](https://nano-gpt.com/models) for availability and pricing.
