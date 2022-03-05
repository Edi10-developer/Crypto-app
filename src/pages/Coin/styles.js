import styled from "styled-components";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

export const PageContainer = styled.div`
  border: 1px solid red;
  text-align: left;
  padding: 50px;
  margin-top: -70px;
  background-color: ${(props) => props.theme.pagBgColor};
  color: ${(props) => props.theme.textColor};
  width: calc(100% - 100px);
`;

export const Row = styled.div`
  display: flex;
  max-width: 80%;
  border: 1px solid red;
  justify-content: space-between;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid blue;
  min-width: 20%;
  padding: 20px;
  margin: 10px;

  h2 {
    font-size: 45px;
    margin: -10px;

    span {
      font-size: 15px;
    }
  }
`;

export const DownArrow = styled(TiArrowSortedDown)`
  color: #ff0008;
  margin-bottom: -2px;
`;

export const UpArrow = styled(TiArrowSortedUp)`
  color: rgb(0, 255, 95);
`;
