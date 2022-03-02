import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  border-radius: 6px;

  li {
    width: 45px;
    height: 40px;
    margin-top: -18px;
    background-color: ${(props) => props.color};
    color: black;
    border: 1px solid rgba(0, 0, 0.6);
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
  }
`;
