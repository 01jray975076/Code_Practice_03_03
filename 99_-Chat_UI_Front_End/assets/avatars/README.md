💬 Chat UI — Front-End Only
A visually polished messaging interface built with HTML, CSS, and JavaScript.
📌 Overview
This project focuses entirely on front-end UI development. You’ll build a chat interface that looks and behaves like a real messaging app — but without any backend or real-time server.
The goal is to practice layout, animations, DOM updates, and UI patterns that appear in modern chat apps.
⭐ Features
This project includes the following core features:
Core UI
Left/right chat bubbles
Contact list sidebar
Scrollable chat window
Message timestamps
Input bar with send button
Interactive Behavior
Auto-scroll to latest message
Typing indicator animation
Fake “AI replies” (optional)
Theme switcher (optional)
🧠 Skills You’ll Practice
This project strengthens your front-end fundamentals:
Flexbox mastery (chat bubbles, sidebar layout)
UI layout patterns (header, footer, scrollable middle)
CSS animations (typing dots, fade-in messages)
DOM manipulation (adding messages dynamically)
Scroll management (keeping chat pinned to bottom)
📁 Project Structure
A simple, clean folder layout:
Code
chat-ui/
│
├── index.html
├── style.css
├── script.js
│
└── assets/
    ├── avatars/
    └── icons/
You can expand this later with themes, JSON data, or additional pages.
🚀 Getting Started
1. Create the base files
index.html
style.css
script.js
2. Build the layout in HTML
Start with:
Sidebar
Chat header
Chat messages container
Input bar
3. Style the layout using Flexbox
Sidebar: fixed width
Chat area: flexible
Messages: aligned left/right
4. Add JavaScript behavior
Append new messages
Auto-scroll
Fake typing indicator
Optional: theme toggle
🧩 Example Components to Build
Chat Bubble Structure
html
<div class="message outgoing">
    <p>Hello! How are you?</p>
    <span class="timestamp">10:32 AM</span>
</div>
Typing Indicator
html
<div class="typing-indicator">
    <span></span><span></span><span></span>
</div>
🎯 Goals of This Project
By the end, you should feel confident with:
Building complex UI layouts
Managing dynamic DOM updates
Creating smooth UI animations
Structuring a clean front-end project
This is the kind of project that looks impressive in a portfolio and teaches real-world UI skills.
📘 Next Steps
Once the base UI is complete, you can enhance it with:
Themes (light/dark)
Multiple conversations
Emoji picker
Message reactions
Chat search