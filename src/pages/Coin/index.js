import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  PageContainer,
  MainContainer,
  UpArrow,
  DownArrow,
  ChartContainer,
  GradientChart,
} from "./styles";
import { ThemeProvider } from "styled-components";

import {
  CoinSummary,
  SelectCoinChartDays,
  CoinConverter,
} from "components/exports";
import { LineChart } from "components/Charts/exports";

const Coin = (props) => {
  const { theme, currency, icon, daysOptions } = props.data;
  const coinId =
    window.location.pathname.charAt(7) + window.location.pathname.slice(8);
  const baseUrl = process.env.REACT_APP_ENDPOINT;

  const [coinName, updateCoinName] = useState(coinId);
  const [dataCoin, setDataCoin] = useState({});
  const [days, setDays] = useState(7);
  const [chartData, updateChartData] = useState({});

  const getCoinData = async () => {
    try {
      const coinData = await axios.get(
        `${baseUrl}/coins/${coinName}?tickers=true&sparkline=true`
      );
      setDataCoin(coinData);
    } catch (err) {
      console.log(err);
    }
  };

  const checkIsNegative = (number) => (number < 0 ? true : false);

  const arrowValueChange = (number) =>
    number < 0 ? <DownArrow /> : <UpArrow />;

  const getCoinChartData = async () => {
    try {
      const coinChartData = await axios.get(
        `${baseUrl}/coins/${coinName}/market_chart?vs_currency=${currency}&days=${days}`
      );
      const volume = coinChartData.data.total_volumes.map((value) => value[1]);
      const price = coinChartData.data.prices.map((value) => value[1]);
      const date = coinChartData.data.prices.map((value) => {
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
    coinId !== coinName && updateCoinName(coinId);
    getCoinData();
    getCoinChartData();
  }, [coinId, coinName, days]);

  const { coinPrice, coinTimestamp } = chartData;
  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <MainContainer>
          <CoinSummary
            icon={icon}
            data={dataCoin}
            checkIsNegative={checkIsNegative}
            arrowValueChange={arrowValueChange}
            theme={theme}
            currency={currency.toLowerCase()}
          />
          <SelectCoinChartDays
            days={daysOptions}
            selectNumberOfDays={(number) => setDays(number)}
            borderRadius={"50"}
          />
          {Object.entries(dataCoin).length > 0 && (
            <CoinConverter
              dataCoin={dataCoin}
              currency={currency}
              currencyIcon={icon}
              symbol={dataCoin.data.symbol.toUpperCase()}
              coin={dataCoin.data.id}
            />
          )}
        </MainContainer>
        <ChartContainer>
          <LineChart
            coinPrice={coinPrice}
            coinTimestamp={coinTimestamp}
            tension={0.2}
            pointBackgroundColor={"transparent"}
            pointBorderColor={"transparent"}
            gradient={GradientChart}
            displayTicks={false}
          />
        </ChartContainer>
      </PageContainer>
    </ThemeProvider>
  );
};
export default Coin;
