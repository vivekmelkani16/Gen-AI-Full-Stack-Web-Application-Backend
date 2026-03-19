require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./src/config/database")

app.get("/", (req, res) => {
    res.send("Backend is running on Vercel 🚀");
});

connectToDB()
    .then(() => console.log("DB connected"))
    .catch(err => {
        console.error("DB connection failed:", err);
});


module.exports = app;