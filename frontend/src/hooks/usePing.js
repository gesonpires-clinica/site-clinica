import { useEffect } from "react";

const usePing = (backendUrl, interval = 300000) => { // Pinga a cada 5 minutos (300000 ms)
  useEffect(() => {
    const pingServer = () => {
      fetch(backendUrl)
        .then(() => console.log("✅ Backend pingado com sucesso!"))
        .catch(() => console.error("❌ Erro ao pingar o backend!"));
    };

    // Ping inicial
    pingServer();

    // Configurar o intervalo
    const intervalId = setInterval(pingServer, interval);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, [backendUrl, interval]);
};

export default usePing;
