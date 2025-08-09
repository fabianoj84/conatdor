import { useState, useEffect } from "react";

export default function Home() {
  const [contador, setContador] = useState(0);
  const [mensagem, setMensagem] = useState("");
  const [tema, setTema] = useState("claro"); // "claro" | "escuro"

  // Carrega o tema salvo (se houver) ao abrir a página
  useEffect(() => {
    const salvo = localStorage.getItem("tema");
    if (salvo === "claro" || salvo === "escuro") setTema(salvo);
  }, []);

  // Salva o tema sempre que mudar
  useEffect(() => {
    localStorage.setItem("tema", tema);
  }, [tema]);

  const aumentar = () => {
    if (contador >= 10) {
      setMensagem("⚠️ Valor máximo atingido!");
      return;
    }
    setMensagem("");
    setContador(contador + 1);
  };

  const diminuir = () => {
    if (contador <= -10) {
      setMensagem("⚠️ Valor mínimo atingido!");
      return;
    }
    setMensagem("");
    setContador(contador - 1);
  };

  const zerar = () => {
    setContador(0);
    setMensagem("");
  };

  const alternarTema = () => {
    setTema((t) => (t === "claro" ? "escuro" : "claro"));
  };

  return (
    <div className={`app ${tema === "escuro" ? "tema-escuro" : "tema-claro"}`}>
      <header className="topbar">
        <h1>Meu Contador</h1>
        <button className="toggle" onClick={alternarTema}>
          {tema === "escuro" ? "☀️ Claro" : "🌙 Escuro"}
        </button>
      </header>

      <main className="container">
        <p className="valor">Valor atual: {contador}</p>

        {mensagem && <p className="aviso">{mensagem}</p>}

        <div className="botoes">
          <button onClick={aumentar}>+ Aumentar</button>
          <button onClick={diminuir}>- Diminuir</button>
          <button onClick={zerar}>⭮ Zerar</button>
        </div>
      </main>
    </div>
  );
}
