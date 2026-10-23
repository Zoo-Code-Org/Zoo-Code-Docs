---
sidebar_label: ChatGPT Plus/Pro
title: ChatGPT Plus/Pro
description: Use OpenAI models in Zoo Code with your ChatGPT Plus/Pro subscription (OAuth sign-in, no API key).
keywords:
  - OpenAI Codex
  - ChatGPT Plus
  - ChatGPT Pro
  - Zoo Code
  - OAuth
  - no api key
  - subscription
---

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
  <iframe
    src="https://www.youtube.com/embed/c1IXRMl5i0g?rel=0&modestbranding=1"
    title="OpenAI – ChatGPT Plus/Pro provider setup"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    }}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
</div>

---

## Quickstart: Connect your subscription to Zoo Code

1. Open Zoo Code settings (click the gear icon <Codicon name="gear" /> in the Zoo Code panel).
2. In **API Provider**, select **OpenAI – ChatGPT Plus/Pro**.
3. Click **Sign in to OpenAI Codex**.
4. Finish the sign-in flow in your browser.
5. Back in Zoo Code settings, pick a model from the dropdown.
6. Save.

## GPT-6 Astra

GPT-6 Astra is available through this provider for eligible ChatGPT Pro, Enterprise, and Business Premium accounts. Select `gpt-6-astra` after signing in; availability remains controlled by OpenAI for the signed-in account.

Zoo Code uses Codex's Responses Lite request format for Astra, including subscription-based prompt caching and tool calls. The Codex model exposes an 872,000-token maximum context window, image input, and `low`, `medium`, `high`, `xhigh`, and `max` reasoning levels. Zoo Code defaults Astra to `low` reasoning and does not send unsupported disabled or `none` reasoning values.

For the upstream rollout and model contract, see [OpenAI's Codex model catalog](https://github.com/openai/codex/blob/main/codex-rs/models-manager/models.json) and [GPT-6 Astra model page](https://developers.openai.com/api/docs/models/gpt-6-astra).

## Tips and Notes

- **Subscription Required:** You need an active ChatGPT Plus or Pro subscription. This provider won't work with free ChatGPT accounts. See [OpenAI's ChatGPT plans](https://openai.com/chatgpt/pricing) for more info.
- **No API Costs:** Usage through this provider counts against your ChatGPT subscription, not separately billed API usage.
- **Sign Out:** To disconnect, use the "Sign Out" button in the provider settings.

## What you can't do (and why)

- **You can't use arbitrary OpenAI API models.** This provider only exposes the models listed in Zoo's Codex model catalog.
- **You can't export/migrate your sign-in state with settings export.** OAuth tokens are stored in VS Code SecretStorage, which isn't included in Zoo's settings export.
