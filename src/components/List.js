import React from "react";
import Item from "./Item";
const List = () => {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Ferrari" ano_lancamento={1985} />
        <Item marca="Fiat" ano_lancamento={1964} />
        <Item marca="Renault" />
        <Item marca="checrolet" ano_lancamento={1999} />
        <Item />
      </ul>
    </>
  );
};

export default List;
