import styled from "styled-components";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { AiFillPlusSquare } from "react-icons/ai";
import { IoCopyOutline } from "react-icons/io5";
import { SiDatabricks } from "react-icons/si";
import { HiLink } from "react-icons/hi";

export const PageContainer = styled.div`
  border: 1px solid red;
  text-align: left;
  padding: 50px;
  background-color: ${(props) => props.theme.pagBgColor};
  color: ${(props) => props.theme.textColor};
  width: calc(100% - 100px);
`;

export const Row = styled.div`
  display: flex;
  margin: 0 auto;
  border: 1px solid red;
  justify-content: space-between;
  padding: 10px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid blue;
  min-width: 15%;
  padding: 10px;
  margin: 10px;
  h2 {
    font-size: 45px;
    margin: -10px;
    span {
      font-size: 15px;
    }
  }
`;

export const DateSpan = styled.span`
  display: block;
  text-align: center;
  margin-left: 15px;
`;

export const StyledSpan = styled.span`
  color: ${(props) =>
    props.isNegative === false ? "rgb(0, 255, 95)" : "#FF0008"};
`;

export const ImageContainer = styled.div`
  margin: 30px auto;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-self: center;
  align-items: center;
  background-color: ${(props) => props.theme.pagBgColor};
`;
export const CoinImage = styled.img`
  width: 50px;
`;

export const DownArrow = styled(TiArrowSortedDown)`
  color: #ff0008;
  margin-bottom: -2px;
`;

export const UpArrow = styled(TiArrowSortedUp)`
  color: rgb(0, 255, 95);
`;

export const LinkStyled = styled.a`
  color: ${(props) => props.theme.textColor};
  font-size: 14px;
  text-decoration: none;
  &:hover {
    color: rgb(0, 255, 95);
  }
`;

export const Plus = styled(AiFillPlusSquare)`
  color: #2172e5;
  background-color: white;
  margin-right: 7px;
`;

export const LinkIcon = styled(HiLink)`
  color: white;
`;

export const DataIcon = styled(SiDatabricks)`
  font-size: 20px;
`;

export const CopyIcon = styled(IoCopyOutline)`
  font-size: 20px;
`;

export const StyledDataSpan = styled.span`
  color: rgba(255, 255, 255, 0.7);
`;
