import React from "react";

const Form = () => {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log("Cadastrou usuario");
  }

  return (
    <div>
      <h1>Meu cadastro:</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <input type="text" placeholder="Digite o seu nome"></input>
        </div>
        <div>
          <input type="submit" value="Cadastrar"></input>
        </div>
      </form>
    </div>
  );
};

export default Form;
