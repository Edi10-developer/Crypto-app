import {
  StyledSpan,
  PriceStyled,
  DataIcon,
  UpArrow,
  DownArrow,
  DateSpan,
} from "./styles";
import moment from "moment";

const CoinPriceHistory = (props) => {
  const { icon, checkIsNegative, arrowValueChange, currency } = props;
  const { market_data } = props.data;
  return (
    <>
      <PriceStyled>
        <h2>
          {icon} {market_data.current_price[currency]}
          &nbsp;
          <StyledSpan
            isNegative={checkIsNegative(market_data.current_price[currency])}
          >
            {arrowValueChange(market_data.market_cap_change_percentage_24h)}{" "}
            {Math.round(market_data.market_cap_change_percentage_24h * 10) / 10}{" "}
            %
          </StyledSpan>
        </h2>
      </PriceStyled>
      <p>
        Profit:{" "}
        <StyledSpan
          isNegative={checkIsNegative(
            market_data.price_change_24h_in_currency[currency]
          )}
        >
          {icon}&nbsp;
          {market_data.price_change_24h_in_currency[currency]}
        </StyledSpan>
      </p>
      <DataIcon />
      <div>
        <p>
          <UpArrow />
          All Time High: {icon} &nbsp;
          {market_data.ath[currency]}
          <br />
          <DateSpan>
            {moment(market_data.ath_date[currency]).format(
              "DD, MMM, YYYY, HH:mm:ss"
            )}{" "}
            GMT
          </DateSpan>
        </p>

        <p>
          <DownArrow />
          All Time Low: {icon}&nbsp; {market_data.atl[currency]}
          <br />
          <DateSpan>
            {moment(market_data.atl_date[currency]).format(
              "DD, MMM, YYYY, HH:mm:ss"
            )}{" "}
            GMT
          </DateSpan>
        </p>
      </div>
    </>
  );
};

export default CoinPriceHistory;
