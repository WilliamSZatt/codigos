import styled from "styled-components";

export const Container = styled.main`
  max-width: 1240px;
  height: 100%;

  margin: 4rem auto;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 2rem;

  //? flex-wrap = estilo para quebrar(wrap), ou não (nowrap), a linha do flex
  flex-wrap: wrap;

  //? & é o seletor anterior, apenas com o nome "abreviado/reduzido"

  //* & > * = está pegando o conteúdo de dentro do container
  & > * {
    //? flex: (flex-grow = proporção do elemento é 1) (min-weight = largura minima de 300px cada elemento)
    //! Para deixar responsivo
    flex: 1 300px;
  }
`;
