import styled from "styled-components";

export const Container = styled.ul`
  width: 800px;
  height: 55px;
  margin: 20px auto;
  margin-top: -10px;
  font-size: 14px;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  justify-items: center;
  align-items: center;
  padding: 0 20px 0 20px;
  z-index: 99;

  li {
    width: 190px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    span {
      margin-right: 5px;
    }
  }
`;
export const CoinImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 6px;
  margin-left: 30px;
`;
