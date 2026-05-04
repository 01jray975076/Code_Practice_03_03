export function chatSocket(socket, io) {
    console.log("User connected:", socket.id);
    socket.on("sendMessage", (msg) => {
        io.emit("receiveMessage", {
            id: socket.id,
            message: msg,
            time: new Date().toLocaleTimeString()
        });
    });
    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
}