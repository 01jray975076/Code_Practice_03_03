🎨 Project 2: Color Switcher
Below is the full working example, followed by the README section so you can study the concepts cleanly.
🎨 Color Switcher — Full Working Example
Color Switcher — Full Working Example
html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Color Switcher</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin-top: 50px;
      transition: background-color 0.4s ease;
    }
    button {
      padding: 12px 25px;
      font-size: 1rem;
      cursor: pointer;
      margin-top: 20px;
    }
    #colorValue {
      font-size: 1.2rem;
      margin-top: 15px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1>Color Switcher</h1>
  <button id="colorBtn">Change Background Color</button>
  <div id="colorValue">Current Color: rgb(255, 255, 255)</div>
  <script>
    const button = document.getElementById("colorBtn");
    const colorValue = document.getElementById("colorValue");

    function randomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    }
    button.addEventListener("click", () => {
      const newColor = randomColor();
      document.body.style.backgroundColor = newColor;
      colorValue.textContent = "Current Color: " + newColor;
    });
  </script>
</body>
</html>
📘 README Update — Project 2: Color Switcher
🎨 Project 2: Color Switcher
📖 What You’ll Learn
How to generate random values in JavaScript
How to build dynamic CSS using JS
How to update the DOM to show the current color
How to use functions to organize logic
This project introduces randomness and visual feedback — two powerful tools in interactive UI design.
🧠 Concept Breakdown
1. Generating Random Colors
We use Math.random() to generate values between 0 and 255:
js
Math.floor(Math.random() * 256);
This gives us a valid RGB color component.
2. Creating a Reusable Function
The randomColor() function returns a full RGB string:
js
return `rgb(${r}, ${g}, ${b})`;
Functions help keep your code clean and reusable.
3. Updating CSS with JavaScript
We change the background color like this:
js
document.body.style.backgroundColor = newColor;
This is how you dynamically style elements.
4. Updating the UI
We show the user the new color:
js
colorValue.textContent = "Current Color: " + newColor;
This reinforces the idea of keeping the UI in sync with the logic.
🧪 Practice Ideas
Try extending the Color Switcher:
Add a button that switches to random gradients
Add a “Copy Color Code” button
Add a mode that cycles through preset colors
Add a smooth fade animation
Add a “Lock Color” toggle so it won’t change
If you're ready, we can move on to Project 3: Live Search Filter — or we can enhance the Color Switcher further. Just let me know which direction you want to take.
📘 README Update — Project 2 (Random Gradient Feature)
🌈 Random Gradient Button
📖 What This Adds
This enhancement teaches you how to:
Generate multiple random colors
Build CSS gradient strings dynamically
Apply gradients to the page background
Update the UI to reflect gradient values
Use JavaScript functions to keep code clean and reusable
This is a great introduction to more advanced visual effects.
📘 README Update — Project 2 (Random Gradient Feature)
🌈 Random Gradient Button
📖 What This Adds
This enhancement teaches you how to:
Generate multiple random colors
Build CSS gradient strings dynamically
Apply gradients to the page background
Update the UI to reflect gradient values
Use JavaScript functions to keep code clean and reusable
This is a great introduction to more advanced visual effects.