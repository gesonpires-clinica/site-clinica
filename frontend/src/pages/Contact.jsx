import { useState } from "react";
import ScheduleForm from "../components/ScheduleForm";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Limpa erros anteriores

    // 📌 Validação do e-mail no frontend
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Por favor, insira um e-mail válido.");
      return;
    }

    if (formData.message.length < 10) {
      setError("A mensagem deve ter pelo menos 10 caracteres.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Erro ao enviar mensagem: " + result.message);
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro na conexão com o servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 pt-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Entre em Contato
        </h1>

        <div id="agendamento" className="grid md:grid-cols-2 gap-8">
          {/* Formulário de Agendamento */}
          <ScheduleForm />

          {/* Formulário de Contato Geral */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold mb-4">Dúvidas em geral</h2>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Nome</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Mensagem</label>
              <textarea
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </form>
        </div>

        {/* Informações de Contato (Abaixo dos Formulários) */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Informações</h2>
          <p className="mb-4">
            Estamos localizados na Avenida Prefeito Osmar Cunha, 183 - Bloco C -
            sala 101 - Centro, Florianópolis - SC, 88015-100
          </p>
          <p className="mb-4">Horário de Atendimento: Seg-Sex, 08h às 18h</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3535.9837011720397!2d-48.55400147378769!3d-27.594034922016732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAv.%20Pref.%20Osmar%20Cunha%2C%20183%20-%20Bloco%20C%20-%20sala%20101%20-%20Centro%2C%20Florian%C3%B3polis%20-%20SC%2C%2088015-100!5e0!3m2!1spt-BR!2sbr!4v1738263178720!5m2!1spt-BR!2sbr"
            className="w-full h-64 border-0 rounded-lg"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
