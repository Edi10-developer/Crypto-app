import styled from "styled-components";

export const SelectStyled = styled.select`
  display: flex;
  justify-content: center;
  align-self: center;
  margin-right: 20px;
  height: 39px;
  border-radius: 7px;
  background-color: ${(props) => props.theme.pagBgColor};
  color: ${(props) => props.theme.textColor};
  border: none;
  padding: 4px;

  :focus {
    outline: none;
  }
`;
