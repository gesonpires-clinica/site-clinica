export default function Services() {
  const services = [
    {
      title: "Avaliação Neuropsicopedagógica",
      description:
        "Identificação de dificuldades de aprendizagem e planejamento de intervenções personalizadas.",
    },
    {
      title: "Acompanhamento Psicopedagógico",
      description:
        "Sessões individuais para desenvolvimento de estratégias de aprendizagem eficazes.",
    },
    {
      title: "Orientação para Pais e Educadores",
      description:
        "Workshops e consultorias para auxiliar no processo educacional.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Nossos Serviços</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-600">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
