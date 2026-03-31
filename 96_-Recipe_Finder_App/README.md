🍲 Recipe Finder App
A clean and responsive web application that allows users to search for recipes using TheMealDB API. Users can browse recipe cards, view detailed ingredients, and read full cooking instructions inside a modal window.

This project is part of Phase 4 — Full Applications in your web development learning track.
🚀 Features
🔍 Search recipes by name
🖼️ Recipe cards with images, category, and region
📖 Modal window showing:
Ingredients
Measurements
Instructions
❌ Error message for invalid searches
📱 Fully responsive layout
🎨 Clean, modern UI
🛠️ Technologies Used
HTML5
CSS3
JavaScript (ES6+)
TheMealDB API (no API key required)
📦 How It Works
User enters a recipe name in the search bar
App fetches data from:
Code
https://www.themealdb.com/api/json/v1/1/search.php?s=QUERY
Results appear as recipe cards
Clicking View Recipe opens a modal with:
Recipe image
Ingredients list
Measurements
Full instructions
📁 Project Structure
Code
96_-Recipe_Finder_App/
│── index.html
│── style.css
│── script.js
└── README.md
🧩 Key JavaScript Concepts
fetch() for API calls
async/await
DOM manipulation
Event listeners
Dynamic HTML creation
Modal logic
Error handling
📸 Screenshots (Optional)
You can add screenshots later:
Code
![Recipe Finder Screenshot](./images/screenshot.png)
🌱 Future Enhancements
⭐ Add “Favorite Recipes” saved in localStorage

⭐ Add category filters (Beef, Chicken, Vegan, etc.)

⭐ Add a “Random Recipe” button

⭐ Add loading animations

⭐ Add dark mode

📬 Contact
Created by Jamie  
Feel free to explore more of my projects or reach out.