import { useState } from "react";

export default function ScheduleForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 📌 Validação do telefone (XX) 9XXXX-XXXX ou XX 9XXXX-XXXX
  const validatePhone = (phone) => {
    const phoneRegex = /^(\(\d{2}\)\s?|\d{2}\s?)9\d{4}-?\d{4}$/;
    return phoneRegex.test(phone);
  };

  const API_URL = import.meta.env.VITE_API_URL; // Obtém a URL do backend do .env

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(""); // Resetar erros antes de validar

    // 📌 Validação do telefone antes do envio
    if (!validatePhone(formData.phone)) {
      setError("Formato inválido! Use (XX) 9XXXX-XXXX ou XX 9XXXX-XXXX.");
      return;
    }

    setLoading(true); // Indica que o envio está em andamento

    try {
      // 📌 Ajustar formato da data para YYYY-MM-DD (para compatibilidade com o MongoDB)
      const formattedDate = new Date(formData.date).toISOString().split("T")[0];

      const response = await fetch(`${API_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, date: formattedDate }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Agendamento enviado com sucesso!");
        setFormData({ name: "", email: "", phone: "", date: "", message: "" });
      } else {
        alert("Erro ao enviar agendamento: " + result.message);
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro na conexão com o servidor.");
    } finally {
      setLoading(false); // Libera o botão após o envio
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-4 md:p-6 rounded-lg shadow-md w-full"
    >
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Agendar Consulta</h2>

      {error && (
        <p className="text-red-500 text-sm mb-4 text-center px-4" aria-live="polite">
          {error}
        </p>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Nome completo</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">E-mail</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Telefone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Data preferencial</label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Mensagem (opcional)</label>
          <textarea
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
            rows="3"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded hover:bg-blue-700 transition-colors disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar Agendamento"}
        </button>
      </div>
    </form>
  );
}
