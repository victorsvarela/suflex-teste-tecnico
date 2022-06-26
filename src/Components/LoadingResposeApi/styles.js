import styled, { css } from "styled-components";

export const WrapperLoading = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.2);
`;
export const LoaderSendData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  > div {
    animation: is-rotating 1s infinite;
    border: 10px solid #e5e5e5;
    border-radius: 50%;
    border-top-color: blue;
    height: 70px;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > p {
    align-items: center;
    justify-content: center;
    display: flex;
    color: black;
  }

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`;
