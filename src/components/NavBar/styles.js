import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bgColor};

  div {
    display: flex;
    margin: 0 60px;
  }
`;

export const LinkStyled = styled(Link)`
  margin: 10px;
  height: 25px;
  padding: 8px;
  border-radius: 7px;
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
  transition: 300ms;

  &:hover {
    background-color: #2c2f35;
  }
`;
