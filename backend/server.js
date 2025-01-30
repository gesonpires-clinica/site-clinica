require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const mongoose = require("mongoose");

// 📌 Importar os models
const Appointment = require("./models/Appointment");
const ContactMessage = require("./models/ContactMessage");

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

// 📌 Configuração do Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// 📌 Rota para receber mensagens de contato
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // 📌 Criar e salvar a mensagem no banco de dados
    const newMessage = new ContactMessage({ name, email, message });
    await newMessage.save();

    // 📌 Enviar e-mail para a clínica com a mensagem
    await transporter.sendMail({
      from: `"Contato" <${process.env.EMAIL_USER}>`,
      to: "clinicaneuromarianebach@gmail.com",
      subject: `Nova Mensagem de Contato - ${name}`,
      text: `Nome: ${name}\nE-mail: ${email}\nMensagem:\n${message}`,
    });

    res.status(200).json({ message: "Mensagem recebida e e-mail enviado!" });
  } catch (error) {
    console.error("Erro:", error);
    res.status(500).json({ message: "Erro ao processar a mensagem", error });
  }
});

// 📌 Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
