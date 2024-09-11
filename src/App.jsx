import "./App.css";

/*export default function App() {
  return (
    <main>
      React ⚛️ + Vite ⚡ + Replit
    </main>
  )
}*/

import React, { useState } from "react";

// Função principal do componente
function App() {
  // Estados para o formulário e a autenticação
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [autenticado, setAutenticado] = useState(false);
  const [erro, setErro] = useState("");
  const [autentic, setautentic] = useState(false);
  const [emailautentic, setemailautentic] = useState(false);

  // Dados a serem exibidos na tabela
  const dados = [
    { id: 1, nome: "José" },
    { id: 2, nome: "Maria" },
    { id: 3, nome: "José" },
  ];

  const emailValido = "adm@email.com.br";
  const senhaValida = "123adm";

  // Função para lidar no envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    // Verifica se as credenciais estão corretas
    if (email === emailValido && senha === senhaValida) {
      setAutenticado(true);
      setErro("");
    } else {
      setErro("Credenciais inválidas");
      setAutenticado(false);
    }
  };

  // Função para lidar no envio do formulário
  const handSubmit = (event) => {
    event.preventDefault();
    let div2 = document.querySelector(".Login");
    div2.style.display = "none";
    setautentic(true);
  };

  // Função para lidar no envio do formulário
  const handverifemail = (event) => {
    event.preventDefault();
    if (email === emailValido) {
      setemailautentic(true);
      setErro("");
      setautentic(false);
    } else {
      setErro("Email invalido");
      setemailautentic(false);
    }
  };

  const fazerlogin = (event) => {
    event.preventDefault();
    let div2 = document.querySelector(".Login");
    div2.style.display = "block";

    setemailautentic(false);
  };

  // JSX para renderização
  return (
    <div className="App">
      {!autenticado ? (
        <div className="Login">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label><br/>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Senha:</label><br/>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
            <button type="submit">Entrar</button>
          </form>

          {erro && <p style={{ color: "red" }}>{erro}</p>}
          <form onSubmit={handSubmit}>
            <input type="submit" value="Esqueceu a senha" />
          </form>
        </div>
      ) : (
        <div>
          <h2>Dados</h2>
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
              </tr>
            </thead>
            <tbody>
              {dados.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.nome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!autentic ? (
        <h1></h1>
      ) : (
        <div className="verfEmail">
          <h2>Verificar E-mail</h2>
          <form onSubmit={handverifemail}>
            <div>
              <label>Email:</label><br/>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit">Verificar</button>
          </form>
          {erro && <p style={{ color: "red" }}>{erro}</p>}
        </div>
      )}

      {!emailautentic ? (
        <h1></h1>
      ) : (
        <div className="versenha">
          <h1>Sua senha</h1>

          <h3>{senhaValida}</h3>
          <form onSubmit={fazerlogin}>
            <button type="submit">Fazer Login</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
