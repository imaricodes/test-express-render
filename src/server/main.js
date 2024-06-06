//server setup, socket io setup, and server and client communication setup instruction here: https://chatgpt.com/c/1d7dc091-ae1d-4606-9934-8db944f894a1

import express from "express";
import ViteExpress from "vite-express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
const httpServer = createServer(app);
const PORT = process.env.PORT || 3000;
const io = new Server(httpServer, {
  // cors: {
  //   origins: "*:*",
  //   methods: ["GET", "POST"]
  // },
});

// Apply CORS middleware to Express app
// app.use(cors({
//   origin: "http://localhost:3000", // Allow requests from port 3000
//   methods: ["GET", "POST"],
//   // allowedHeaders: ["Content-Type"],
//   credentials: true
// }));

// const io = new Server(httpServer);


app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});


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


// Use ViteExpress without starting another listener
httpServer.listen(PORT, () => {
  console.log("Server (Express and Socket.IO) is listening on port 3000...");
});

ViteExpress.bind(app, httpServer);