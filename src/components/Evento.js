import React from "react";
import Button from "./evento/Button";

const Evento = () => {
  function meuEvento() {
    console.log(`Primeito Evento`);
  }
  function segundoEvento() {
    console.log(`Segundo Evento`);
  }
  return (
    <div>
      <p>Clique para dispara um evento:</p>
      <Button event={meuEvento} text="Primeiro Evento" />
      <Button event={segundoEvento} text="Segundo Evento" />
    </div>
  );
};

export default Evento;
