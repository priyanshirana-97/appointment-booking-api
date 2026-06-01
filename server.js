require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/db");

connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Appointment Booking API is running" });
});

app.listen(process.env.PORT, () => {
  console.log("Server running");
});