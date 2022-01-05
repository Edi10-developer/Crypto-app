import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { SearchInput, SelectCurrency, SelectTheme } from "../exports";

import { Container, LinkStyled } from "./styles";

class NavBar extends React.Component {
  state = {
    coin: "",
    currency: "USD",
    data: [],
    coinData: [],
  };

  handleSubmit = async (coinValue) => {
    await this.setState({ coin: coinValue });
    this.getCoinData();
    window.location.pathname = `/${this.state.coin}`;
  };

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

  render() {
    console.log(this.state.coinData);

    return (
      <Container>
        <div>
          <Link to="/" style={LinkStyled}>
            Coins
          </Link>
          <Link to="/portfolio" style={LinkStyled}>
            {" "}
            Portfolio
          </Link>
          <Link to={`/${this.state.coin}`} />
        </div>
        <div>
          <Link to={`/${this.state.coin}`} />
          <SearchInput handleSubmit={this.handleSubmit} />
          <SelectCurrency currency1="USD" currency2="EUR" />
          <SelectTheme />
        </div>
      </Container>
    );
  }
}
export default NavBar;
