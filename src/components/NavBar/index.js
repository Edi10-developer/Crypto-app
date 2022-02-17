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
    currency: this.props.currency,
    coin: "",
    currencies: ["USD", "EUR"],
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

  getCurrency = (e) => {
    let index = e.target.selectedIndex;
    let newCurrency = e.target.options[index].value;
    this.setState({ currency: newCurrency });
  };

  componentDidMount() {
    this.getCoinList();
  }

  render() {
    return (
      <Container
        updateCurrency={this.props.updateCurrency(this.state.currency)}
      >
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
            currency={this.state.currency}
            updateCurrency={this.getCurrency}
          />
          <SelectTheme />
        </div>
      </Container>
    );
  }
}
export default NavBar;
