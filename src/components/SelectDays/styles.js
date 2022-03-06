import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  border-radius: ${(props) => props.borderRadius};

  li {
    width: 35px;
    height: 20px;
    margin-top: -18px;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    border: 1px solid rgba(0, 0, 0.6);
    font-size: small;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    transition: 300ms;

    &:hover {
      background-color: #00ff5f;
    }
  }
`;
