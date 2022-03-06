import styled from "styled-components";
import { IoCopyOutline } from "react-icons/io5";
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
