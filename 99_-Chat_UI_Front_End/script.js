// DOM elements
const messages = document.getElementById("messages");
const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
// Event listeners
sendBtn.addEventListener("click", sendMessage);
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
});
// ------------------------------
// SEND MESSAGE
// ------------------------------
function sendMessage() {
    const text = input.value.trim();
    if (text === "") return;
    addMessage(text, "outgoing");
    input.value = "";
    autoScroll();
    // Optional: Fake reply
    fakeReply()
}
// ------------------------------
// ADD MESSAGE TO CHAT
// ------------------------------
function addMessage(text, type = "incoming") {
    const msg = document.createElement("div");
    msg.classList.add("message", type);
    msg.innerHTML = `
    <p>${text}</p>
    <span class="timestamp">${getTime()}</span>
    ;`
    messages.appendChild(msg);
}
// ------------------------------
// AUTO SCROLL TO BOTTOM
// ------------------------------
function autoScroll() {
    messages.scrollTop = messages.scrollHeight; 
}
// ------------------------------
// GET CURRENT TIME
// ------------------------------
function getTime() {
    const now = new Date();
    return now.toLocaleDateString([], { hour: "2-digit", minute: "2-digit" });
}
// ------------------------------
// OPTIONAL: FAKE AI REPLY
// ------------------------------
function fakeReply() {
    setTimeout(() => {
        addMessage("I'm just a demo reply 😄", "incoming");
        autoScroll();
    }, 800);
}