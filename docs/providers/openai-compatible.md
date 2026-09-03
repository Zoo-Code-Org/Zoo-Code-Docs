---
sidebar_label: OpenAI Compatible
description: Use Zoo Code with any OpenAI-compatible API provider including Perplexity, Together AI, Anyscale, and custom endpoints.
keywords:
  - OpenAI compatible
  - Zoo Code
  - API integration
  - custom endpoints
  - Together AI
  - Perplexity
  - Anyscale
  - model configuration
---

# Using OpenAI Compatible Providers With Zoo Code

Zoo Code supports a wide range of AI model providers that offer APIs compatible with the OpenAI API standard. This means you can use models from providers *other than* OpenAI, while still using a familiar API interface.  This includes providers like:

*   **Local models** running through tools like Ollama and LM Studio (covered in separate sections).
*   **Cloud providers** like Perplexity, Together AI, Anyscale, Modelis, and others.
*   **Any other provider** offering an OpenAI-compatible API endpoint.

This document focuses on setting up providers *other than* the official OpenAI API (which has its own [dedicated configuration page](/providers/openai)).

---

## General Configuration

The key to using an OpenAI-compatible provider is to configure two main settings:

1.  **Base URL:** This is the API endpoint for the provider.  It will *not* be `https://api.openai.com/v1` (that's for the official OpenAI API).
2.  **API Key:**  This is the secret key you obtain from the provider.
3.  **Model ID:** This is the model name of the specific model.

You'll find these settings in the Zoo Code settings panel (click the <Codicon name="gear" /> icon):

*   **API Provider:** Select "OpenAI Compatible".
*   **Base URL:** Enter the base URL provided by your chosen provider.  **This is crucial.**
*   **API Key:** Enter your API key.
*   **Model:** Choose a model.
*   **Extra Body:** Optionally add provider-specific JSON fields to each request body.
*   **Model Configuration:** This lets you customize advanced configuration for the model
    - Max Output Tokens
    - Context Window
    - Image Support
    - Computer Use
    - Input Price
    - Output Price

---

## Provider-Specific Request Fields

Some OpenAI-compatible providers support request-body fields that are not part of Zoo Code's standard model settings. Enter these fields as a JSON object in **Extra Body**.

For example, Sail Research uses `metadata.completion_window` to select a completion tier:

<img src="/img/openai-compatible/extra-body.png" alt="OpenAI Compatible Extra Body setting containing Sail Research completion window metadata" width="480" />

```json
{
  "metadata": {
    "completion_window": "balanced"
  }
}
```

Zoo Code validates the JSON before saving the provider profile and adds the fields to streaming, non-streaming, and single-completion requests. The top-level value must be an object.

Extra Body cannot override fields managed by Zoo Code, including the model, messages, streaming mode, tools, reasoning settings, response format, temperature, and token limits. Configure those values through Zoo Code's normal controls where available. Do not put API keys or other secrets in Extra Body because provider profiles can be exported.

---

## Native Tool Calling

Zoo Code uses **native tool calling** exclusively. This is the only supported tool protocol -- there is no XML-based fallback.

At a high level:

- **Tool definitions** are sent to the model using OpenAI's native tools schema.
- **Tool calls** stream back as dedicated tool events, including the tool name, arguments, and metadata.
- **Tool arguments** are streamed incrementally, which reduces latency between the model deciding to use a tool and Zoo Code executing it.

### Requirements

For native tool calling to work, the model you select **must** support OpenAI-compatible tool calling. If a model does not support native tool calling, it cannot be used with Zoo Code.

GPT-6 Astra is not supported through this provider when tools are enabled. OpenAI allows Astra tool calling only through the Responses API, while Zoo Code's general OpenAI Compatible provider uses Chat Completions. Use the native [OpenAI provider](/providers/openai), or the dedicated [LiteLLM provider](/providers/litellm) with a documented Responses-backed route.

### Example: simple native tool flow

Here's a simplified example of how a file-reading tool might be exposed when using an OpenAI-native endpoint:

```json
{
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "read_file",
        "description": "Read a file from the workspace with line numbers.",
        "parameters": {
          "type": "object",
          "properties": {
            "path": { "type": "string", "description": "Relative file path" },
            "start_line": { "type": "integer", "nullable": true },
            "end_line": { "type": "integer", "nullable": true }
          },
          "required": ["path"]
        }
      }
    }
  ]
}
```

When the model decides to use `read_file`, Zoo Code surfaces **streamed tool events** in the task timeline:

- A native *tool call* event with the tool name and arguments as they're being generated
- The corresponding *tool result* event showing the file contents and any truncation or line-range information

This gives you lower-latency feedback on which tools are being used and with what arguments.

### Limitations

- **Model support:** Not all models support native tool calling. If a model does not support tools, it cannot be used with Zoo Code. Check your provider's documentation to confirm tool-calling support for the model you want to use.
- **Provider quirks:** Some OpenAI-compatible providers only partially implement the native tools API. If you encounter tool-calling errors, verify that your provider fully supports OpenAI-compatible function calling.

For a deeper overview of how tools work in Zoo Code in general, see the [Tool Use Overview](/advanced-usage/available-tools/tool-use-overview).

---

## Azure OpenAI

Azure OpenAI uses a deployment-specific URL format. Configure the OpenAI Compatible provider with these values:

| Field | Value |
| --- | --- |
| Base URL | `https://<resource>.openai.azure.com/openai` |
| API Key | Key 1 or Key 2 from Azure AI Studio |
| Azure deployment name | Your deployment name, such as `my-gpt4o-deployment` |
| Use Azure | Checked, or automatically detected from an `azure.com` URL |
| Azure API Version | Leave unchecked to use `2024-08-01-preview`, or enter a specific version |

The resource endpoint shown in Azure AI Studio ends at `.openai.azure.com/`. Zoo Code automatically adds the required `/openai` path when it is missing, so both the resource endpoint and the full Base URL above work.

The deployment name is user-defined and can differ from the underlying model name. For example, if you deploy `gpt-4o` under the name `brotherhood`, enter `brotherhood`, not `gpt-4o`.

The **Use Azure** option selects Azure's deployment-based API format. Zoo Code detects Azure automatically for `azure.com` URLs; enable this option manually when Azure OpenAI is behind a reverse proxy or another hostname.

Requests use this path:

```text
https://<resource>.openai.azure.com/openai/deployments/<deployment-name>/chat/completions?api-version=<version>
```

---

## Troubleshooting

*   **"Invalid API Key":** Double-check that you've entered the API key correctly.
*   **"Model Not Found":** Make sure you're using a valid model ID for your chosen provider.
*   **"404 Resource not found" with Azure OpenAI:** Make sure the Base URL points to your Azure resource and the Azure deployment name matches the name configured in Azure AI Studio, not the underlying model name. Zoo Code adds `/openai` to resource endpoints automatically.
*   **Connection Errors:** Verify the Base URL is correct and that your provider's API is accessible.
*   **Tool-calling errors:** Zoo Code requires native tool calling. If your model does not support it, you need to switch to a model that does. Check your provider's documentation for tool-calling compatibility.
*   **Unexpected Results:** If you're getting unexpected results, try a different model.

By using an OpenAI-compatible provider, you can leverage the flexibility of Zoo Code with a wider range of AI models. Remember to always consult your provider's documentation for the most accurate and up-to-date information.
