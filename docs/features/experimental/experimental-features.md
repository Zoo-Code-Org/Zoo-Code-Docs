---
description: 'Explore Zoo Code''s experimental features. Enable advanced capabilities that are still under development.'
keywords:
  - experimental features
  - "Zoo Code beta"
  - "advanced features"
  - "concurrent file edits"
  - "feature flags"
---

# Experimental Features

Zoo Code includes experimental features that are still under development. These features may be unstable, change significantly, or be removed in future versions. Use them with caution and be aware that they may not work as expected.

**Warning:** Experimental features may have unexpected behavior, including potential data loss or security vulnerabilities. Enable them at your own risk.

---

## Enabling Experimental Features

To enable or disable experimental features:

1.  Open the Zoo Code settings (`<Codicon name="gear" />` icon in the top right corner).
2.  Go to the "Advanced Settings" section.
3.  Find the "Experimental Features" section.

---

## Current Experimental Features

The following experimental features are currently available:

- [Custom Tools](/features/experimental/custom-tools) - Define TypeScript/JavaScript tools that Zoo can call like built-in tools
- [Background Editing](/features/experimental/background-editing) - Work uninterrupted while Zoo edits files in the background
- [Image Generation](/features/image-generation) - Generate images from text prompts and save them to your workspace
- [Dynamic Thinking Effort](/features/thinking-effort) - Let the model adjust its own thinking effort mid-task with the `set_thinking_effort` tool. The chat UI surfaces (composer toggle, header chip, in-chat display) are gated by model capability and do not require this setting
- [Run Slash Command](/advanced-usage/available-tools/run-slash-command) - Execute predefined slash commands for templated instructions and workflow automation

---

## Providing Feedback

If you encounter any issues with experimental features, or if you have suggestions for improvements, please report them on the [Zoo Code GitHub Issues page](https://github.com/Zoo-Code-Org/Zoo-Code/issues).

Your feedback is valuable and helps us improve Zoo Code!
