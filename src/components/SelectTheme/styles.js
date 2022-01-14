import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  height: 29px;
  margin-left: -20px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  img {
    width: 40px;
    height: 40px;
    margin-top: -5px;
    margin-left: -20px;
    border-radius: 7px;
  }
`;
