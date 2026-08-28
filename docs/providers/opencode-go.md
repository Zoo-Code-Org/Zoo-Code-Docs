---
sidebar_label: OpenCode Go
description: Connect Zoo Code to an OpenCode Go subscription and use its dynamically discovered coding models with accurate context limits.
keywords:
  - opencode go
  - open models
  - zoo code
  - api provider
  - context window
---

# Using OpenCode Go With Zoo Code

OpenCode Go is a subscription provider for a curated set of coding models. Zoo Code fetches the available model IDs from OpenCode Go, so the model picker stays current as the service adds or removes models.

**Website:** [https://opencode.ai/docs/go/](https://opencode.ai/docs/go/)

## Configuration

1. Subscribe to OpenCode Go and copy your API key from the OpenCode console.
2. Open Zoo Code settings with the gear icon (<Codicon name="gear" />).
3. Select **OpenCode Go** as the API provider.
4. Enter your OpenCode Go API key.
5. Select a model from the dynamically loaded model list.

## Model Limits

OpenCode Go's model-list endpoint may return only a model ID, without context-window or maximum-output metadata. Zoo Code maintains limits for the models exposed by the service and uses live metadata when OpenCode Go supplies it. This keeps the context meter and output-token controls aligned with the selected model instead of applying one generic limit to every model.

The available models and their limits can change. Refresh the model list in Zoo Code after OpenCode Go updates its catalog.

For the current model catalog, endpoints, and usage limits, see the [OpenCode Go documentation](https://opencode.ai/docs/go/).
