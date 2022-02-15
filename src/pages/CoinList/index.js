import React from "react";
import axios from "axios";
import { LineChart, BarChart, Table } from "../../components/exports";
import {
  PageContainer,
  MainContainer,
  ChartsContainer,
  ChartContainer,
} from "./styles";

import { currentDate } from "../../utils/date.js";

class CoinList extends React.Component {
  state = {
    currency: "USD",
    data: [],
    sortedDesc: true,
    btcChartsData: [],
    btcCurrentPrice: 0,
    btcCurrentVolume: 0,
    days: 30,
  };

  //corsProblemFixer = "https://cors-anywhere.herokuapp.com/";

  coinPrice = [];
  coinVolumes = [];
  coinTimestamp = [];

  getBitcoinData = async () => {
    try {
      const btcData = await axios.get(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${this.state.currency}&days=${this.state.days}`
      );
      this.setState({ btcChartsData: btcData.data });
    } catch (err) {
      console.log(err);
    }
    this.getBtcPrices();
    this.getBtcVolumes();
  };

  getCoinList = async () => {
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.state.currency}&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h,24h,7d`
      );
      this.setState({
        data: data,
        btcCurrentPrice: data[0].current_price,
        btcCurrentVolume: `${data[0].total_volume / 1000000000} B`,
      });
    } catch (err) {
      console.log(err);
    }
  };

  getBtcPrices = () => {
    this.state.btcChartsData.prices.map((value, index) => {
      var price = value[1];
      var findChartDates = new Date(value[0]);
      var chartDate = `${findChartDates.getDate()} - ${
        findChartDates.getMonth() + 1
      } - ${findChartDates.getFullYear()}`;
      this.coinTimestamp.push(chartDate);
      this.coinPrice.push(price);
    });
  };

  getBtcVolumes = () => {
    this.state.btcChartsData.total_volumes.map((value, index) => {
      var volume = value[1];
      this.coinVolumes.push(volume);
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

  componentDidMount() {
    this.getCoinList();
    this.getBitcoinData();
  }

  render() {
    console.log(this.state.orderList);
    return (
      <PageContainer>
        <MainContainer>
          <h4>Your overview</h4>
          <ChartsContainer>
            <ChartContainer>
              <h6>BTC</h6>
              <h2>
                {this.state.btcCurrentPrice}
                {this.state.currency}
              </h2>
              <h6>{currentDate}</h6>
              <LineChart
                coinTimestamp={this.coinTimestamp}
                coinPrice={this.coinPrice}
              />
            </ChartContainer>
            <ChartContainer>
              <h6>Volume 24H</h6>
              <h2>{this.state.btcCurrentVolume}</h2>
              <h6>{currentDate}</h6>
              <BarChart
                coinTotalVolumes={this.coinVolumes}
                coinTimestamp={this.coinTimestamp}
                width={300}
                height={100}
              />
            </ChartContainer>
          </ChartsContainer>
          <h4>Your overview</h4>
          <Table
            data={this.state.data}
            currency={this.state.currency}
            orderList={this.state.sortedDesc}
            orderCoinList={this.sortByAscOrDesc}
          />
        </MainContainer>
      </PageContainer>
    );
  }
}
export default CoinList;
