import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const conceitos = [
    "🔵 Dislexia: dificuldade na leitura e na escrita, mas sem afetar a inteligência.",
    "🟡 TDAH: dificuldade de concentração, impulsividade e inquietação excessiva.",
    "🔢 Discalculia: dificuldade em entender números e operações matemáticas.",
    "🧩 TEA: desafios na comunicação e interação social, podendo envolver padrões repetitivos.",
    "✍️ Disgrafia: dificuldade motora na escrita, resultando em caligrafia desorganizada.",
    "🎧 TPAC: dificuldade em processar sons e interpretar a fala, mesmo com audição normal.",
    "🗣️ Apraxia da Fala: dificuldade em coordenar os movimentos necessários para falar.",
    "📖 Disortografia: dificuldade em aplicar regras ortográficas corretamente.",
    "🤝 Síndrome de Asperger: dificuldades sociais e interesses específicos, sem comprometimento intelectual.",
    "🗨️ TDL: dificuldades na aquisição da linguagem, afetando a comunicação e compreensão.",
    "🚸 TOD: comportamento desafiador e opositor persistente, além de dificuldades em seguir regras.",
    "💡 Superdotação: habilidades excepcionais, mas pode haver dificuldades emocionais ou sociais.",
    "🧠 Funções Executivas: planejamento, organização e controle de impulsos podem estar prejudicados.",
    "📚 Dificuldade de Leitura: pode ser trabalhada com estímulo adequado e estratégias personalizadas.",
    "🔄 Memória de Trabalho: fundamental para resolver problemas e tomar decisões rapidamente.",
    "⚠️ Burnout Acadêmico: exaustão emocional devido à sobrecarga nos estudos, impactando a motivação.",
    "😟 Ansiedade Social: medo intenso de interações, impactando a aprendizagem e autoestima.",
    "🌙 Sono e Aprendizagem: distúrbios do sono podem afetar memória, atenção e desempenho escolar.",
    "🔬 Neuroplasticidade: o cérebro pode se adaptar e aprender ao longo da vida, criando novas conexões.",
    "🎯 Dica: Dificuldade extrema com mudanças pode ser um sinal de TEA.",
    "🎯 Dica: Crianças que se distraem facilmente podem se beneficiar de rotinas estruturadas.",
    "🎯 Dica: Erros frequentes na escrita podem ser um sinal de dislexia ou disortografia.",
    "🎯 Dica: Para dificuldades com matemática, jogos lúdicos podem ajudar no aprendizado.",
    "🎯 Dica: Estimular a leitura com histórias envolventes pode ajudar crianças com dislexia.",
    "🎯 Dica: Se uma criança evita contato visual, observe outros sinais de dificuldades sociais.",
    "🎯 Dica: Dificuldade em lembrar instruções pode estar relacionada à memória de trabalho.",
    "🎯 Dica: Atividades físicas ajudam no controle da hiperatividade e impulsividade do TDAH.",
    "🎯 Dica: Estratégias visuais, como mapas mentais, auxiliam no aprendizado de crianças com dificuldades.",
    "🎯 Dica: Falar com um especialista pode trazer insights valiosos para dificuldades persistentes na aprendizagem."
];

  const [conceito, setConceito] = useState("");

  useEffect(() => {
    const conceitoAleatorio =
      conceitos[Math.floor(Math.random() * conceitos.length)];
    setConceito(conceitoAleatorio);
  }, [conceitos]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-gray-900 p-6 text-center">
      <div className="animate-spin w-12 h-12 border-t-4 border-blue-500 rounded-full mb-8"></div>
      <div className="mb-8"><p className="text-sm text-gray-700 leading-relaxed"><strong>Enquanto a página carrega, vamos refletir:</strong></p></div>
      <p className="text-xl sm:text-2xl text-center px-6 leading-relaxed">{conceito}</p>
    </div>
  );
}
