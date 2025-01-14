const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static("public")); // Serve static files from 'public'
app.use("/images", express.static("images")); // Serve static files from 'images'
app.use("/videos", express.static("videos")); // Serve static files from 'videos'

// Set view engine
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
