---
sidebar_label: Kimi Code
description: Connect Zoo Code to a Kimi membership or Kimi Code API key and choose between Kimi K3 and K2.7 Code models.
keywords:
  - kimi code
  - kimi subscription
  - kimi k3
  - kimi k2.7 code
  - moonshot ai
  - zoo code
  - api provider
  - oauth
---

# Kimi Code Provider

The Kimi Code provider connects Zoo Code to the coding models included with a Kimi membership. You can sign in with your Kimi subscription or use a Kimi Code API key. Model metadata is discovered automatically after you authenticate.

:::info Setup Required
1. Select **Kimi Code** as your provider in Zoo Code settings.
2. Choose an authentication method:
   - **Kimi Code subscription (OAuth):** Click **Sign in**, then approve the device code at the Kimi authorization page.
   - **API key:** Create a key in the [Kimi Code Console](https://www.kimi.com/code/console) and paste it into Zoo Code.
3. Pick a model available to your membership tier. The model list refreshes automatically after authentication.
:::

**Website:** [https://www.kimi.com/code](https://www.kimi.com/code)

---

## Available Models

| Model ID | Model | Context | Reasoning behavior |
| --- | --- | --- | --- |
| `k3` | Kimi K3 | Up to 1M tokens, depending on membership | `low`, `high`, or `max` reasoning effort; defaults to `high` |
| `k3-256k` | Kimi K3 256K | 256K tokens | `low`, `high`, or `max` reasoning effort; defaults to `high` |
| `kimi-for-coding` | Kimi K2.7 Code | 256K tokens | Thinking is always enabled and preserved across turns |
| `kimi-for-coding-highspeed` | Kimi K2.7 Code HighSpeed | 256K tokens | Same thinking behavior with faster output for eligible memberships |

Zoo Code reads current model capacity from Kimi Code when available. K3 uses a 131K default output limit through the direct Kimi Code API; this differs from limits imposed by third-party routing providers.

:::tip Choosing a K3 model
Use `k3-256k` for routine coding tasks when you do not need a larger context window. Kimi reports that it provides the same results within 256K while consuming less membership quota than `k3`.
:::

---

## Reasoning and Thinking

### Kimi K3

K3 always thinks and supports **Low**, **High**, and **Max** reasoning effort. Zoo Code defaults to **High** and sends the selected level as `reasoning_effort`. Changing the effort within a session can invalidate Kimi's context cache.

### Kimi K2.7 Code

K2.7 Code uses preserved thinking rather than configurable reasoning effort. Zoo Code keeps thinking enabled and carries the model's reasoning context across tool calls and turns.

---

## Notes

- Start a new task after switching model IDs to avoid carrying context cached for a different model.
- Model availability and maximum K3 context depend on your Kimi membership tier.
- Kimi Code is separate from Zoo Code's **Moonshot** provider, which uses Moonshot's pay-as-you-go API.
- With OAuth, Zoo Code refreshes expired tokens and retries an unauthorized request once automatically.

For current model and membership details, see the [Kimi Code model documentation](https://www.kimi.com/code/docs/en/kimi-code/models.html).
