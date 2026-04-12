🔍 Project 3: Live Search Filter
📖 What You’ll Learn
How to capture user input in real time
How to filter arrays using .filter() and .includes()
How to dynamically rebuild a list in the DOM
How to structure code with reusable functions
This is a foundational pattern used in search bars, dropdown filters, product lists, and more.
🧠 Concept Breakdown
1. The Data Source
We start with a simple array:
js
const items = ["Apple", "Banana", "Orange", ...];
This could later be replaced with API data.
2. Listening to User Input
We use the input event so filtering happens as the user types:
js
searchBox.addEventListener("input", () => { ... });
3. Filtering the Array
We convert both the query and items to lowercase for case‑insensitive matching:

js
const filtered = items.filter(item =>
  item.toLowerCase().includes(query)
);
4. Rendering the List
We clear the list and rebuild it:
js
resultsList.innerHTML = "";
Then add each matching item:
js
const li = document.createElement("li");
li.textContent = item;
resultsList.appendChild(li);
This teaches you how to dynamically generate DOM elements.
🧪 Practice Ideas
Try extending the search filter:
Highlight the matching text inside each result
Add categories (fruits, vegetables, etc.)
Add a “No results found” message
Add animations when items appear/disappear
Add a button to sort results alphabetically
Add a checkbox to toggle case sensitivity
If you're ready, we can move on to Project 4: Simple Digital Clock, or we can enhance this search filter further.