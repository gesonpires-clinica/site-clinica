import ScheduleForm from "../components/ScheduleForm";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Entre em Contato</h1>

        <div className="grid md:grid-cols-2 gap-8">
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
          <p className="mb-4">Estamos localizados na Av. Paulista, 1000 - São Paulo/SP</p>
          <p className="mb-4">Horário de Atendimento: Seg-Sex, 08h às 18h</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.287482899344!2d-46.65590472468715!3d-23.564429578798382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1718662343248!5m2!1spt-BR!2sbr"
            className="w-full h-64 border-0 rounded-lg"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}