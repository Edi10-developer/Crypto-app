import styled from "styled-components";
import { IoCopyOutline } from "react-icons/io5";
import { HiLink } from "react-icons/hi";

export const Row = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 30px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
  min-width: 15%;
  padding: 15px;
`;

export const LinkStyled = styled.a`
  color: ${(props) => props.theme.textColor};
  font-size: 14px;
  text-decoration: none;
  &:hover {
    color: rgb(0, 255, 95);
  }
`;

export const LinkIcon = styled(HiLink)`
  color: white;
`;

export const CopyIcon = styled(IoCopyOutline)`
  font-size: 20px;
`;
