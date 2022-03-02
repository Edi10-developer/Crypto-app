import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 370px;
  margin-right: 20px;

  input {
    height: 38px;
    width: 100%;
    border-radius: 7px;
    margin-left: 30px;
    background-color: ${(props) => props.theme.pagBgColor};
    color: ${(props) => props.theme.textColor};
    padding-left: 7px;
    border: none;

    :focus {
      outline: none;
    }
    ::placeholder {
      color: ${(props) => props.theme.textColor};
      opacity: 0.9;
    }
  }
`;
