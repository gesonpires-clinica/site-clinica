import { useState, useEffect } from "react";

export default function LoadingScreen() {
    const conceitos = [
        "Dislexia: dificuldade na leitura e na escrita, mas sem afetar a inteligência.",
        "TDAH: Transtorno do Déficit de Atenção e Hiperatividade, que afeta a concentração.",
        "Discalculia: dificuldade com números e operações matemáticas.",
        "TEA: Transtorno do Espectro Autista, caracterizado por desafios na comunicação e interação social.",
        "Disgrafia: dificuldade na escrita, tornando a caligrafia ilegível ou desorganizada.",
        "Transtorno do Processamento Auditivo Central (TPAC): dificuldade em interpretar sons corretamente, mesmo com audição normal.",
        "Apraxia da fala: dificuldade em coordenar os movimentos necessários para falar corretamente.",
        "Disortografia: dificuldade em aplicar regras ortográficas, levando a erros frequentes na escrita.",
        "Síndrome de Asperger: um dos transtornos do espectro autista, caracterizado por dificuldades na interação social e interesses específicos.",
        "Transtorno do Desenvolvimento da Linguagem (TDL): dificuldade no desenvolvimento normal da linguagem, afetando a comunicação verbal e compreensão.",
        "Transtorno Opositivo-Desafiador (TOD): comportamento desafiador e desobediente persistente em crianças e adolescentes.",
        "Altas habilidades/Superdotação: indivíduos com grande potencial intelectual, criativo ou artístico, muitas vezes acompanhados por dificuldades emocionais ou sociais.",
        "Funções Executivas: habilidades mentais responsáveis pelo planejamento, organização e controle de impulsos.",
        "Dificuldade de Leitura e Escrita: pode estar relacionada a diversos transtornos, mas sempre pode ser trabalhada com acompanhamento adequado.",
        "Memória de Trabalho: capacidade do cérebro de armazenar e manipular informações temporariamente para resolver problemas e tomar decisões.",
        "Síndrome de Burnout Acadêmico: exaustão mental e emocional devido à pressão intensa nos estudos, afetando o desempenho e a motivação.",
        "Transtorno de Ansiedade Social: medo intenso de interações sociais, prejudicando a comunicação e o aprendizado em ambientes educacionais.",
        "Transtorno do Sono e Aprendizagem: distúrbios do sono podem impactar diretamente a atenção, memória e desempenho acadêmico.",
        "Neuroplasticidade: capacidade do cérebro de se adaptar e criar novas conexões neurais ao longo da vida, fundamental para a aprendizagem."
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
