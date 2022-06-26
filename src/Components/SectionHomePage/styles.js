import styled from "styled-components";

export const WrapperContent = styled.section`
  display: flex;
  flex-direction: column;
  padding: 15px 25px;

  a {
    text-decoration: none;
    color: black;
  }
`;

export const ContainerPaginate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerCardsCharacters = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const LinkCardCharacter = styled.a`
  border: 1px solid black;
  margin: 5px 5px;
  border-radius: 5px;
`;
