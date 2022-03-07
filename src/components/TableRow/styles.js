import styled from "styled-components";

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
  font-size: 12px;
  width: 8rem;

  :first-child {
    width: 2rem;
  }

  :nth-child(4),
  :nth-child(5),
  :nth-child(6) {
    color: ${(props) =>
      props.isNegative === false
        ? props.theme.positiveData
        : props.theme.negativeData};

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

export const arrowStyled = {
  marginBottom: "-3px",
  fontSize: "15px",
};

export const DataStyled = styled.div`
  width: 95px;
  display: flex;
  justify-content: space-between;
`;
