import styled from "styled-components";

interface ConteinerProps {
  showCart: boolean;
}

export const Conteiner = styled.aside<ConteinerProps>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.showCart ? "0" : "-350px")};

  width: 350px;
  background-color: white;
  height: 100vh;
  padding: 2rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);
  transition: right 0.5s;
`;

export const Title = styled.h1``;

export const CardProductsList = styled.ul`
  padding: 2rem 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CardProductsItem = styled.li``;

export const CardTotal = styled.strong``;
