import React from "react";
import axios from "axios";
import {
  CoinsDataBar,
  LineChart,
  BarChart,
  SelectDays,
  Table,
} from "../../components/exports";
import {
  PageContainer,
  MainContainer,
  ChartsContainer,
  ChartContainer,
} from "./styles";

import { currentDate } from "../../utils/date.js";
import { nFormatter } from "../../utils/nFormatter";

class CoinList extends React.Component {
  state = {
    currency: this.props.currency,
    icon: this.props.icon,
    data: [],
    sortedDesc: true,
    btcChartsData: [],
    btcCurrentPrice: 0,
    btcCurrentVolume: 0,
    days: 30,
    daysOptions: [1, 7, 30, 180, 365],
    coinPrice: [],
    coinVolumes: [],
    coinTimestamp: [],
  };

  //corsProblemFixer = "https://cors-anywhere.herokuapp.com/";

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

  getCoinList = async () => {
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.state.currency}&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h,24h,7d`
      );
      console.log(data);
      this.setState({
        data: data,
        btcCurrentPrice: data[0].current_price,
        btcCurrentVolume: data[0].total_volume,
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
      prevState.days !== this.state.days
    ) {
      this.setState({ currency: this.props.currency, icon: this.props.icon });

      this.getCoinList();
      this.getBitcoinData();
    }
  }

  render() {
    return (
      <PageContainer>
        <MainContainer>
          <h4>Your overview</h4>
          <ChartsContainer>
            <ChartContainer>
              <h6>BTC</h6>
              <h2>
                {this.state.btcCurrentPrice}
                {this.state.icon}
              </h2>
              <h6>{currentDate}</h6>
              <LineChart
                coinPrice={this.state.coinPrice}
                coinTimestamp={this.state.coinTimestamp}
              />
            </ChartContainer>
            <ChartContainer>
              <h6>Volume 24H</h6>
              <h2>{nFormatter(this.state.btcCurrentVolume)}</h2>
              <h6>{currentDate}</h6>
              <BarChart
                coinTotalVolumes={this.state.coinVolumes}
                coinTimestamp={this.state.coinTimestamp}
                width={300}
                height={100}
              />
            </ChartContainer>
          </ChartsContainer>
          <SelectDays
            days={this.state.daysOptions}
            selectNumberOfDays={(number) => this.setDays(number)}
          />
          <h4>Your overview</h4>
          <Table
            data={this.state.data}
            icon={this.state.icon}
            orderList={this.state.sortedDesc}
            orderCoinList={this.sortByAscOrDesc}
          />
        </MainContainer>
      </PageContainer>
    );
  }
}
export default CoinList;
