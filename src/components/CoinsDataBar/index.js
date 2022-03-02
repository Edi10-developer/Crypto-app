import { Progressbar } from "../exports";
import { Container, CoinImg } from "./styles";
import { nFormatter } from "../../utils/nFormatter";
import { ThemeProvider } from "styled-components";

const CoinsDataBar = (props) => {
  const {
    globalCoinsData,
    currencyIcon,
    totalMarketCap,
    todayTotalMarketCap,
    todayPercentageMarketCap,
    btcPercentageMarketCap,
    ethPercentageMarketCap,
    theme,
  } = props.data;

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <li>Coins: {globalCoinsData.active_cryptocurrencies}</li>
        <li>Exchange: {globalCoinsData.markets}</li>
        <li>
          •{currencyIcon}
          {nFormatter(totalMarketCap)}
        </li>
        <li>
          <p>
            {" "}
            {currencyIcon}
            {nFormatter(todayTotalMarketCap)}{" "}
            <Progressbar
              percent={todayPercentageMarketCap}
              unfilledBackground={"white"}
              filledBackground={"#215DB5"}
              width={"60px"}
            />
          </p>
        </li>
        <li>
          <CoinImg
            src={
              "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
            }
            alt={"bitcoin"}
          />
          <span>{Math.round(btcPercentageMarketCap * 10) / 10}%</span>
          <Progressbar
            percent={btcPercentageMarketCap}
            unfilledBackground={"white"}
            filledBackground={"#215DB5"}
            width={"60px"}
          />
        </li>
        <li>
          <CoinImg
            src={
              "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
            }
            alt={"etherium"}
          />
          <span>{Math.round(ethPercentageMarketCap * 10) / 10}%</span>
          <Progressbar
            percent={ethPercentageMarketCap}
            unfilledBackground={"white"}
            filledBackground={"#215DB5"}
            width={"60px"}
          />
        </li>
      </Container>
    </ThemeProvider>
  );
};

export default CoinsDataBar;
