require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");
const registerRoutes = require("./routes/registerRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/register", registerRoutes);

app.get("/", (req, res) => {
  db.query("SELECT 1 + 1 AS result", (err, results) => {
    if (err) {
      console.error("Query error:", err.message);
      return res.status(500).send("Database error");
    }
    res.send("Server is running and MySQL is connected!");
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
