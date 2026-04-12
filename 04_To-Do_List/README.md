📝 To‑Do List App
A simple, browser‑based To‑Do List application built with HTML, CSS, and JavaScript. Tasks can be added, removed, cleared, and saved using the browser’s localStorage, allowing them to persist even after refreshing or closing the page.

📌 Features
Add new tasks

Remove individual tasks

Clear all tasks at once

Automatically save tasks to localStorage

Load saved tasks when the page opens

Lightweight and framework‑free

📂 Project Structure
Code
todo-list/
│
├── index.html
├── style.css
├── script.js
└── README.md
Your current version includes JavaScript inside the HTML file, but this structure shows how it would look if you separate it into its own script.js file.

🚀 Getting Started
1. Clone the repository
bash
git clone https://github.com/yourusername/todo-list.git
2. Open the project
Simply open index.html in your browser. No build tools or dependencies required.

🧠 How It Works
✔ Task Storage
Tasks are stored in an array:

js
let tasks = [];
✔ Adding Tasks
When the user enters text and clicks Add, the task is pushed into the array, saved to localStorage, and displayed.

✔ Removing Tasks
Each task is rendered with a small x button that removes it by index.

✔ Clearing All Tasks
The Clear All button empties the array and updates storage.

✔ Saving & Loading
Tasks are saved using:

js
localStorage.setItem("tasks", JSON.stringify(tasks));
And loaded using:

js
tasks = JSON.parse(saved);
This ensures the list persists across page reloads.

🖥️ Example Code Snippets
HTML Structure
html
<h2>To-Do List</h2>
<input id="task" placeholder="New text">
<button onclick="addTask()">Add</button>
<ul id="list"></ul>
<button onclick="clearAll()">Clear All</button>
Displaying Tasks
js
function displayTask() {
    let html = "";
    for (let i = 0; i < tasks.length; i++) {
        html += "<li>" + tasks[i] +
                " <button onclick='removeTask(" + i + ")'>x</button></li>";
    }
    document.getElementById("list").innerHTML = html;
}
🎯 Future Enhancements
Add checkboxes to mark tasks as completed
Add animations or transitions
Add categories or priority levels
Add drag‑and‑drop task reordering
Add dark/light mode
📄 License
This project is open‑source under the MIT License.