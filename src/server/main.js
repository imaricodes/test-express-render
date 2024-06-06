//server setup, socket io setup, and server and client communication setup instruction here: https://chatgpt.com/c/1d7dc091-ae1d-4606-9934-8db944f894a1


import express from "express";
import ViteExpress from "vite-express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });

  // Add your custom event handlers here
  socket.on("message", (msg) => {
    console.log("Message received: " + msg);
    io.emit("message", msg); // Broadcast the message to all clients
  });
});

httpServer.listen(3001, () => {
  console.log("Socket.IO server is listening on port 3001...");
});
