📝 Blog Platform (Front‑End Only)
A modern, responsive blog platform built entirely with HTML, CSS, and JavaScript — no backend required.
This project simulates routing, loads posts from a fake JSON API, supports categories and search, and includes a dedicated post page for each article.
This is Project #23 in my web development journey.
🚀 Features
🏠 Homepage
Featured posts section
Responsive post grid
Category filters
Search bar (title + tags)
Clean, modern layout
📄 Individual Post Pages
Dynamic content loading using post.html?id=POST_ID
Title, date, category, tags
Hero image
Full article content
“Back to Home” link
Optional related posts
📦 Fake API (JSON Files)
posts.json for the homepage
Individual post-x.json files for full content
Easy to expand with new posts
🔍 Search & Filter
Search by title

Search by tags

Filter by category

🧭 Routing Simulation
Uses URL parameters like:

Code
post.html?id=3
JavaScript loads the correct post dynamically.

✨ Optional Enhancements
Markdown support

Pagination

Dark mode

Comments (localStorage)

Author pages

🗂️ Project Structure
Code
23_-Blog_Platform/
│── index.html              # Homepage
│── post.html               # Individual post template
│── style.css               # Global styles
│── script.js               # Homepage logic
│── post.js                 # Post page logic
│── posts/
│     ├── posts.json        # Fake API for homepage
│     ├── post-1.json       # Individual post data
│     ├── post-2.json
│     └── ...
│── assets/
      └── images/           # Thumbnails + hero images
🧠 Concepts You’ll Learn
Front‑End Routing Simulation
How to use URL parameters to load different content on the same HTML page.
Dynamic Rendering
Using JavaScript to:
Fetch JSON
Build HTML elements
Insert them into the DOM
Search & Filtering
Real‑time filtering using:
.includes()
.filter()
.toLowerCase()
Responsive UI Design
CSS Grid + Flexbox to create a clean, scalable layout.
Data‑Driven UI
The entire blog is powered by JSON files — similar to a headless CMS.
📥 How to Add New Posts
Create a new JSON file inside /posts/:
Code
post-7.json
Add your post data:
json
{
  "id": 7,
  "title": "My New Blog Post",
  "category": "Tech",
  "tags": ["javascript", "frontend"],
  "date": "2026-04-01",
  "image": "assets/images/post7.jpg",
  "content": "<p>Your HTML content here...</p>"
}
Add a reference to posts.json:
json
{
  "id": 7,
  "title": "My New Blog Post",
  "excerpt": "Short preview text...",
  "category": "Tech",
  "image": "assets/images/post7-thumb.jpg",
  "featured": false
}
That’s it — the homepage and post page will update automatically.
🧪 Future Enhancements
Dark mode toggle
Markdown support
Comment system (localStorage)
Tag pages
Author profiles
Pagination
Animations
📬 Contact
Created by Jamie  
Part of my ongoing journey to master front‑end development.