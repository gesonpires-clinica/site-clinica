export default function Services() {
  const services = [
    {
      title: "Avaliação Neuropsicopedagógica",
      description: `
        Identificamos dificuldades de aprendizagem e transtornos do neurodesenvolvimento por meio de 
        avaliações especializadas, utilizando testes padronizados, observação clínica e entrevistas com 
        familiares e educadores. Este serviço é essencial para:
        - Diagnosticar condições como **TDAH (Transtorno de Déficit de Atenção e Hiperatividade)**, 
          **Dislexia**, **TEA (Transtorno do Espectro Autista)** e **Discalculia**.
        - Mapear funções cognitivas (memória, atenção, raciocínio lógico).
        - Elaborar um plano de intervenção personalizado.
      `,
      importance: "A detecção precoce é crucial para evitar impactos negativos no desempenho acadêmico, autoestima e socialização."
    },
    {
      title: "Acompanhamento Psicopedagógico Individualizado",
      description: `
        Intervenções semanais focadas em:
        - Desenvolver estratégias de aprendizagem adaptadas ao perfil cognitivo da criança/adolescente.
        - Trabalhar habilidades socioemocionais (autocontrole, resiliência, comunicação).
        - Utilizar recursos lúdicos e tecnologias assistivas para engajar o paciente.
        - Aplicar técnicas de **neurociência aplicada à educação** para potencializar resultados.
        Transtornos atendidos: **Dificuldades de Aprendizagem Específicas (DLE)**, **Transtorno de Aprendizagem Não Verbal (TANV)**, 
        **Disgrafia** e **Transtornos de Ansiedade Escolar**.
      `,
      importance: "Promove autonomia, melhora a autoeficácia e previne a evasão escolar."
    },
    {
      title: "Orientação para Pais e Educadores",
      description: `
        Workshops e consultorias para:
        - Capacitar pais e professores a identificar sinais de transtornos de aprendizagem.
        - Adaptar metodologias de ensino inclusivas em sala de aula.
        - Gerenciar comportamentos desafiadores associados ao TDAH e TEA.
        - Orientar sobre **tecnologias assistivas** e **currículo adaptado**.
        Temas atuais abordados: **Impacto do excesso de telas no desenvolvimento cognitivo**, 
        **Estratégias pós-pandemia** e **Bullying escolar**.
      `,
      importance: "Fortalecer a rede de apoio é fundamental para o sucesso terapêutico."
    },
    {
      title: "Workshops de Habilidades Sociais",
      description: `
        Grupos terapêuticos para crianças e adolescentes com:
        - Dificuldades de interação social (TEA, Mutismo Seletivo).
        - Baixa tolerância à frustração (TDAH, TOD - Transtorno Opositivo Desafiador).
        - Treino de habilidades como: interpretação de linguagem não verbal, resolução de conflitos e 
          comunicação assertiva.
        Métodos: Role-playing, jogos cooperativos e narrativas sociais.
      `,
      importance: "Melhora a qualidade das relações interpessoais e reduz isolamento social."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Nossos Serviços
        </h1>
        
        <div className="space-y-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 max-w-md mx-auto md:max-w-none"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-800 text-center md:text-left">
                {service.title}
              </h3>
              
              <div className="space-y-4">
                <div className="prose text-gray-700 text-sm md:text-base">
                  <pre className="whitespace-pre-wrap font-sans">{service.description}</pre>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-800">Por que é importante?</p>
                  <p className="text-gray-700 mt-1">{service.importance}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Seção de Transtornos Atendidos */}
          <div className="bg-blue-800 text-white p-6 md:p-8 rounded-xl max-w-md mx-auto md:max-w-none">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-center md:text-left">
              Transtornos e Dificuldades Atendidos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
              <ul className="space-y-2">
                <li>▸ TDAH</li>
                <li>▸ Dislexia</li>
                <li>▸ Discalculia</li>
              </ul>
              <ul className="space-y-2">
                <li>▸ TEA (Autismo)</li>
                <li>▸ TOD</li>
                <li>▸ TANV</li>
              </ul>
              <ul className="space-y-2">
                <li>▸ Ansiedade Escolar</li>
                <li>▸ Disgrafia</li>
                <li>▸ Dificuldades Pós-Pandemia</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
