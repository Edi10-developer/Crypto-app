import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 355px;
  position: absolute;
  background-color: black;
  color: white;
  top: 60px;
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
