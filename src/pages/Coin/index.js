import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { PageContainer, UpArrow, DownArrow } from "./styles";
import { ThemeProvider } from "styled-components";

import CoinSummary from "../../components/CoinSummary";

const Coin = (props) => {
  const coinId =
    window.location.pathname.charAt(7) + window.location.pathname.slice(8);
  const baseUrl = process.env.REACT_APP_ENDPOINT;

  const [coinName, updateCoinName] = useState(coinId);
  const [data, setData] = useState({});

  const getCoinData = async () => {
    try {
      const coinData = await axios.get(
        `${baseUrl}/coins/${coinName}?tickers=true`
      );

      setData({
        data: coinData.data,
        coinImg: coinData.data.image.small,
        coinId: coinData.data.id,
        coinSymbol: coinData.data.symbol.toUpperCase(),
        coinLink: coinData.data.links.homepage[0],
        coinBlockchainLink: coinData.data.links.blockchain_site[0],
        coinBlockchainViewLink: coinData.data.links.blockchain_site[2],
        coinForumLink: coinData.data.links.official_forum_url[0],
        coinDescription: coinData.data.description.en,
        coinPrice: `${
          props.currency === "USD"
            ? coinData.data.market_data.current_price.usd
            : coinData.data.market_data.current_price.eur
        }`,
        coinATH: `${
          props.currency === "USD"
            ? coinData.data.market_data.ath.usd
            : coinData.data.market_data.ath.eur
        }`,
        coinATL: `${
          props.currency === "USD"
            ? coinData.data.market_data.atl.usd
            : coinData.data.market_data.atl.eur
        }`,
        coinATLDate: `${
          props.currency === "USD"
            ? moment(coinData.data.market_data.atl_date.usd).format(
                "DD, MMM, YYYY, HH:mm:ss"
              )
            : moment(coinData.data.market_data.atl_date.eur).format(
                "DD, MMM, YYYY, HH:mm:ss"
              )
        }`,
        coinATHDate: `${
          props.currency === "USD"
            ? moment(coinData.data.market_data.ath_date.usd).format(
                "DD, MMM, YYYY, HH:mm:ss"
              )
            : moment(coinData.data.market_data.ath_date.eur).format(
                "DD, MMM, YYYY, HH:mm:ss"
              )
        }`,
        marketChangePercentage24h:
          coinData.data.market_data.market_cap_change_percentage_24h,

        priceChange24h: `${
          props.currency === "USD"
            ? coinData.data.market_data.price_change_24h_in_currency.usd
            : coinData.data.market_data.price_change_24h_in_currency.eur
        }`,
        marketCap: `${
          props.currency === "USD"
            ? coinData.data.market_data.market_cap.usd
            : coinData.data.market_data.market_cap.eur
        }`,
        fullyDilutedValuation: `${
          props.currency === "USD"
            ? coinData.data.market_data.fully_diluted_valuation.usd
            : coinData.data.market_data.fully_diluted_valuation.eur
        }`,
        marketVolume24h: `${
          props.currency === "USD"
            ? coinData.data.market_data.market_cap_change_24h_in_currency.usd
            : coinData.data.market_data.market_cap_change_24h_in_currency.eur
        }`,
        totalVolume: coinData.data.market_data.total_supply,
        maxSupply: coinData.data.market_data.max_supply,
        circulatingSupply: coinData.data.market_data.circulating_supply,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const checkIsNegative = (number) => {
    if (number < 0) {
      return true;
    } else {
      return false;
    }
  };

  const arrowValueChange = (number) => {
    if (number < 0) {
      return <DownArrow />;
    } else {
      return <UpArrow />;
    }
  };

  useEffect(() => {
    getCoinData();
  }, [data]);

  //console.log(data.data);
  return (
    <ThemeProvider theme={props.theme}>
      <PageContainer>
        <CoinSummary
          icon={props.icon}
          data={data}
          checkIsNegative={checkIsNegative}
          arrowValueChange={arrowValueChange}
          theme={props.theme}
        />
      </PageContainer>
    </ThemeProvider>
  );
};
export default Coin;
