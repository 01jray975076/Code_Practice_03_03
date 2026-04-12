🧮 Counter App — Using Event Listeners & Local Storage
A simple, beginner‑friendly JavaScript project demonstrating how to use DOM event listeners, localStorage, and basic UI updates to build an interactive counter. The user can increase, decrease, reset, save, and load the counter value.
🚀 Features
Increment / Decrement the counter
Reset the counter back to zero
Save the current value to localStorage
Load the saved value automatically on page load
Clean, minimal UI
Pure HTML, CSS, and JavaScript — no frameworks
📂 Project Structure
Code
project-folder/
│
├── index.html
├── style.css
└── script.js
In your current version, the JavaScript is embedded directly in the HTML, but you can easily move it into script.js if you prefer a cleaner structure.
🧠 How It Works
1. Event Listeners
Each button (+, -, Reset, Save, Load) is wired to a function using addEventListener().
2. Counter Logic
A simple variable count stores the current value.
UI updates happen through the updateCount() function.
3. Saving & Loading
The app uses:
js
localStorage.setItem("count", count);
localStorage.getItem("count");
This allows the counter to persist even after refreshing or closing the page.
4. Auto‑Load on Page Open
When the page loads, loadCount() runs immediately to restore the saved value.
🖥️ Usage
Open index.html in any browser.
Click the + or – buttons to change the counter.
Click Save to store the value.
Click Load to retrieve the saved value.
Refresh the page — the counter will automatically load your last saved number.
📸 Screenshot (Optional)
If you want, I can generate a mock screenshot or add an image section.
🛠️ Technologies Used
HTML5
CSS3
JavaScript (ES6)
localStorage API
📘 Future Improvements (Ideas)
Add animations
Add a dark/light theme toggle
Add keyboard shortcuts
Add a history log of saved values
Add a “max value” or “min value” setting