const Appointment = require("../models/Appointment");

exports.bookAppointment = async (req, res) => {
  const { doctorName, date, time } = req.body;

  const exists = await Appointment.findOne({ doctorName, date, time });

  if (exists) {
    return res.status(400).json({ message: "Slot already booked" });
  }

  const appointment = await Appointment.create({
    userId: req.user.id,
    doctorName,
    date,
    time
  });

  res.json(appointment);
};

exports.getAppointments = async (req, res) => {
  const data = await Appointment.find({ userId: req.user.id });
  res.json(data);
};

exports.deleteAppointment = async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};