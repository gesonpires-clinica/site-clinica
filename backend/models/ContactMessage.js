const mongoose = require("mongoose");

// 📌 Definição do Schema para mensagens de contato
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true, minlength: 10 },
  createdAt: { type: Date, default: Date.now },
});

// 📌 Criar e exportar o modelo `ContactMessage`
const ContactMessage = mongoose.model("ContactMessage", contactSchema);
module.exports = ContactMessage;
