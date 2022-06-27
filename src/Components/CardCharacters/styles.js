import styled from "styled-components";

export const WrapperCard = styled.div`
  border: 1px solid black;
  margin: 10px;
  border-radius: 5px;
  position: relative;
`;

export const ContainerCard = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100px;
  justify-content: flex-start;
  height: 170px;

  img {
    width: 100px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  p {
    color: black;
    width: 100%;
    text-align: center;
  }
`;

export const LinkCardCharacter = styled.a`
  text-decoration: none;
  color: black;
`;

export const IconAlive = styled.div`
  position: absolute;
  top: -11px;
  right: -11px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 45px;
  height: 45px;
  background-color: ${(props) =>
    props.status === "Alive"
      ? "green"
      : props.status === "Dead"
      ? "red"
      : "orange"};
  margin: 0;
  z-index: 1;

  p {
    margin: 0;
    /* padding: 5px; */
    font-size: ${(props) => (props.status === "unknown" ? "9px" : "12px")};
    color: white !important;
  }
`;
export const FavoritedCharacterSvg = styled.svg`
  width: 25px;
  position: absolute;
  bottom: 0;
  right: 0;
  fill: ${(props) => (props.favoritedCharacter ? "red" : "transparent")};
  stroke: ${(props) => (props.favoritedCharacter ? "none" : "black")};
`;
