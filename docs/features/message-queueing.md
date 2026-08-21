---
description: Learn how message queueing in Zoo Code allows you to send multiple messages while the AI is working, with messages being processed sequentially for uninterrupted workflow.
keywords:
  - message queueing
  - queued messages
  - sequential processing
  - workflow efficiency
  - chat interface
  - Zoo Code features
---


# Message Queueing

Keep your workflow uninterrupted with message queueing—send multiple messages while Zoo is working, and they'll be processed sequentially without losing your train of thought.

:::tip Efficiency Boost
No more waiting. Type your follow-up thoughts, corrections, or additional requests while Zoo is still processing, and they'll be handled in order.
:::

---

## Overview

Message queueing lets you type and send messages while Zoo is still working. Just type your message and hit Enter - it gets queued and will be processed as soon as Zoo is ready for your next input. Queued messages remain user instructions: they do not approve pending tool calls, file writes, commands, or task completion prompts.

---

## How It Works

While Zoo is working:

1. **Type your message** as normal
2. **Press Enter** or click Send
3. **Message gets queued** and appears with "Queued Messages:" label
4. **Zoo processes the queued message** as soon as it's ready for your next input. If Zoo is waiting for approval, the message is treated as feedback instead of approving the pending action.

<img src="/img/message-queueing/message-queueing.png" alt="Message queueing interface showing active processing and three queued messages" width="800" />

**What you'll see:**
- Queued messages appear with "Queued Messages:" label
- Bordered cards for each queued message
- Click messages to edit them
- Trash icon to delete messages

The input field stays active so you can type anytime - just hit Enter to queue your message.

:::info Queued Messages Preserve Approval Controls
Queued messages never count as approval. If a message reaches Zoo while an action is awaiting confirmation, Zoo stops that pending action and receives the queued message as feedback. Approve actions explicitly with the approval controls or configure [Auto-Approving Actions](/features/auto-approving-actions).
:::


---

## FAQ

**Q: How many messages can I queue?**
A: There is no hard limit on the number of messages you can queue. The queue size is only limited by available browser memory.

**Q: Can I reorder queued messages?**
A: No, messages are always processed in the order they were sent (FIFO).

**Q: Do queued messages require approval?**
A: No. Queued messages are instructions, not actions. They do not bypass approval controls; approve a pending action explicitly or use [Auto-Approving Actions](/features/auto-approving-actions).

**Q: What happens if an approval prompt appears before my queued message is processed?**
A: Zoo treats the queued message as feedback and does not run the pending action. The message remains part of the current task so Zoo can respond to the new instruction.

**Q: What happens if Zoo encounters an error?**
A: Queued messages remain in the queue. You can choose to cancel them or let processing continue.

**Q: Do queued messages use the same context?**
A: Yes, each message builds on the conversation context, including previous messages and responses.

**Q: Can I edit a queued message?**
A: Yes! Click on any queued message to edit it. Press Enter to save your changes or Escape to cancel editing. Multiple messages can be edited simultaneously.

---

## See Also

- [The Chat Interface](/basic-usage/the-chat-interface) - Learn about all chat features
- [Task Management](/features/task-todo-list) - Organize complex workflows
- [Auto-Approving Actions](/features/auto-approving-actions) - Streamline repetitive approvals
- [Keyboard Shortcuts](/features/keyboard-shortcuts) - Speed up your workflow
