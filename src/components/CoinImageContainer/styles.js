import styled from "styled-components";

export const ImageContainer = styled.div`
  margin: 30px auto;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-self: center;
  align-items: center;
  background-color: ${(props) => props.theme.pagBgColor};
`;
export const CoinImage = styled.img`
  width: 50px;
`;
