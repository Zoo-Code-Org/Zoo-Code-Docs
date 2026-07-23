---
sidebar_label: Kimi Code
description: Use Kimi's coding models with your Kimi Code subscription (OAuth) or an API key, with configurable reasoning effort.
keywords:
  - kimi code
  - kimi k3
  - moonshot
  - zoo code
  - api provider
  - oauth
  - reasoning effort
---

# Kimi Code Provider

Use Kimi's coding models (Kimi K3) through your Kimi Code subscription with OAuth device-flow sign-in, or with a Kimi Code API key. Model metadata is discovered automatically after you authenticate.

:::info Setup Required
1. **Select "Kimi Code"** as your provider in Zoo Code settings
2. **Authenticate**:
   - **Kimi Code subscription (OAuth)**: Click "Sign in", then approve the device code shown in Zoo Code at the Kimi authorization page
   - **API key**: Paste your Kimi Code API key
3. **Pick a model**: The model list refreshes automatically once you're authenticated
:::

**Website:** [https://www.kimi.com/code](https://www.kimi.com/code)

---

## Available Models

Kimi Code's coding model offers a large context window and up to 32,768 max output tokens. The exact model list is fetched from your account after sign-in; use "Refresh Models" in the provider settings to update it.

---

## Configuration

### Authentication Method
- **Kimi Code subscription (OAuth)**: Device-flow sign-in with automatic token refresh
- **API key**: Direct key-based access

### Reasoning Effort

Kimi K3 always thinks; you control how hard with the **Model Reasoning Effort** dropdown in the provider settings:

- **Low**: Faster responses with reduced reasoning
- **High**: Deeper reasoning
- **Max** (default): Maximum reasoning effort

The selected effort is sent as the `reasoning_effort` parameter on every request. Thinking cannot be turned off for Kimi K3, so there is no "None" option.

---

## Key Features

- **OAuth 2.0 device flow**: Secure sign-in with automatic token refresh and transparent retry on expired tokens
- **API key support**: Alternative authentication for headless setups
- **Automatic model discovery**: Model list and capabilities fetched from your account
- **Configurable reasoning effort**: Low, High, or Max (default Max)

---

## Common Issues

**"Not authenticated with Kimi Code"**
- Sign in from the Kimi Code provider settings (OAuth), or switch to the API key method

**"401 Unauthorized"**
- With OAuth, Zoo Code refreshes the token and retries once automatically
- If it persists, sign out and sign in again
