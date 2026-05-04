import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { chatSocket } from "./sockets/chatSocket.js";
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
app.use(express.static("public"));
io.on("connection", (socket) => {
    chatSocket(socket, io);
});
const PORT = 3000;
httpServer.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});