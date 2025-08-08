import { useState } from "react";

export default function Home() {
  const [contador, setContador] = useState(0);
  const [mensagem, setMensagem] = useState("");

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

  return (
    <div className="container">
      <h1>Meu Contador</h1>
      <p>Valor atual: {contador}</p>

      {mensagem && <p style={{ color: "red" }}>{mensagem}</p>}

      <div className="botoes">
        <button onClick={aumentar}>+ Aumentar</button>
        <button onClick={diminuir}>- Diminuir</button>
        <button onClick={zerar}>⭮ Zerar</button>
      </div>
    </div>
  );
}
