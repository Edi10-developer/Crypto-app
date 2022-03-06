import styled from "styled-components";

export const TableStyled = styled.table`
  border: 1px solid #ccc;
  margin: 30px auto;

  td {
    height: 60px;
    border-bottom: 1px solid #ccc;
    margin: 0 10px 0 10px;
  }
`;

export const TableData = styled.div`
  display: flex;
  width: calc(100% - 20px);
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  padding-bottom: 10px;
  margin: 20px auto;
  align-items: center;
  flex-direction: column;
  border-radius: 9px;
  padding: 20px;
  overflow: hidden;
`;

export const arrowStyled = {
  marginBottom: "-3px",
  fontSize: "15px",
};
