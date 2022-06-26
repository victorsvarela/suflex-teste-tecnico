import styled from "styled-components";

export const WrapperContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 25px;
  height: 100%;
  min-height: 100vh;
  gap: 60px;
`;

export const WrapperNavigation = styled.nav`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
`;

export const ContainerCardCharacter = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: #3c3c3c;
  display: flex;
  gap: 10px;

  p {
    color: white;
    margin-bottom: 5px;
    text-align: start;
  }
`;
export const CardCharacter = styled.div`
  height: 170px;
`;
export const CardCharacterImage = styled.img`
  height: 100%;
`;
export const InfosCharacter = styled.div`
  width: 100%;
`;
