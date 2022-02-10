import React from "react";
import axios from "axios";
import { LineChart, BarChart, Table } from "../../components/exports";
import { Container, ChartsContainer, ChartContainer } from "./styles";

class CoinList extends React.Component {
  state = {
    currency: "USD",
    data: [],
    orderList: "market_cap_desc",
    btcChartsData: [],
    days: 7,
  };

  corsProblemFixer = "https://cors-anywhere.herokuapp.com/";

  coinVolumes = [];

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
    this.getVolumes();
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

  getVolumes = () => {
    this.state.btcChartsData.total_volumes.map((value, index) => {
      var volume = value[1];
      this.coinVolumes.push(volume);
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
    console.log(this.state.btcChartsData.prices);
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
              <LineChart prices={this.state.btcChartsData.prices} />
            </ChartContainer>
            <ChartContainer>
              <BarChart
                coinTotalVolumes={this.coinVolumes}
                coinTimestamp={this.coinTimestamp}
              />
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
