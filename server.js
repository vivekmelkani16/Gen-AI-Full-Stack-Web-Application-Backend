require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./src/config/database")

app.get("/", (req, res) => {
  res.send("Backend is running on Vercel 🚀");
});

connectToDB()


module.exports = app;