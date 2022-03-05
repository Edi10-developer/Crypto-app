import {
  StyledSpan,
  PriceStyled,
  DataIcon,
  UpArrow,
  DownArrow,
  DateSpan,
} from "./styles";

const CoinPriceHistory = (props) => {
  const {
    coinPrice,
    marketChangePercentage24h,
    priceChange24h,
    coinATH,
    coinATHDate,
    coinATL,
    coinATLDate,
  } = props.data;

  const { icon, checkIsNegative, arrowValueChange } = props;
  return (
    <>
      <PriceStyled>
        <h2>
          {icon} {coinPrice}&nbsp;
          <StyledSpan isNegative={checkIsNegative(marketChangePercentage24h)}>
            {arrowValueChange(marketChangePercentage24h)}{" "}
            {Math.round(marketChangePercentage24h * 10) / 10} %
          </StyledSpan>
        </h2>
      </PriceStyled>
      <p>
        Profit:{" "}
        <StyledSpan isNegative={checkIsNegative(priceChange24h)}>
          {" "}
          {icon}&nbsp;
          {priceChange24h}
        </StyledSpan>
      </p>
      <DataIcon />
      <div>
        <p>
          <UpArrow />
          All Time High: {props.icon} &nbsp;{coinATH}
          <br />
          <DateSpan>{coinATHDate} GMT</DateSpan>
        </p>

        <p>
          <DownArrow />
          All Time Low: {icon}&nbsp; {coinATL}
          <br />
          <DateSpan>{coinATLDate} GMT</DateSpan>
        </p>
      </div>
    </>
  );
};

export default CoinPriceHistory;
