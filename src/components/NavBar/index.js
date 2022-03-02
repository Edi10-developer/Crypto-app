import React from "react";
import axios from "axios";
import { ThemeProvider } from "styled-components";
import {
  SearchInput,
  SelectCurrency,
  SelectTheme,
  DropdownCoinList,
  CoinsDataBar,
} from "components/exports";

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
    btcMarketCap: 0,
    ethMarketCap: 0,
    globalCoinsData: [],
    totalMarketCap: 0,
    todayTotalMarketCap: 0,
    todayPercentageMarketCap: 0,
    btcPercentageMarketCap: 0,
    ethPercentageMarketCap: 0,
    theme: this.props.theme,
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
      const totalCoinsMarketCap = data.reduce(
        (total, currentValue) => (total = total + currentValue.market_cap),
        0
      );
      const todayTotalMarketCap = data.reduce(
        (total, currentValue) =>
          (total = total + currentValue.market_cap_change_24h),
        0
      );
      this.setState({
        coins: data,
        btcMarketCap: data[0].market_cap,
        ethMarketCap: data[1].market_cap,
        totalMarketCap: totalCoinsMarketCap,
        todayTotalMarketCap: todayTotalMarketCap,
      });
    } catch (err) {
      console.log(err);
    }
    this.getGlobalCoinsData();
  };

  getGlobalCoinsData = async () => {
    try {
      const globalData = await axios.get(
        `https://api.coingecko.com/api/v3/global`
      );
      const btcPercentageMarketCap =
        (this.state.btcMarketCap * 100) / this.state.totalMarketCap;
      const ethPercentageMarketCap =
        (this.state.ethMarketCap * 100) / this.state.totalMarketCap;
      const todayPercentageMarketCap =
        (this.state.todayTotalMarketCap * 100) / this.state.totalMarketCap;
      this.setState({
        globalCoinsData: globalData.data.data,
        todayPercentageMarketCap: todayPercentageMarketCap,
        btcPercentageMarketCap: btcPercentageMarketCap,
        ethPercentageMarketCap: ethPercentageMarketCap,
      });
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

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.theme !== this.props.theme) {
      this.setState({ theme: this.props.theme });
    }
    if (prevState.currency !== this.state.currency) {
      this.getCoinList();
    }
  }

  render() {
    const { currency, icon, coin, coins, currencies, theme } = this.state;
    return (
      <ThemeProvider theme={theme}>
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
              theme={theme}
            />
            {coin !== "" && (
              <DropdownCoinList coins={coins} coin={coin} theme={theme} />
            )}
            <SelectCurrency
              currencies={currencies}
              currency={currency}
              updateCurrency={this.getCurrency}
              theme={theme}
            />
            <SelectTheme changeTheme={this.props.changeTheme} />
          </div>
        </Container>
        <CoinsDataBar data={this.state} />
      </ThemeProvider>
    );
  }
}
export default NavBar;
