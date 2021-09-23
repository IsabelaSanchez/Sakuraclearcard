import React from "react";
import { Container, Contenido } from "./Gridstyled";

const Grid = ({ header, children }) => {
  return (
    <Container>
      <h1>{header}</h1>
      <Contenido>{children}</Contenido>
    </Container>
  );
};

export default Grid;
