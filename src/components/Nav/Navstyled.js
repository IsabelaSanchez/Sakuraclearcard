import styled from "styled-components";

export const Navigation = styled.nav`
  height: 80px;
  max-width: 1280px;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  padding: 0.625rem 0 0 3.125rem;
  .wavy {
    text-decoration: underline wavy #d62ad0;
    text-underline-offset: 9px;
  }

  img {
    width: 12.5rem;
  }
  @media screen and (max-width: 768px) {
    img {
      width: 6.28rem;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  margin-left: auto;
`;
export const Box = styled.div`
  margin-right: 3.125rem;
  @media screen and (max-width: 768px) {
    margin: 50px;
  }

  a {
    margin-left: 30px;
    color: #ffedbc;
    font-size: var(--fontmed);
    font-family: Delius Swash Caps;
    font-weight: bold;
  }
  span {
    color: #ffedbc;
  }

  @media screen and (max-width: 768px) {
    a {
      font-size: var(--fontsmall);
      margin: 0;
      display: inline-block;
      padding: 9px 0;
    }
    .wavy {
      text-decoration: underline wavy #d62ad0;
      text-underline-offset: 5px;
    }
  }
`;
