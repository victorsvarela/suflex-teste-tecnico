import styled from "styled-components";

export const WrapperNavigation = styled.nav`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
`;

export const ContainerLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > div {
    width: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > svg {
      width: 25px;
      fill: red;
    }

    > p {
      font-size: 12px;
    }
  }
`;
export const Logo = styled.img`
  width: 120px;
`;

export const ContainerFilters = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  gap: 5px;
  align-items: flex-end;
`;
export const ContainerFilterInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;
export const FilterInput = styled.input`
  width: 100%;
  border: 1px solid black;
  padding: 4px 6px;
  border-radius: 5px;

  ::placeholder {
    font-size: 12px;
  }
`;
export const FilterInputIcon = styled.img`
  position: absolute;
  width: 18px;
  right: 8px;
`;

export const ContainerSelectSpecie = styled.div`
  height: 100%;
  gap: 1px;
  width: 80px;
  display: flex;
  flex-direction: column;
`;
export const LabelSelectSpecie = styled.label`
  font-size: 9px;
  margin: 0;
  padding: 0;
  width: 80px;
`;
export const FilterSelectSpecie = styled.select`
  /* border: none; */
  background-color: transparent;
  width: 80px;
  border-radius: 5px;
`;
export const FilterOptionSpecie = styled.option``;
