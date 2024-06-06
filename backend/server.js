"use strict";

const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const messageRoutes = require("./routes/messageRoutes");
const userRoutes = require("./routes/userRoutes.js");
const conn = require("./db/connDb");
const { app, server } = require("./socket/socket.js");

dotenv.config();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// Serve static files from the frontend dist directory
app.use(express.static(path.join(__dirname, "..", "frontend", "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  conn()
    .then(() => {
      console.log(`Server Running on port: ${PORT}`);
    })
    .catch((err) => {
      console.error("Database connection failed:", err);
    });
});
