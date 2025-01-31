import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const conceitos = [
    "Dislexia: Dificuldade na leitura e na escrita, mas sem afetar a inteligência.",
    "TDAH: Transtorno do Déficit de Atenção e Hiperatividade, que afeta a concentração.",
    "Discalculia: Dificuldade com números e operações matemáticas.",
    "TEA: Transtorno do Espectro Autista, caracterizado por desafios na comunicação e interação social.",
    "Disgrafia: Dificuldade na escrita, tornando a caligrafia ilegível ou desorganizada."
  ];

  const [conceito, setConceito] = useState("");

  useEffect(() => {
    const conceitoAleatorio =
      conceitos[Math.floor(Math.random() * conceitos.length)];
    setConceito(conceitoAleatorio);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white text-blue-900 text-lg font-semibold">
      <div className="animate-spin w-12 h-12 border-t-4 border-blue-500 rounded-full mb-4"></div>
      <p>Enquanto a página carrega, vamos refletir:</p>
      <p className="italic text-gray-600 mt-2">{conceito}</p>
    </div>
  );
}
