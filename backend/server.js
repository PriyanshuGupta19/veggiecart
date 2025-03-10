const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const authRoutes = require("./routes/auth");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb+srv://pg:1234@cluster0.hboohgw.mongodb.net/veggiecart")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));


// API Routes will go here
app.use("/api/auth", authRoutes);

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile("hi");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
