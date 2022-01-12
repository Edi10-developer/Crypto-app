import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  background-color: black;
  color: white;

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
  color: white;
  font-weight: bold;
  transition: 300ms;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
