import styled from "styled-components";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

export const Container = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const InputContainer = styled.div`
  height: 42px;
  //border: 1px solid red;
  border-radius: 9px;
  overflow: hidden;

  input {
    height: 37px;
    :focus {
      outline: none;
    }
  }
`;

export const ButtonStyled = styled.button`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.positiveData};
  height: 100%;
  width: 60px;
  border: none;

  :focus {
    outline: none;
  }
`;

export const SwitchIcon = styled(HiOutlineSwitchHorizontal)`
  color: ${(props) => props.theme.textColor};
`;
