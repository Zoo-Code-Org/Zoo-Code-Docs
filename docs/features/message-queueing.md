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

Message queueing lets you type and send messages while Zoo is still working. Just type your message and hit Enter - it gets queued and will be processed as soon as Zoo is ready for your next input. Queued messages remain user instructions. They interrupt pending subtask lifecycle and task completion prompts so Zoo can process your feedback before moving on.

---

## How It Works

While Zoo is working:

1. **Type your message** as normal
2. **Press Enter** or click Send
3. **Message gets queued** and appears with "Queued Messages:" label
4. **Zoo processes the queued message** as soon as it's ready for your next input. If Zoo is about to start or finish a subtask, or accept a completion result, the message is treated as feedback before that lifecycle action continues.

<img src="/img/message-queueing/message-queueing.png" alt="Message queueing interface showing active processing and three queued messages" width="800" />

**What you'll see:**
- Queued messages appear with "Queued Messages:" label
- Bordered cards for each queued message
- Click messages to edit them
- Trash icon to delete messages

The input field stays active so you can type anytime - just hit Enter to queue your message.

:::info Queued Messages and Approval Controls
Queued messages interrupt subtask start, subtask finish, and task completion prompts so Zoo receives your latest instruction before changing task state. For ordinary tool and command prompts, queued input can still accompany the next action as approval feedback. Use the visible approval controls when you need to review an ordinary action before it runs, or configure [Auto-Approving Actions](/features/auto-approving-actions).
:::


---

## FAQ

**Q: How many messages can I queue?**
A: There is no hard limit on the number of messages you can queue. The queue size is only limited by available browser memory.

**Q: Can I reorder queued messages?**
A: No, messages are always processed in the order they were sent (FIFO).

**Q: Do queued messages require approval?**
A: Queued messages are instructions, not standalone actions. They interrupt subtask lifecycle and completion prompts, but can accompany ordinary tool or command approvals as feedback. If you need to review an ordinary action first, wait for its approval prompt instead of queueing the message.

**Q: What happens if a subtask finishes before my queued message is processed?**
A: Zoo treats the queued message as feedback and keeps control in the subtask. The subtask processes your instruction before it can finish and return control to its parent.

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
