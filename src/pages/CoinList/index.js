import React from "react";
import axios from "axios";
import { LineChart, BarChart, Table } from "../../components/exports";

import { Container, ChartsContainer, ChartContainer } from "./styles";
import { findByDisplayValue } from "@testing-library/dom";

const current = new Date();
const datee = new Date().setDate(current.getDate() - 30);
class CoinList extends React.Component {
  state = {
    currency: "USD",
    data: [],
    orderList: "market_cap_desc",
    btcChartsData: [],
    days: 365,
  };

  corsProblemFixer = "https://cors-anywhere.herokuapp.com/";

  coinPrice = [];
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
    this.getDate();
  };

  getCoinList = async () => {
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.state.currency}&order=${this.state.orderList}&per_page=100&page=1&sparkline=true&price_change_percentage=1h,24h,7d`
      );
      this.setState({ data: data });
    } catch (err) {
      console.log(err);
    }
  };

  getDate = () => {
    this.state.btcChartsData.prices.map((value, index) => {
      var price = value[1];
      var findChartDates = new Date(value[0]);
      var chartDate = `${findChartDates.getDate()} - ${findChartDates.getMonth()} - ${findChartDates.getFullYear()}`;
      this.coinTimestamp.push(chartDate);
      this.coinPrice.push(price);
    });
  };

  componentDidMount() {
    this.getCoinList();
    this.getBitcoinData();
  }

  btcCurrentPrice = this.state.data.map((el) => (
    <span>{el[0].current_price}</span>
  ));
  render() {
    console.log(this.btcCurrentPrice);
    return (
      <Container>
        <div
          style={{
            width: "1100px",
            border: "1px solid blue",
            margin: "0px auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h4>Your overview</h4>
          <ChartsContainer>
            <ChartContainer>
              <h6>BTC</h6>
              <h2>{this.btcCurrentPrice}</h2>
              <LineChart
                coinTimestamp={this.coinTimestamp}
                coinPrice={this.coinPrice}
              />
            </ChartContainer>
            <ChartContainer>
              <BarChart totalVolumes={this.state.btcChartsData.total_volumes} />
            </ChartContainer>
          </ChartsContainer>
          <h4>Your overview</h4>
          <Table data={this.state.data} currency={this.state.currency} />
        </div>
      </Container>
    );
  }
}
export default CoinList;
