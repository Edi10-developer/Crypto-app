import styled from "styled-components";

export const PageContainer = styled.div`
  border: 1px solid red;
  text-align: left;
  padding: 50px;
  margin-top: -70px;
  background-color: ${(props) => props.theme.pagBgColor};
  color: ${(props) => props.theme.textColor};
  width: calc(100% - 100px);
  z-index: 3;
`;

export const MainContainer = styled.div`
  width: 1100px;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;

  div {
    width: 300px;
    height: 400px;

    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div {
      :nth-child(2) {
        width: 100%;
        height: 100px;
        border: 1px solid red;
      }
    }
  }
`;

export const Div1 = styled.div`
  height: 300px;
`;
