const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/dbConnection");
const passwordRoutes = require("./routes/passwordRoutes");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const validateToken = require("./middleware/validateToken");

connectDB();
const app = express();

const PORT = 8000;

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/passwords", validateToken, passwordRoutes);
app.use("/api/notes", validateToken, noteRoutes);

app.listen(PORT, () => {
  console.log("Server running on Port:", PORT);
});
