import styled from "styled-components";
import { SiDatabricks } from "react-icons/si";

export const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  background-color: ${(props) => props.theme.bgColor};
  padding: 10px;
`;

export const DataIcon = styled(SiDatabricks)`
  font-size: 20px;
`;
