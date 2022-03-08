import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  text-align: left;
  padding: 50px;
  margin-top: -70px;
  background-color: ${(props) => props.theme.pagBgColor};
  color: ${(props) => props.theme.textColor};
  width: calc(100% - 100px);
  z-index: 3;
`;

export const MainContainer = styled.div`
  width: 100%;
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
  justify-content: space-between;
  align-items: baseline;
  width: 42%;
  height: 350px;
  padding: 20px;
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 10px;

  h6 {
    font-size: 14px;
    color: ${(props) => props.theme.textColor};
  }
  h2 {
    margin-top: -30px;
    margin-bottom: -30px;
    color: ${(props) => props.theme.textColor};
  }
`;

export const CoinDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  justify-content: center;
  align-items: baseline;
  margin-bottom: -50px;
`;

export const GradientChart = {
  backgroundColor: {
    axis: "y",
    colors: {
      10000: "rgba(0, 255, 95, .01)",
      20000: "rgba(0, 255, 95, .0025)",
      30000: "rgba(0, 255, 95, .05)",
      40000: "rgba(0, 255, 95, .1)",
      50000: "rgba(0, 255, 95, .2)",
      60000: "rgba(0, 255, 95, .4)",
      70000: "rgba(0, 255, 95, .9)",
    },
  },
};
