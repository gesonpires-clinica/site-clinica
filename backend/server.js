require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

// 📌 Conectar ao MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Conectado ao MongoDB"))
  .catch((err) => console.error("❌ Erro ao conectar ao MongoDB:", err));

// 📌 Definir o modelo `Appointment`
const appointmentSchema = new mongoose.Schema({
  appointmentId: { type: Number, unique: true }, // Número sequencial único
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

// 📌 Configuração do Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// 📌 Função para obter o próximo `appointmentId`
const getNextAppointmentId = async () => {
  const lastAppointment = await Appointment.findOne().sort("-appointmentId");
  return lastAppointment ? lastAppointment.appointmentId + 1 : 1;
};

// 📌 Rota para receber e processar agendamentos
app.post("/send-email", async (req, res) => {
  const { name, email, phone, date, message } = req.body;

  try {
    const appointmentId = await getNextAppointmentId();

    // Criar e salvar agendamento no banco de dados
    const newAppointment = new Appointment({
      appointmentId,
      name,
      email,
      phone,
      date,
      message,
    });

    await newAppointment.save();

    // Enviar e-mail de confirmação
    await transporter.sendMail({
      from: `"Agendamento" <${process.env.EMAIL_USER}>`,
      to: "clinicaneuromarianebach@gmail.com",
      subject: `Agendamento #${appointmentId} - ${name}`,
      text: `Número do Agendamento: ${appointmentId}\nNome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\nData: ${date}\nMensagem: ${message}`,
    });

    res.status(200).json({ message: "Agendamento salvo e e-mail enviado!", appointmentId });
  } catch (error) {
    console.error("Erro:", error);
    res.status(500).json({ message: "Erro ao processar o agendamento", error });
  }
});

// 📌 Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
