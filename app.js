const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(express.json());
app.use(cors());

// Global route
app.get("/", (req, res) => {
  res.send("welcome to e-commerce project");
});

// routes
const userRoute = require("./routes/user.route");
app.use("/app/v1/users", userRoute);

module.exports = app;
