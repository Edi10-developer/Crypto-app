import { Row, Column, StyledSpan, arrowStyled, GreenBall } from "./styles";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

const TableHead = ({ orderCoinList, orderList }) => {
  return (
    <Row>
      <Column>#</Column>
      <Column>
        <p>
          Name{" "}
          <StyledSpan onClick={orderCoinList}>
            {orderList === true ? (
              <TiArrowSortedDown style={arrowStyled} />
            ) : (
              <TiArrowSortedUp style={arrowStyled} />
            )}
          </StyledSpan>
        </p>
      </Column>
      <Column>
        {" "}
        <StyledSpan>Price</StyledSpan>
      </Column>
      <Column>
        <StyledSpan>1h %</StyledSpan>
      </Column>
      <Column>
        <StyledSpan>24h %</StyledSpan>
      </Column>
      <Column>
        <StyledSpan>7d %</StyledSpan>
      </Column>
      <Column>
        <StyledSpan>24h Volume/Market Cap</StyledSpan>
      </Column>
      <Column>
        <StyledSpan>Circulating/Total Supply</StyledSpan>{" "}
      </Column>
      <Column>
        <StyledSpan>
          Last7days <GreenBall />
        </StyledSpan>
      </Column>
    </Row>
  );
};

export default TableHead;
