📘 README — Mini Project Series (HTML/CSS/JS Practice)
A growing study guide as we build each project together.
🔢 Project 1: Click Counter
📖 What You’ll Learn
How to select elements in the DOM
How to attach event listeners
How to update text on the page
How JavaScript variables store and change data
This is one of the simplest but most important building blocks in interactive web pages.
🧠 Concept Breakdown
1. DOM Selection
You use document.getElementById() to grab elements from the page so you can interact with them.
Example:
js
const button = document.getElementById("btn");
2. Event Listeners
You tell the browser: “When this thing happens, run this code.”
Example:
js
button.addEventListener("click", () => {
  // code runs when button is clicked
});
3. Updating the Page
You can change what the user sees by modifying .textContent.
Example:
js
countDisplay.textContent = count;
4. Variables
A variable stores data — in this case, the number of clicks.
js
let count = 0;
Full Working Example
html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Click Counter</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin-top: 50px;
    }
    #count {
      font-size: 2rem;
      margin: 20px 0;
    }
    button {
      padding: 10px 20px;
      font-size: 1rem;
      cursor: pointer;
    }
  </style>
</head>
<body>
<h1>Click Counter</h1>
  <div id="count">0</div>
  <button id="btn">Click Me</button>
<script>
    let count = 0;
    const countDisplay = document.getElementById("count");
    const button = document.getElementById("btn");
button.addEventListener("click", () => {
      count++;
      countDisplay.textContent = count;
    });
  </script>
</body>
</html>
Practice Ideas
Try modifying the project to deepen your understanding:
Add a Reset button
Make the number turn green after 10 clicks
Add a minus button to decrease the count
Animate the number when it changes
Store the count in localStorage so it stays after refresh
If this looks good, I’ll add Project #2: Color Switcher to the README next.