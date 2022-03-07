import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { PageContainer, UpArrow, DownArrow, ChartContainer } from "./styles";
import { ThemeProvider } from "styled-components";

import {
  CoinSummary,
  SelectCoinChartDays,
  CoinConverter,
} from "components/exports";
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
        coinPrice:
          coinData.data.market_data.current_price[props.currency.toLowerCase()],
        coinATH: coinData.data.market_data.ath[props.currency.toLowerCase()],
        coinATL: coinData.data.market_data.atl[props.currency.toLowerCase()],
        coinATLDate: moment(
          coinData.data.market_data.atl_date[props.currency.toLowerCase()]
        ).format("DD, MMM, YYYY, HH:mm:ss"),
        coinATHDate: moment(
          coinData.data.market_data.ath_date[props.currency.toLowerCase()]
        ).format("DD, MMM, YYYY, HH:mm:ss"),
        marketChangePercentage24h:
          coinData.data.market_data.market_cap_change_percentage_24h,
        priceChange24h:
          coinData.data.market_data.price_change_24h_in_currency[
            props.currency.toLowerCase()
          ],
        marketCap:
          coinData.data.market_data.market_cap[props.currency.toLowerCase()],
        fullyDilutedValuation:
          coinData.data.market_data.fully_diluted_valuation[
            props.currency.toLowerCase()
          ],
        marketVolume24h:
          coinData.data.market_data.market_cap_change_24h_in_currency[
            props.currency.toLowerCase()
          ],
        totalVolume: coinData.data.market_data.total_supply,
        maxSupply: coinData.data.market_data.max_supply,
        circulatingSupply: coinData.data.market_data.circulating_supply,
      });
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
        `${baseUrl}/coins/${coinName}/market_chart?vs_currency=${props.currency}&days=${days}`
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
    getCoinData();
    getCoinChartData();
    coinId !== coinName && updateCoinName(coinId);
  }, [coinId, coinName, days]);

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
        <SelectCoinChartDays
          days={props.daysOptions}
          selectNumberOfDays={(number) => setDays(number)}
          borderRadius={"50"}
        />
        <CoinConverter
          currency={props.currency}
          coinSymbol={data.coinSymbol}
          coin={coinId}
          currencyIcon={props.icon}
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
