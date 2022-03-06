import styled from "styled-components";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { SiDatabricks } from "react-icons/si";

export const PriceStyled = styled.div`
  h2 {
    display: flex;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    align-content: center;
    font-size: 41px;
    margin: -5px;
  }
`;
export const DateSpan = styled.span`
  text-align: center;
  margin-left: 15px;
`;

export const StyledSpan = styled.span`
  font-size: 12px;
  color: ${({ isNegative }) =>
    isNegative === false ? "rgb(0, 255, 95)" : "#FF0008"};
`;

export const DownArrow = styled(TiArrowSortedDown)`
  color: #ff0008;
  margin-bottom: -2px;
`;

export const UpArrow = styled(TiArrowSortedUp)`
  color: rgb(0, 255, 95);
`;

export const DataIcon = styled(SiDatabricks)`
  font-size: 20px;
`;
