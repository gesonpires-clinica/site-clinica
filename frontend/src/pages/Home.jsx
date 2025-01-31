import { Link } from "react-router-dom";
import { useState } from "react";
import articles from "../data/articlesData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const [openArticle, setOpenArticle] = useState(null);

  // Configuração do Carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 md:py-20 px-4 mt-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4 md:mb-6">
            Psicopedagogia que transforma vidas
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
            Educação inclusiva ∙ Neurodesenvolvimento ∙ Aprendizagem
            significativa
          </p>
          <Link
            to="/contact#agendamento"
            className="bg-blue-600 text-white px-6 py-3 md:px-8 md:py-3 rounded-lg hover:bg-blue-700 transition-all inline-block"
          >
            Agende uma avaliação
          </Link>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="text-center p-4 md:p-6">
            <div className="bg-blue-100 w-14 h-14 md:w-16 md:h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              {" "}
              🧠
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2">
              Abordagem Neurocientífica
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Intervenções baseadas em evidências da neurociência cognitiva
            </p>
          </div>

          <div className="text-center p-4 md:p-6">
            <div className="bg-blue-100 w-14 h-14 md:w-16 md:h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              👨‍👩‍👧
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2">
              Acompanhamento Familiar
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Orientação contínua para pais e cuidadores
            </p>
          </div>

          <div className="text-center p-4 md:p-6">
            <div className="bg-blue-100 w-14 h-14 md:w-16 md:h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              📚
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2">
              Parceria com Escolas
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Mediação entre família e instituições de ensino
            </p>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-12 md:py-16 bg-gray-50 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">
            O que nossos clientes dizem
          </h2>

          <Slider {...settings}>
            {/* Depoimento 1 */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                &quot;O atendimento foi incrível! Meu filho melhorou muito na
                escola após a intervenção&quot;
              </p>
              <h4 className="mt-4 font-bold text-blue-600">- Ana Souza</h4>
            </div>

            {/* Depoimento 2 */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                &quot;Equipe super atenciosa, me ajudaram a entender melhor as
                dificuldades do meu filho.&quot;
              </p>
              <h4 className="mt-4 font-bold text-blue-600">
                - Marcos Oliveira
              </h4>
            </div>

            {/* Depoimento 3 */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                &quot;A psicopedagogia fez toda a diferença na vida da nossa
                família. Recomendo muito!&quot;
              </p>
              <h4 className="mt-4 font-bold text-blue-600">
                - Juliana Martins
              </h4>
            </div>
          </Slider>
        </div>
      </section>

      {/* Sobre Nós */}
      <section className="bg-gray-50 py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src="/equipe.jpg"
              alt="Equipe da clínica"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6">
              Sobre Nossa Abordagem
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-4">
              Combinamos métodos tradicionais da psicopedagogia com as mais
              recentes descobertas da neurociência, oferecendo:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm md:text-base">
              <li>Avaliações multidisciplinares completas</li>
              <li>Programas individuais de reabilitação cognitiva</li>
              <li>Tecnologia assistiva de ponta</li>
              <li>Atendimento humanizado e acolhedor</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Chamada para Ação */}
      <section className="py-12 md:py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            Sinais que Merecem Atenção
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="text-left p-4 bg-white/10 rounded-lg">
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
                Em Crianças
              </h3>
              <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                <li>• Dificuldade de concentração</li>
                <li>• Atraso na leitura/escrita</li>
                <li>• Baixa autoestima escolar</li>
              </ul>
            </div>
            <div className="text-left p-4 bg-white/10 rounded-lg">
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
                Em Adolescentes
              </h3>
              <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                <li>• Procrastinação crônica</li>
                <li>• Dificuldade de organização</li>
                <li>• Ansiedade pré-provas</li>
              </ul>
            </div>
          </div>
          <Link
            to="/services"
            className="bg-white text-blue-900 px-6 py-3 md:px-8 md:py-3 rounded-lg hover:bg-gray-100 transition-all inline-block"
          >
            Saiba como podemos ajudar
          </Link>
        </div>
      </section>

      {/* Blog/Artigos */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-12">
            Artigos Recentes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {articles.map((post, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="text-blue-600 text-xs md:text-sm font-semibold">
                  {post.category}
                </span>
                <h3 className="text-lg md:text-xl font-bold mt-2 mb-2 md:mb-3">
                  {post.title}
                </h3>

                {/* Exibe o conteúdo do artigo se estiver aberto */}
                {openArticle === index && (
                  <p className="text-gray-700 text-sm md:text-base mt-2">
                    {post.content}
                  </p>
                )}

                <button
                  className="text-blue-600 hover:text-blue-800 mt-3"
                  onClick={() =>
                    setOpenArticle(openArticle === index ? null : index)
                  }
                >
                  {openArticle === index ? "Fechar artigo ↑" : "Leia mais →"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Fixo */}
      <div className="fixed bottom-6 right-6">
        <a
          href="https://wa.me/5548991228184"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors w-12 h-12 md:w-16 md:h-16"
        >
          <FaWhatsapp className="w-8 h-8 md:w-10 md:h-10" />
        </a>
      </div>
    </div>
  );
}
