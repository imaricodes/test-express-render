//server setup, socket io setup, and server and client communication setup instruction here: https://chatgpt.com/c/1d7dc091-ae1d-4606-9934-8db944f894a1

import express from "express";
import ViteExpress from "vite-express";
import cors from "cors";

const app = express();

// Apply CORS middleware to Express app
app.use(cors({
  origin: "http://localhost:3000", // Allow requests from port 3000
  methods: ["GET", "POST"],
  // allowedHeaders: ["Content-Type"],
  credentials: true
}));

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);

