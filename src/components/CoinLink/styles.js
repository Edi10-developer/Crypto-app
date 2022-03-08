import styled from "styled-components";
import { HiLink } from "react-icons/hi";

export const LinkStyled = styled.a`
  color: ${(props) => props.theme.textColor};
  text-decoration: none;
  font-size: 4px;
`;

export const LinkIcon = styled(HiLink)`
  color: ${(props) => props.theme.textColor};
`;
