import styled from "styled-components";

export const Carts = styled.div`
  transition: all 0.2s;
  position: relative;
  padding: 15px;
  .cont {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
  }
  .cont :hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  .html.sr .imagen {
    visibility: hidden;
  }
  .fav span {
    font-size: 22px;
    cursor: pointer;
  }
  img {
    max-width: 200px;
    border-radius: 3%;
  }
  .html.sr {
    visibility: hidden;
  }
  h1 {
    color: white;
  }
  .fav {
    position: absolute;
    top: 17px;
    left: 20px;
    font-size: 25px;
  }
`;
