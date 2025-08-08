import { useState } from "react";

export default function Home() {
  const [contador, setContador] = useState(0);

  const aumentar = () => {
    console.log("Cliquei no botão!");
    setContador(contador + 1);
  };

  const diminuir = () => {
    setContador(contador - 1);
  };

  const zerar = () => setContador(0);

  return (
    <div className="container">
      <h1>Meu Contador</h1>
      <p>Valor atual: {contador}</p>
      <div className="botoes">
        <button onClick={aumentar}>+ Aumentar</button>
        <button onClick={diminuir}>- Diminuir</button>
        <button onClick={zerar}>⭮ Zerar</button>
      </div>
    </div>
  );
}
