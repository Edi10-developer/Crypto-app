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
  width: calc(100% - 20px);
  background-color: black;
  color: white;
  padding-bottom: 10px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid red;
  border-radius: 9px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 20px;
  overflow: hidden;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  padding: 7px;
  border-bottom: 1px solid #ccc;
  padding-left: 10px;

  :first-child {
    border-bottom: none;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
  font-size: 14px;
  width: 8rem;

  :first-child {
    width: 2rem;
  }

  :nth-child(4),
  :nth-child(5),
  :nth-child(6) {
    color: ${(props) =>
      props.children >= "0" || props.children <= 0 ? "green" : "red"};

    span {
      color: white;
    }
  }

  img {
    width: 17px;
    height: 17px;
    margin: 0 5px -5px 0;
  }
`;
