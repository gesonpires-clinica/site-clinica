import ScheduleForm from "../components/ScheduleForm";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Entre em Contato
        </h1>

        <div id="agendamento" className="grid md:grid-cols-2 gap-8">
          {/* Formulário de Agendamento */}
          <ScheduleForm />

          {/* Formulário de Contato Geral */}
          <form className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-4">Dúvidas em geral</h2>
              <label className="block text-gray-700 mb-2">Nome</label>
              <input
                type="text"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Mensagem</label>
              <textarea
                rows="4"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

        {/* Informações de Contato (Abaixo dos Formulários) */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Informações</h2>
          <p className="mb-4">
            Estamos localizados na Avenida Prefeito Osmar Cunha, 183 - Bloco C - sala
            101 - Centro, Florianópolis - SC, 88015-100
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
