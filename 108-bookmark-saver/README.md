📘 README.md — Bookmark Saver
markdown
# 🔖 Bookmark Saver

A simple and clean Bookmark Saver application built with **HTML**, **CSS**, and **JavaScript**.  
This project allows users to save website bookmarks with a name and URL, view them instantly, and remove them when no longer needed. All bookmarks are stored in **localStorage**, so they persist even after refreshing the page.

---

## 🚀 Features

- Add bookmarks with a **name** and **URL**
- Automatically validates URL format (`http://` or `https://`)
- Clickable links open in a new tab
- Remove bookmarks individually
- Saves all bookmarks in **localStorage**
- Loads saved bookmarks automatically on page load
- Clean, minimal UI

---
## 🧠 How It Works

### **1. Adding a Bookmark**
- User enters a name and URL  
- URL is validated to ensure it starts with `http://` or `https://`  
- Bookmark is added to the list and saved to localStorage  

### **2. Rendering Bookmarks**
- Each bookmark is displayed as:
  - A clickable link  
  - A “Remove” button  

### **3. Removing a Bookmark**
- Clicking “Remove” deletes it from:
  - The UI  
  - LocalStorage  

### **4. Persistence**
- Bookmarks are stored in localStorage as an array of objects:
  ```json
  { "name": "Example", "url": "https://example.com" }
On page load, all saved bookmarks are re-rendered automatically.

📂 Project Structure
Code
/bookmark-saver
│── index.html
│── style.css
│── script.js
└── README.md
▶️ Getting Started
Clone or download the project

Open index.html in your browser

Enter a bookmark name and URL

Click Add Bookmark

Your bookmarks will appear instantly and stay saved
🛠️ Technologies Used
HTML5

CSS3

JavaScript (ES6)

LocalStorage API

💡 Possible Future Enhancements
Favicon preview next to each bookmark

Edit bookmark feature

Search/filter bookmarks

Categories or tags

Drag‑and‑drop sorting

Dark mode

📜 License
This project is free to use, modify, and learn from.
🧩 1. DOM ELEMENT REFERENCES
js
const addBookmarkBtn = document.getElementById("add-bookmark");
const bookmarkList = document.getElementById("bookmark-list");
const bookmarkNameInput = document.getElementById("bookmark-name");
const bookmarkUrlInput = document.getElementById("bookmark-url");
✔ What this does
You’re grabbing references to the key elements in your HTML:

The Add Bookmark button

The list where bookmarks will appear

The text input for the bookmark name

The text input for the bookmark URL

This is the foundation — everything else depends on these references.

🧩 2. Load Bookmarks on Page Load
js
document.addEventListener("DOMContentLoaded", loadBookmarks);
✔ What this does
When the page finishes loading, your app automatically:

Reads saved bookmarks from localStorage

Renders them into the list

This gives your app persistence — bookmarks don’t disappear when you refresh.
🧩 3. Add Bookmark Button Logic
js
addBookmarkBtn.addEventListener("click", function () {
  const name = bookmarkNameInput.value.trim();
  const url = bookmarkUrlInput.value.trim();

  if (!name || !url) {
    alert("Please enter both name and URL.");
    return;
  } else {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      alert("Please enter a valid URL starting with http:// or https://");
      return;
    }

    addBookmark(name, url);
    saveBookmark(name, url);
    bookmarkNameInput.value = "";
    bookmarkUrlInput.value = "";
  }
});
✔ What this does
This is the main interaction:

User clicks Add Bookmark

You read the input values

You validate:

Both fields must be filled

URL must start with http:// or https://

If valid:

Add bookmark to the UI

Save bookmark to localStorage

Clear the inputs

✔ Why this is good
You’re preventing bad data and giving the user clear feedback.

🧩 4. Creating a Bookmark Element
js
function addBookmark(name, url) {
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.href = url;
  link.textContent = name;
  link.target = "_blank";

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function () {
    bookmarkList.removeChild(li);
    removeBookmarkFromStorage(name, url);
  });

  li.appendChild(link);
  li.appendChild(removeButton);

  bookmarkList.appendChild(li);
}
✔ What this does
This function builds the actual <li> that appears in your list:

Creates a clickable link

Creates a remove button

Appends both to the list

✔ Why this is good
It keeps UI creation separate from storage logic — clean architecture.

🧩 5. Reading Bookmarks from Storage
js
function getBookmarksFromStorage() {
  const bookmarks = localStorage.getItem("bookmarks");
  return bookmarks ? JSON.parse(bookmarks) : [];
}
✔ What this does
Reads the "bookmarks" key from localStorage

Converts it from JSON back into an array

Returns an empty array if nothing exists

This is your data source.

🧩 6. Saving a Bookmark
js
function saveBookmark(name, url) {
  const bookmarks = getBookmarksFromStorage();
  bookmarks.push({ name, url });
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}
✔ What this does
Loads existing bookmarks

Adds the new one

Saves the updated array back to localStorage

This ensures persistence.
🧩 7. Loading Bookmarks on Startup
js
function loadBookmarks() {
  const bookmarks = getBookmarksFromStorage();
  bookmarks.forEach((bookmark) => addBookmark(bookmark.name, bookmark.url));
}
✔ What this does
Reads all saved bookmarks

Renders each one into the UI

This is why your list appears automatically when you refresh.

🧩 8. Removing a Bookmark
js
function removeBookmarkFromStorage(name, url) {
  let bookmarks = getBookmarksFromStorage();
  bookmarks = bookmarks.filter((bookmark) => bookmark.name !== name || bookmark.url !== url);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}
✔ What this does
Loads all bookmarks

Removes the one that matches both name AND url

Saves the updated list

✔ Why the filter condition is correct
You keep all bookmarks except the one that matches both fields.
👉 Ready for the next step?
We can go deeper into:

Improving UX

Adding edit functionality

Adding favicon previews

Adding categories

Adding search