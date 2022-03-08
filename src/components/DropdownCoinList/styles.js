import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  padding: 10px;
  height: 350px;
  position: absolute;
  overflow-y: scroll;
  border: 1px solid ${(props) => props.theme.pagBgColor};
  border-top: none;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  top: 60px;
  right: 267px;
  z-index: 999;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding: 10px;
  text-decoration: none;
  color: ${(props) => props.theme.textColor};

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
