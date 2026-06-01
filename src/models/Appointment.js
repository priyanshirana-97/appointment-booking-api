const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  doctorName: String,
  date: String,
  time: String
});

module.exports = mongoose.model("Appointment", appointmentSchema);