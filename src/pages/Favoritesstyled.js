import styled from "styled-components";
import ima from "../img/sakura-card.jpeg";
import noimage from "../img/fav.gif";

export const Fav = styled.div`
  height: 100%;
  transition: all 0.3s;
  padding: 1.25rem;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
