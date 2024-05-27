const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require('./routes/authRoutes');
const conn = require("./db/connDb");

const app = express();
const PORT = process.env.PORT || 3001;

dotenv.config();

app.use(express.json());// from req.body

app.use("/api/auth",authRoutes);

app.listen(PORT, (req, res) => {
    conn();
  console.log(`Server Running on port: ${PORT}`);
});
