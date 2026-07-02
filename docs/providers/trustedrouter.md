---
description: Configure TrustedRouter in Zoo Code through the OpenRouter-compatible provider flow.
keywords:
  - zoo code
  - trustedrouter
  - openrouter compatible
  - ai provider
  - language models
  - api configuration
sidebar_label: TrustedRouter
---

# Using TrustedRouter With Zoo Code

TrustedRouter exposes an OpenAI-compatible API for model routing. In Zoo Code, connect to it by selecting the OpenRouter provider and setting a custom base URL.

**Website:** [https://trustedrouter.com/](https://trustedrouter.com/)

---

## Getting an API Key

1. **Sign in:** Go to the [TrustedRouter console](https://trustedrouter.com/console/api-keys).
2. **Create an API key:** Create a new key for Zoo Code.
3. **Copy the key:** Store it securely. The raw key is only shown once.

---

## Configuration in Zoo Code

1. **Open Zoo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Zoo Code panel.
2. **Select Provider:** Choose "OpenRouter" from the "API Provider" dropdown.
3. **Enter API Key:** Paste your TrustedRouter API key into the "OpenRouter API Key" field.
4. **Enable Custom Base URL:** Check "Use custom base URL" and enter:

   ```text
   https://api.trustedrouter.com/v1
   ```

5. **Select Model:** Enter a TrustedRouter model ID, for example:

   ```text
   trustedrouter/auto
   trustedrouter/zdr
   trustedrouter/e2e
   trustedrouter/synth
   ```

---

## Tips and Notes

- **Model IDs:** TrustedRouter supports router aliases such as `trustedrouter/auto`, `trustedrouter/zdr`, and `trustedrouter/e2e`, plus direct model IDs from its model catalog.
- **Pricing:** Usage is billed by TrustedRouter based on the selected downstream model and route.
- **Verification:** TrustedRouter publishes gateway attestation details at [https://trust.trustedrouter.com/](https://trust.trustedrouter.com/).
