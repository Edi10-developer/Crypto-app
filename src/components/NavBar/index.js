import React from "react";
import axios from "axios";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../utils/theme";
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
    icon: this.props.icon,
    coin: "",
    currencies: [
      { value: "USD", icon: "$" },
      { value: "EUR", icon: "€" },
    ],
    coinData: [],
    coins: [],
    primaryTheme: this.props.primaryTheme,
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
    let newIcon = e.target.options[index].id;
    this.setState({ currency: newCurrency, icon: newIcon });
  };

  componentDidMount() {
    this.getCoinList();
  }

  render() {
    console.log(this.state.primaryTheme);
    const { currency, icon, coin, coins, currencies, primaryTheme } =
      this.state;
    return (
      <ThemeProvider theme={this.props.theme}>
        <Container
          updateCurrency={this.props.updateCurrency(currency)}
          updateIcon={this.props.updateIcon(icon)}
        >
          <div>
            <LinkStyled to="/">Coins</LinkStyled>
            <LinkStyled to="/portfolio"> Portfolio</LinkStyled>
            <LinkStyled to={`/${coin}`} />
          </div>
          <div>
            <LinkStyled to={`/${coin}`} />
            <SearchInput
              handleSubmit={this.handleSubmit}
              coins={coins}
              handleChange={this.handleChange}
            />
            {coin !== "" && <DropdownCoinList coins={coins} coin={coin} />}
            <SelectCurrency
              currencies={currencies}
              currency={currency}
              updateCurrency={this.getCurrency}
            />
            <SelectTheme
              primary={primaryTheme}
              changeTheme={this.props.changeTheme}
            />
          </div>
        </Container>
      </ThemeProvider>
    );
  }
}
export default NavBar;
