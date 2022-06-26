import styled from "styled-components";

export const ContainerCard = styled.div`
  position: relative;
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

export const IconAlive = styled.div`
  position: absolute;
  top: 3px;
  right: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: ${(props) => (props.status === "unknown" ? "45px" : "25px")};
  height: ${(props) => (props.status === "unknown" ? "45px" : "25px")};
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
    font-size: 9px;
    color: white !important;
  }
`;
