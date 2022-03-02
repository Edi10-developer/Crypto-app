import styled from "styled-components";

export const PageContainer = styled.div`
  text-align: left;
  padding: 50px;
  background-color: ${(props) => props.theme.pagBgColor};
  color: white;
  width: calc(100% - 100px);
`;

export const MainContainer = styled.div`
  width: 1100px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
`;

export const ChartsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  width: 43%;
  height: 370px;
  padding-left: 20px;
  padding-right: 30px;
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 10px;

  h6 {
    font-size: 14px;
  }
  h2 {
    margin-top: -30px;
    margin-bottom: -30px;
  }
`;
