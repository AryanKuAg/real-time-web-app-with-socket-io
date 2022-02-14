const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const socketio = require("socket.io");

const port = process.env.PORT || 3000;
const publicDirectory = path.join(__dirname, "../public");

app.use(express.static(publicDirectory));
const server = http.createServer(app);
const io = socketio(server);
// above is some configuration

io.on("connection", () => {
  console.log("new connection right here");
});

// lisening to port
server.listen(port, () => {
  console.log("connected to port:", port);
});
