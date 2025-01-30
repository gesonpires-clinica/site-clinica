import Slider from "react-slick";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">
            Psicopedagogia que Transforma Vidas
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Educação inclusiva ∙ Neurodesenvolvimento ∙ Aprendizagem significativa
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all">
            Agende uma Avaliação
          </button>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              🧠
            </div>
            <h3 className="text-xl font-bold mb-2">Abordagem Neurocientífica</h3>
            <p className="text-gray-600">Intervenções baseadas em evidências da neurociência cognitiva</p>
          </div>

          <div className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              👨👩👧
            </div>
            <h3 className="text-xl font-bold mb-2">Acompanhamento Familiar</h3>
            <p className="text-gray-600">Orientação contínua para pais e cuidadores</p>
          </div>

          <div className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              📚
            </div>
            <h3 className="text-xl font-bold mb-2">Parceria com Escolas</h3>
            <p className="text-gray-600">Mediação entre família e instituições de ensino</p>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 md:flex items-center gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="/images/equipe.jpg" 
              alt="Equipe da clínica" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Sobre Nossa Abordagem</h2>
            <p className="text-gray-600 mb-4">
              Combinamos métodos tradicionais da psicopedagogia com as mais recentes descobertas da 
              neurociência, oferecendo:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Avaliações multidisciplinares completas</li>
              <li>Programas individuais de reabilitação cognitiva</li>
              <li>Tecnologia assistiva de ponta</li>
              <li>Atendimento humanizado e acolhedor</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Chamada para Ação */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Sinais que Merecem Atenção</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-left p-4 bg-white/10 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Em Crianças</h3>
              <ul className="space-y-2">
                <li>• Dificuldade de concentração</li>
                <li>• Atraso na leitura/escrita</li>
                <li>• Baixa autoestima escolar</li>
              </ul>
            </div>
            <div className="text-left p-4 bg-white/10 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Em Adolescentes</h3>
              <ul className="space-y-2">
                <li>• Procrastinação crônica</li>
                <li>• Dificuldade de organização</li>
                <li>• Ansiedade pré-provas</li>
              </ul>
            </div>
          </div>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all">
            Saiba Como Podemos Ajudar
          </button>
        </div>
      </section>

      {/* Blog/Artigos */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Artigos Recentes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {title: "TDAH na Adolescência", category: "Neurodesenvolvimento"},
              {title: "Tecnologia na Aprendizagem", category: "Inovação"},
              {title: "Dislexia: Mitos e Verdades", category: "Educação"}
            ].map((post, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <span className="text-blue-600 text-sm font-semibold">{post.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{post.title}</h3>
                <button className="text-blue-600 hover:text-blue-800">Leia mais →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Fixo */}
      <div className="fixed bottom-8 right-8">
        <a 
          href="https://wa.me/5511999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center hover:bg-green-600 transition-colors"
        >
          <span className="text-2xl">💬</span>
        </a>
      </div>
    </div>
  );
}