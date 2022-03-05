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
`;

export const StyledSpan = styled.span`
  color: ${(props) => props.theme.textColor};
`;

export const GreenBall = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(0, 255, 95, 1);
  margin-top: -13px;
  margin-left: 60px;
`;

export const arrowStyled = {
  marginBottom: "-6px",
  fontSize: "18px",
};
