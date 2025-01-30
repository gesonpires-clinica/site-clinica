const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  appointmentId: { type: Number, unique: true }, // Número sequencial único
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

// Criando o modelo baseado no esquema
const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;