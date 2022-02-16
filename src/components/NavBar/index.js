import React from "react";
import axios from "axios";
import {
  SearchInput,
  SelectCurrency,
  SelectTheme,
  DropdownCoinList,
} from "../exports";

import { Container, LinkStyled } from "./styles";

class NavBar extends React.Component {
  state = {
    coin: "",
    currencies: ["USD", "EURO"],
    currency: "USD",
    coinData: [],
    coins: [],
  };

  handleChange = async (coinValue) => {
    this.setState({ coin: coinValue });
  };

  handleSubmit = (coinValue) => {
    this.getCoinData();
    window.location.pathname = `/${this.state.coin}`;
  };

  getCoinList = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.state.currency}&per_page=100&page=1&sparkline=true&price_change_percentage=7d`
      );
      this.setState({ coins: data });
    } catch (err) {
      console.log(err);
    }
  };

  getCurrency = (value) => {
    if (this.state.currency !== value) {
      this.setState({
        currency: value,
      });
    }
  };

  componentDidMount() {
    this.getCoinList();
  }

  render() {
    return (
      <Container>
        <div>
          <LinkStyled to="/">Coins</LinkStyled>
          <LinkStyled to="/portfolio"> Portfolio</LinkStyled>
          <LinkStyled to={`/${this.state.coin}`} />
        </div>
        <div>
          <LinkStyled to={`/${this.state.coin}`} />
          <SearchInput
            handleSubmit={this.handleSubmit}
            coins={this.state.coins}
            handleChange={this.handleChange}
          />
          {this.state.coin !== "" && (
            <DropdownCoinList coins={this.state.coins} coin={this.state.coin} />
          )}
          <SelectCurrency
            currencies={this.state.currencies}
            updateCurrency={() =>
              this.props.updateCurrency(this.state.currency)
            }
          />
          <SelectTheme />
        </div>
      </Container>
    );
  }
}
export default NavBar;
