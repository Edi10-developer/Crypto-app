import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 500px;
  margin: 50px auto;
  align-items: center;
  list-style-type: none;
  border-radius: ${(props) => props.borderRadius};

  li {
    display: flex;
    justify-content: pace-around;

    color: ${(props) => props.theme.textColor};

    font-size: small;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    transition: 300ms;
  }
`;

export const Circle = styled.div`
  border: 1px solid ${(props) => props.theme.positiveData};
  width: 30px;
  height: 30px;
  margin-right: 7px;
  border-radius: 50%;
  background-color: ${(props) => props.bgClr};

  &:hover {
    background-color: #00ff5f;
  }
`;
