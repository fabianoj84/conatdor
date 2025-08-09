import { useState } from "react";

export default function TodoPage() {
  const [texto, setTexto] = useState(""); // estado do input

  function handleChange(e) {
    setTexto(e.target.value); // atualiza o estado conforme digita
  }

  function handleSubmit(e) {
    e.preventDefault(); // evita recarregar a página
    alert(`Você clicou em adicionar: ${texto || "(vazio)"}`);
    // por enquanto, só mostramos um alerta. Nada de lista ainda.
    setTexto(""); // limpa o campo após "adicionar"
  }

  return (
    <div className="app tema-claro">
      <header className="topbar">
        <h1>Minhas Tarefas</h1>
        <a className="toggle" href="/">
          Voltar ao contador
        </a>
      </header>

      <main className="container">
        <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
          <input
            type="text"
            placeholder="O que precisa fazer?"
            value={texto}
            onChange={handleChange}
            className="input"
          />
          <button type="submit">+ Adicionar</button>
        </form>

        <p>
          Você digitou: <strong>{texto || "nada ainda..."}</strong>
        </p>
      </main>
    </div>
  );
}
