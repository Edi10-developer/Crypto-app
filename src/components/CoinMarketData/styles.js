import styled from "styled-components";
import { AiFillPlusSquare } from "react-icons/ai";

export const ListContainer = styled.ul`
  list-style-type: none;
`;

export const Plus = styled(AiFillPlusSquare)`
  color: #2172e5;
  background-color: white;
  margin-right: 7px;
`;

export const StyledDataSpan = styled.span`
  color: ${(props) => props.theme.textColor};
  opacity: 0.6;
`;
