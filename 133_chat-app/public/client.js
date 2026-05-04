const socket = io();
const messageDiv = document.getElementById("messages");
const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
sendBtn.addEventListener("click", () => {
    const msg = input.value.trim();
    if (msg) {
        socket.emit("sendMessage", msg);
        input.value = "";
    }
});
socket.on("receiveMessage", (data) => {
    const div = document.createElement("div");
    div.classList.add("message");
    div.innerHTML = `<strong>${data.id}</strong>: ${data.message} <br><small>${data.time}</small>`;
    messagesDiv.appendChild(div);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
});