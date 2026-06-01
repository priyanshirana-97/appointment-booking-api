const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  bookAppointment,
  getAppointments,
  deleteAppointment
} = require("../controllers/appointmentController");

router.post("/book", auth, bookAppointment);
router.get("/", auth, getAppointments);
router.delete("/:id", auth, deleteAppointment);

module.exports = router;