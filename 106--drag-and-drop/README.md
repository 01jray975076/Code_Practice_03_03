# 🧩 Drag & Drop Cards

A lightweight, vanilla JavaScript drag‑and‑drop project that lets users move cards between lists using native HTML5 drag events. This project is intentionally minimal, making it perfect for learning, extending, or integrating into larger UI components like Kanban boards, task managers, or Trello‑style interfaces.

---

## 🚀 Features

- Drag cards between lists using native HTML5 drag‑and‑drop
- Smooth visual feedback when hovering over drop zones
- Clean, readable JavaScript with no external libraries
- Fully accessible event handling (`dragstart`, `dragover`, `drop`, etc.)
- Easy to customize and extend
- ---

## 🧠 How It Works

The project uses the browser’s built‑in drag‑and‑drop API:

- `dragstart` stores the card’s ID in `dataTransfer`
- `dragover` + `dragenter` allow lists to accept drops
- `drop` retrieves the dragged card and appends it to the new list
- CSS classes like `.over` provide visual cues during dragging

The logic is intentionally simple and easy to follow, making it ideal for beginners or as a foundation for more advanced interactions.

---
## 📂 Project Structure

/project-folder
│── index.html
│── style.css
│── script.js
└── README.md

Code

---

## ▶️ Getting Started

1. Clone or download the project  
2. Open `index.html` in your browser  
3. Drag cards between lists  
4. Customize styles or add new lists/cards as needed

No build tools or dependencies required — it runs entirely in the browser.
---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**

---

## 💡 Optional Enhancements
Here are some ideas you can add later:

- Add animations when cards move
- Add a “ghost preview” while dragging
- Add persistence using `localStorage`
- Add the ability to create new cards dynamically
- Add delete buttons or edit modes
- Turn it into a full Kanban board

---

## 📜 License

This project is free to use, modify, and learn from.

---

Enjoy building and experimenting!