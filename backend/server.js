const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoutes');
const userRoutes = require('./routes/userRoutes.js');
const conn = require("./db/connDb");

const app = express();
const PORT = process.env.PORT || 3001;

dotenv.config();

app.use(express.json());// from req.body
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.listen(PORT, (req, res) => {
    conn();
  console.log(`Server Running on port: ${PORT}`);
});
