const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    patientName: String,
    doctorName: String,

    appointmentDate: String,

    status: {
      type: String,
      default: "Pending"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Appointment",
  appointmentSchema
);