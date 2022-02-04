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
    background-color: #2c2f35;
    color: white;
    padding-left: 7px;
    border: none;

    :focus {
      outline: none;
    }
    ::placeholder {
      color: white;
      opacity: 0.9;
    }
  }
`;
