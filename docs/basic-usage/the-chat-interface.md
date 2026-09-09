---
description: Learn how to use the Zoo Code chat interface effectively. Understand the layout, features, and best practices for communicating with your AI coding assistant.
keywords:
  - Zoo Code chat interface
  - AI assistant interaction
  - chat features
  - user interface
  - VS Code extension
---

import KangarooIcon from '@site/src/components/KangarooIcon';

# The Chat Interface

The Zoo Code chat interface is your primary way of interacting with it. It's located in the Zoo Code panel, which you can open by clicking the Zoo Code icon (<KangarooIcon />) in the VS Code Activity Bar.

---

## Components of the Chat Interface

The chat interface consists of the following main elements:

1. **Chat History:** This area displays the conversation history between you and Zoo Code.  It shows your requests, Zoo Code's responses, and any actions taken (like file edits or command executions).

2. **Input Field:** This is where you type your tasks and questions for Zoo Code.  You can use plain English to communicate.

3. **Action Buttons:** These buttons appear above the input field and allow you to approve or reject Zoo Code's proposed actions. The available buttons change depending on the context. If you scroll through earlier messages while an action is waiting, its approval controls remain available alongside the scroll-to-bottom control.

4. **Send Button:** This looks like a small plane and it's located to the far right of the input field. This sends messages to Zoo after you've typed them.

5. **Plus Button:** The plus button is located at the top in the header. It switches to the Chat tab and focuses the input. To reset the session, start a new task or clear the current task.

6. **Settings Button:** The settings button is a gear, and it's used for opening the settings to customize features or behavior.

7. **Mode Selector:** The mode selector is a dropdown located to the left of the chat input field. It is used for selecting which mode Zoo should use for your tasks. Its settings gear opens the Modes tab, not general settings.

The chat composer, mode and API selectors, auto-approval controls, and todo-delete confirmation follow your active IDE appearance. Their borders, hover states, keyboard focus rings, and error text remain distinguishable in VS Code light, dark, and high-contrast themes.

<img src="/img/the-chat-interface/chat-composer-light.png" alt="Zoo Code chat composer using the VS Code light theme" width="600" />

*The chat composer uses the current VS Code theme for its text, controls, boundaries, and focus treatment.*

<img src="/img/the-chat-interface/chat-composer-focus-dark.png" alt="Zoo Code chat composer with keyboard focus using the VS Code dark theme" width="600" />

*Keyboard focus remains visible when the composer follows a dark IDE theme.*

<img src="/img/the-chat-interface/ui-settings-light.png" alt="Zoo Code UI settings using the VS Code light theme" width="600" />

*UI settings use the same theme-aware controls and contrast treatment.*

---

## Tip: Using the Secondary Sidebar

For a better workflow, you can drag Zoo Code to VS Code's [Secondary Sidebar](https://code.visualstudio.com/api/ux-guidelines/sidebars#secondary-sidebar). This allows you to keep Zoo Code visible while still having access to the Explorer, Search, Source Control, and other panels in the primary sidebar.

To set this up:
1. Click and drag the Zoo Code icon from the Activity Bar
2. Drop it on the right side of your editor to create a secondary sidebar
3. Now you can use both sidebars simultaneously!

For more productivity tips, check out our [Tips & Tricks](/tips-and-tricks) guide.

---

## Interacting with Messages

* **Clickable Links:** File paths, URLs, and other mentions in the chat history are clickable.  Clicking a file path will open the file in the editor.  Clicking a URL will open it in your default browser.
* **Copying Text:** You can copy text from the chat history by selecting it and using the standard copy command (Ctrl/Cmd + C).  Some elements, like code blocks, have a dedicated "Copy" button.
* **Expanding and Collapsing**: Click on a message to expand or collapse it.

### Mermaid Diagrams

Zoo Code renders Mermaid diagrams directly in chat. Diagram backgrounds, labels, lines, and exported PNGs follow your active IDE color theme, including light and high-contrast themes. If you change themes while a conversation is open, existing diagrams update automatically.

---

## Status Indicators

* **Loading Spinner:**  When Zoo Code is processing a request, you'll see a loading spinner.
* **Error Messages:**  If an error occurs, a red error message will be displayed.
* **Success Messages:** Green messages indicate successful completion of actions.
