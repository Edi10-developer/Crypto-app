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

import { connect } from "react-redux";
import { getData } from "store/allCoins/actions";

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
    btcMarketCap: 0,
    ethMarketCap: 0,
    globalCoinsData: [],
    totalVolume: 0,
    totalMarketCap: 0,
    todayTotalMarketCap: 0,
    todayPercentageMarketCap: 0,
    btcPercentageMarketCap: 0,
    ethPercentageMarketCap: 0,
    theme: this.props.theme,
    value: 0,
  };

  baseurl = process.env.REACT_APP_ENDPOINT;

  updateCoin = (coinName) => this.setState({ coin: coinName });

  handleSubmit = async () => {
    await this.props.updateCoin(this.state.coin);
    this.handleChange("");
    //  window.location.pathname = `/coins/${this.state.coin}`;
  };

  getCoinList = async () => {
    try {
      const { data } = await axios(
        `${this.baseurl}/coins/markets?vs_currency=${this.props.currency}&per_page=30&page=1&sparkline=true&price_change_percentage=7d`
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
      const globalData = await axios.get(`${this.baseurl}/global`);
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
    const index = e.target.selectedIndex;
    const newCurrency = e.target.options[index].value;
    const newIcon = e.target.options[index].id;

    this.props.updateCurrency(newCurrency);
    this.props.updateIcon(newIcon);
  };

  componentDidMount() {
    this.props.getData();
    this.getCoinList();
  }

  componentDidUpdate(prevProps, prevState) {
    prevProps.theme !== this.props.theme &&
      this.setState({ theme: this.props.theme });
    prevState.currency !== this.state.currency && this.getCoinList();
  }

  render() {
    const { coin, coins, theme } = this.state;
    // const { changeTheme } = this.props;

    //console.log("coins", this.props.coinso.coins);
    console.log(props);
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <div>
            <LinkStyled to="/">Coins</LinkStyled>
            <LinkStyled to="/portfolio"> Portfolio</LinkStyled>
          </div>
          <div></div>
          <div>
            <SearchInput data={this.state} updateCoin={this.updateCoin} />
            {coin !== "" && (
              <DropdownCoinList
                coins={this.props.coins.coins}
                coin={coin}
                theme={theme}
                updateCoin={() => this.props.updateCoin}
              />
            )}
            <SelectCurrency
              data={this.state}
              updateCurrency={this.getCurrency}
            />
            <SelectTheme changeTheme={this.props.changeTheme} theme={theme} />
          </div>
        </Container>
        <CoinsDataBar data={this.state} />
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  coins: state.allCoins.data,
});
const mapDispatchToProps = {
  getData,
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
