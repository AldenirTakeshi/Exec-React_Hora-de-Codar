import React from "react";

const Evento = ({ numero }) => {
  function meuEvento() {
    console.log(`${numero}`);
  }
  return (
    <div>
      <p>Clique para dispara um evento:</p>
      <button onClick={meuEvento}>Ativar!</button>
    </div>
  );
};

export default Evento;
