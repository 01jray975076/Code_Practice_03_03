📦 Modal Popup Project
A simple, lightweight modal popup built using HTML, CSS, and JavaScript. This project demonstrates how to create a modal overlay, open and close it with buttons, and add user‑friendly interactions like closing the modal by clicking outside it or pressing the Escape key.
✨ Features
Open modal with a button
Close modal with a button
Close modal by clicking outside the modal box
Close modal using the Escape key
Smooth overlay and modal box styling
No external libraries required
📂 Project Structure
Code
modal-popup/
│
├── index.html
├── style.css
└── README.md
Your current version includes CSS and JavaScript inside the HTML file, but this structure shows how it would look if separated into dedicated files.
🖥️ How It Works
✔ Modal Overlay
A semi‑transparent background covers the page when the modal is open.
css
.modal-overlay {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
}
Adding the .show class makes it visible:
js
modal.classList.add("show");
✔ Modal Box
A centered white box containing the modal content.
✔ Opening the Modal
js
openBtn.addEventListener("click", openModal);
✔ Closing the Modal
Clicking the x button
Clicking outside the modal box
Pressing the Escape key
🚀 Usage
Open index.html in your browser.
Click Open Modal to display the popup.
Close it using any of the supported methods.
🧠 JavaScript Logic Overview
Opening the modal
js
function openModal() {
    modal.classList.add("show");
}
Closing the modal
js
function closeModal() {
    modal.classList.remove("show");
}
Close when clicking outside the modal box
js
modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});
Close with Escape key
js
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});
🛠️ Technologies Used
HTML5
CSS3
JavaScript (ES6)
🔧 Future Enhancements
Add fade‑in / fade‑out animations
Add multiple modal types (alerts, confirmations, forms)
Add accessibility improvements (focus trapping, ARIA labels)
Add a dark mode
📄 License
This project is open‑source under the MIT License.