import React from "react";
import axios from "axios";
import {
  CoinsDataBar,
  LineChart,
  BarChart,
  SelectDays,
  Table,
} from "components/exports";
import {
  PageContainer,
  MainContainer,
  ChartsContainer,
  ChartContainer,
} from "./styles";

import { currentDate } from "utils/date.js";
import { nFormatter } from "utils/nFormatter";
import { ThemeProvider } from "styled-components";

class CoinList extends React.Component {
  state = {
    currency: this.props.currency,
    currencyIcon: this.props.icon,
    data: [],
    sortedDesc: true,
    btcChartsData: [],
    btcCurrentPrice: 0,
    btcCurrentVolume: 0,
    days: 1,
    daysOptions: [1, 7, 30, 180, 365],
    coinPrice: [],
    coinVolumes: [],
    coinTimestamp: [],
    theme: this.props.theme,
  };

  //corsProblemFixer = "https://cors-anywhere.herokuapp.com/";

  getCoinList = async () => {
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.state.currency}&order=market_cap_desc&per_page=1000&page=1&sparkline=true&price_change_percentage=1h,24h,7d`
      );

      this.setState({
        data: data,
        btcCurrentPrice: data[0].current_price,
        btcCurrentVolume: data[0].total_volume,
      });
    } catch (err) {
      console.log(err);
    }
    this.getBitcoinData();
  };

  getBitcoinData = async () => {
    try {
      const btcData = await axios.get(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${this.state.currency}&days=${this.state.days}`
      );
      const volume = btcData.data.total_volumes.map((value, index) => {
        let vol = value[1];
        return vol;
      });
      const price = btcData.data.prices.map((value, index) => {
        let priceValue = value[1];
        return priceValue;
      });
      const date = btcData.data.prices.map((value, index) => {
        let findChartDates = new Date(value[0]);
        let chartDate = `${findChartDates.getDate()} - ${
          findChartDates.getMonth() + 1
        } - ${findChartDates.getFullYear()}`;
        return chartDate;
      });
      this.setState({
        coinPrice: price,
        coinVolumes: volume,
        coinTimestamp: date,
      });
    } catch (err) {
      console.log(err);
    }
  };

  setDays = (daysNumber) => {
    this.setState({ days: daysNumber });
  };

  getBtcVolumes = () => {
    this.state.btcChartsData.total_volumes.map((value, index) => {
      var volume = value[1];
      this.setState({ coinVolumes: [...this.state.coinVolumes, volume] });
    });
  };

  sortByAscOrDesc = () => {
    if (this.state.sortedDesc === true) {
      let sortedAsceding = this.state.data.sort((a, b) => {
        return a.market_cap - b.market_cap;
      });
      this.setState({ sortedDesc: false });
      return sortedAsceding;
    } else if (this.state.sortedDesc === false) {
      let sortedDesceding = this.state.data.sort((a, b) => {
        return b.market_cap - a.market_cap;
      });
      this.setState({ sortedDesc: true });
      return sortedDesceding;
    }
  };

  updateBbtcData = async () => {
    await this.getBitcoinData();
    this.getBtcPrices();
    this.getBtcVolumes();
  };

  componentDidMount = () => {
    this.getCoinList();
    this.getBitcoinData();
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.currency !== this.props.currency ||
      prevState.currency !== this.state.currency ||
      prevState.days !== this.state.days ||
      prevProps.theme !== this.props.theme
    ) {
      this.setState({
        currency: this.props.currency,
        currencyIcon: this.props.icon,
        theme: this.props.theme,
      });
      this.getCoinList();
      this.getBitcoinData();
    }
  }

  render() {
    console.log(this.state.days);
    const {
      btcCurrentPrice,
      currencyIcon,
      coinPrice,
      coinTimestamp,
      btcCurrentVolume,
      coinVolumes,
      daysOptions,
      data,
      sortedDesc,
      theme,
    } = this.state;
    return (
      <ThemeProvider theme={this.props.theme}>
        <PageContainer>
          <MainContainer>
            <h4>Your overview</h4>
            <ChartsContainer>
              <ChartContainer>
                <h6>BTC</h6>
                <h2>
                  {btcCurrentPrice}&nbsp;
                  {currencyIcon}
                </h2>
                <h6>{currentDate}</h6>
                <LineChart
                  coinPrice={coinPrice}
                  coinTimestamp={coinTimestamp}
                />
              </ChartContainer>
              <ChartContainer>
                <h6>Volume 24H</h6>
                <h2>{nFormatter(btcCurrentVolume)}</h2>
                <h6>{currentDate}</h6>
                <BarChart
                  coinTotalVolumes={coinVolumes}
                  coinTimestamp={coinTimestamp}
                  width={300}
                />
              </ChartContainer>
            </ChartsContainer>
            <SelectDays
              days={daysOptions}
              selectNumberOfDays={(number) => this.setDays(number)}
              theme={theme}
            />
            <h4>Your overview</h4>
            <Table
              data={data}
              icon={currencyIcon}
              orderList={sortedDesc}
              orderCoinList={this.sortByAscOrDesc}
              theme={theme}
            />
          </MainContainer>
        </PageContainer>
      </ThemeProvider>
    );
  }
}
export default CoinList;
