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
  margin: 0 auto;
  border: 1px solid #ccc;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: stretch;

  min-width: 30px;
  border: 1px solid #ccc;
`;

export const IconCoin = styled.img`
  width: 17px;
  height: 17px;
  margin: 0 5px -5px 0;
`;
