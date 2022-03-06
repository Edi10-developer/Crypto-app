import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { PageContainer, UpArrow, DownArrow, ChartContainer } from "./styles";
import { ThemeProvider } from "styled-components";

import { CoinSummary, SelectDays } from "components/exports";
import { LineChart } from "components/Charts/exports";

const Coin = (props) => {
  const coinId =
    window.location.pathname.charAt(7) + window.location.pathname.slice(8);
  const baseUrl = process.env.REACT_APP_ENDPOINT;

  const [coinName, updateCoinName] = useState(coinId);
  const [data, setData] = useState({});
  const [days, setDays] = useState(7);
  const [chartData, updateChartData] = useState({});

  const getCoinData = async () => {
    try {
      const coinData = await axios.get(
        `${baseUrl}/coins/${coinName}?tickers=true&sparkline=true`
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

  const getCoinChartData = async () => {
    try {
      const coinChartData = await axios.get(
        `${baseUrl}/coins/${coinName}/market_chart?vs_currency=${props.currency}&days=${days}`
      );
      const volume = coinChartData.data.total_volumes.map((value, index) => {
        let vol = value[1];
        return vol;
      });
      const price = coinChartData.data.prices.map((value, index) => {
        let priceValue = value[1];
        return priceValue;
      });
      const date = coinChartData.data.prices.map((value, index) => {
        let findChartDates = new Date(value[0]);
        let chartDate = `${findChartDates.getDate()} - ${
          findChartDates.getMonth() + 1
        } - ${findChartDates.getFullYear()}`;
        return chartDate;
      });
      updateChartData({
        coinPrice: price,
        coinVolumes: volume,
        coinTimestamp: date,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCoinData();
    getCoinChartData();
  }, [data]);

  //console.log(chartData);
  const { coinPrice, coinTimestamp } = chartData;
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
        <SelectDays
          days={props.daysOptions}
          selectNumberOfDays={(number) => setDays(number)}
          borderRadius={"50"}
        />
        <ChartContainer>
          <LineChart
            coinPrice={coinPrice}
            coinTimestamp={coinTimestamp}
            borderColor={props.theme.textColor}
            tension={0.2}
            pointBackgroundColor={"transparent"}
            pointBorderColor={"transparent"}
          />
        </ChartContainer>
      </PageContainer>
    </ThemeProvider>
  );
};
export default Coin;
