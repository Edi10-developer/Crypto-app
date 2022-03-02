import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 355px;
  position: absolute;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  top: 60px;
  z-index: 999;
`;

export const StyledCoinItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding: 10px;

  div {
    display: flex;
    justify-content: center;
    justify-self: center;
    align-self: center;
    text-align: center;
    padding: 0;
    margin: 0;
  }
`;

export const StyledCoinImg = styled.img`
  display: flex;
  width: 15px;
  justify-content: center;
  align-self: center;
`;
