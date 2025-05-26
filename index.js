const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const PORT = 5000; // You can change the port if needed

// Middleware
app.use(cors()); // Allows frontend requests
app.use(bodyParser.json()); // Parses JSON request bodies

// Proxy route
app.post("/api/hashrate", async (req, res) => {
  try {
    const response = await axios.post("http://www.xdagreef.org/api", req.body, {
      headers: { "Content-Type": "application/json" },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Failed to fetch data from xdagreef API" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
