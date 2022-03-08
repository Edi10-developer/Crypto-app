import styled from "styled-components";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

export const PageContainer = styled.div`
  text-align: left;
  padding: 50px;
  margin-top: -70px;
  background-color: ${(props) => props.theme.pagBgColor};
  color: ${(props) => props.theme.textColor};
`;

export const MainContainer = styled.div`
  width: 90%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
`;

export const DownArrow = styled(TiArrowSortedDown)`
  color: #ff0008;
  margin-bottom: -2px;
`;

export const UpArrow = styled(TiArrowSortedUp)`
  color: rgb(0, 255, 95);
`;

export const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: baseline;
  overflow: hidden;
  margin-bottom: -80px;
  width: calc(100% + 100px);
  margin-right: -50px;
  margin-left: -50px;
`;

export const GradientChart = {
  backgroundColor: {
    axis: "y",
    colors: {
      0.1: "rgba(64, 64, 64, .003)",
      0.2: "rgba(64, 64, 64, .06)",
      0.5: "rgba(64, 64, 64, .1)",
      1: "rgba(64, 64, 64, .3)",
      2: "rgba(64, 64, 64, .6)",
      5: "rgba(64, 64, 64, .8)",
      10: "rgba(64, 64, 64, 1)",
      50: "rgba(64, 62, 61, 1)",
      100: "rgba(64, 62, 78, .7)",
      500: "rgba(64, 64, 64, .7)",
      1000: "rgba(64, 64, 64, .7)",
      2000: "rgba(64, 64, 64, .7)",
      5000: "rgba(164, 164, 164, .2)",
      10000: "rgba(164, 164, 164, .3)",
      30000: "rgba(164, 164, 164, .5)",
      60000: "rgba(164, 164, 164, .8)",
      70000: "rgba(164, 164, 164, 1)",
    },
  },
};
