---
description: Learn how to adjust model temperature in Zoo Code to optimize AI responses for different tasks, from precise code generation to creative brainstorming.
keywords:
  - model temperature
  - AI settings
  - output randomness
  - code generation
  - temperature control
  - API configuration
---

import KangarooIcon from '@site/src/components/KangarooIcon';

# Model Temperature

Temperature controls the randomness of AI model outputs. Adjusting this setting optimizes results for different tasks - from precise code generation to creative brainstorming. Temperature is one of the most powerful parameters for controlling AI behavior. A well-tuned temperature setting can dramatically improve the quality and appropriateness of responses for specific tasks.

<img src="/img/model-temperature/model-temperature.gif" alt="Animation showing temperature slider adjustment" width="100%" />

---

## What is Temperature?

Temperature is a setting (usually between 0.0 and 2.0) that controls how random or predictable the AI's output is. Finding the right balance is key: lower values make the output more focused and consistent, while higher values encourage more creativity and variation. For many coding tasks, a moderate temperature (around 0.3 to 0.7) often works well, but the best setting depends on what you're trying to achieve.

:::info Temperature and Code: Common Misconceptions
Temperature controls output randomness, not code quality or accuracy directly. Key points:

*   **Low Temperature (near 0.0):** Produces predictable, consistent code. Good for simple tasks, but can be repetitive and lack creativity. It doesn't guarantee *better* code.
*   **High Temperature:** Increases randomness, potentially leading to creative solutions but also more errors or nonsensical code. It doesn't guarantee *higher-quality* code.
*   **Accuracy:** Code accuracy depends on the model's training and prompt clarity, not temperature.
*   **Temperature 0.0:** Useful for consistency, but limits exploration needed for complex problems.
:::

---

## Default Values in Zoo Code

Zoo Code uses a default temperature of 0.0 for many models, optimizing for maximum determinism and precision in code generation. The exact default and whether temperature is accepted depend on the provider and selected model.

Some models use higher default temperatures - DeepSeek R1 models and certain reasoning-focused models default to 0.3, providing a balance between determinism and creative exploration.

Some thinking modes require a fixed temperature, while other reasoning models reject temperature entirely. For example, GPT-6 Astra does not accept custom `temperature` or `top_p` values.

Some specialized models don't support temperature adjustments at all, in which case Zoo Code respects these limitations automatically.

---

## When to Adjust Temperature

Here are some examples of temperature settings that might work well for different tasks:

*   **Code Mode (0.0-0.3):** For writing precise, correct code with consistent, deterministic results
*   **Architect Mode (0.4-0.7):** For brainstorming architecture or design solutions with balanced creativity and structure
*   **Ask Mode (0.7-1.0):** For explanations or open-ended questions requiring diverse and insightful responses
*   **Debug Mode (0.0-0.3):** For troubleshooting bugs with consistent precision

These are starting points – it's important to [experiment with different settings](#experimentation) to find what works best for your specific needs and preferences.

---

## How to Adjust Temperature

1.  **Open the Zoo Code Panel:** Click the Zoo Code icon (<KangarooIcon />) in the VS Code Activity Bar
2.  **Open Settings:** Click the <Codicon name="gear" /> icon in the top right corner
3.  **Find Temperature Control:** Navigate to the Providers section
4.  **Enable Custom Temperature:** Check the "Use custom temperature" box
5.  **Set Your Value:** Adjust the slider to your preferred value

    <img src="/img/model-temperature/model-temperature.png" alt="Temperature setting in Zoo Code settings panel" width="550" />
    *Temperature slider in Zoo Code settings panel*

---

## Using API Configuration Profiles for Temperature

Create multiple [API configuration profiles](/features/api-configuration-profiles) with different temperature settings:

**How to set up task-specific temperature profiles:**

1. Create specialized profiles like "Code - Low Temp" (0.1) and "Ask - High Temp" (0.8)
2. Configure each profile with appropriate temperature settings
3. Switch between profiles using the dropdown in settings or chat interface
4. Set different profiles as defaults for each mode for automatic switching when changing modes

This approach optimizes model behavior for specific tasks without manual adjustments.

---

## Technical Implementation

Zoo Code implements temperature handling with these considerations:

*   User-defined settings take priority over defaults
*   Provider-specific behaviors are respected
*   Model-specific limitations are enforced, including fixed-temperature modes and models that do not support temperature adjustments.

---

## Experimentation

Experimenting with different temperature settings is the most effective way to discover what works best for your specific needs:

### Effective Temperature Testing

1. **Start with defaults** - Begin with Zoo Code's preset values (0.0 for most tasks) as your baseline
2. **Make incremental adjustments** - Change values in small steps (±0.1) to observe subtle differences
3. **Test consistently** - Use the same prompt across different temperature settings for valid comparisons
4. **Document results** - Note which values produce the best outcomes for specific types of tasks
5. **Create profiles** - Save effective settings as [API configuration profiles](/features/api-configuration-profiles) for quick access

Remember that different models may respond differently to the same temperature values, and some reasoning models do not expose a temperature control at all.

---

## Related Features

- Works with all [API providers](/providers/openai) supported by Zoo Code
- Complements [custom instructions](/features/custom-instructions) for fine-tuning responses
- Works alongside [custom modes](/features/custom-modes) you create
