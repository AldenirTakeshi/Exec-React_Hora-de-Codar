import React from "react";
import Item from "./Item";
const List = () => {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Ferrari" />
        <Item marca="Fiat" />
        <Item marca="Ford" />
        <Item marca="Chevolet" />
      </ul>
    </>
  );
};

export default List;
