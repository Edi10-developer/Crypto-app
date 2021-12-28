import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { SearchInput, SelectCurrency, SelectTheme } from "../exports";

class NavBar extends React.Component {
  state = {
    coin: "",
    currency: "USD",
    data: [],
    coinData: [],
  };
  handleSubmit = (coinValue) => this.setState({ coin: coinValue });

  getCoinData = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${this.state.coin}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`
      );
      this.setState({ coinData: data });
    } catch (err) {
      console.log(err);
    }
  };

  getCoinList = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.state.currency}&order=market_cap_desc&per_page=20&page=1&sparkline=true`
      );
      this.setState({ data: data });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    console.log(this.state.coinData);
    return (
      <div style={{ display: "flex", alignContent: "space-between" }}>
        <Link to="/">Coins</Link>
        <Link to="/portfolio"> Portfolio</Link>
        <SearchInput handleSubmit={this.handleSubmit} />
        <SelectCurrency currency1="USD" currency2="EUR" />
        <SelectTheme />
        <button onClick={this.getCoinList}>Get coin list</button>
        <button onClick={this.getCoinData}>Get coin data</button>
      </div>
    );
  }
}
export default NavBar;
