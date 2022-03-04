import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "components/exports";
import { CoinList, Portfolio, Coin } from "pages/exports";
import { darkTheme, lightTheme } from "utils/theme";

class App extends React.Component {
  state = {
    currency: "USD",
    icon: "$",
    data: [],
    btcChartsData: [],
    btcCurrentPrice: 0,
    btcCurrentVolume: 0,
    coinPrice: [],
    coinVolumes: [],
    coinTimestamp: [],
    days: 7,
    daysOptions: [1, 7, 30, 180, 365],
    // coin: "",
    theme: darkTheme,
  };

  updateCurrency = (newCurrency) => {
    if (this.state.currency !== newCurrency) {
      this.setState({ currency: newCurrency });
    }
  };

  updateDays = (newDaysNumber) => {
    if (this.state.days !== newDaysNumber) {
      this.setState({ days: newDaysNumber });
    }
  };

  updateIcon = (newIcon) => {
    if (this.state.icon !== newIcon) {
      this.setState({ icon: newIcon });
    }
  };

  changeTheme = () => {
    if (this.state.theme === darkTheme) {
      this.setState({ theme: lightTheme });
    } else if (this.state.theme === lightTheme) {
      this.setState({ theme: darkTheme });
    }
  };

  getCoinList = async () => {
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.state.currency}&order=market_cap_desc&per_page=1000&page=1&sparkline=true&price_change_percentage=1h,24h,7d`
      );

      this.setState({
        data: data,
        btcCurrentPrice: data[0].current_price,
        btcCurrentVolume: data[0].total_volume,
      });
    } catch (err) {
      console.log(err);
    }
  };

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
  componentDidMount = () => {
    this.getCoinList();
    this.getBitcoinData();
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.currency !== this.state.currency ||
      prevState.days !== this.state.days ||
      prevProps.theme !== this.props.theme
    ) {
      this.getCoinList();
      this.getBitcoinData();
    }
  }

  render() {
    const { currency, coin, icon, theme } = this.state;
    console.log(coin);
    return (
      <>
        <Router>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "0px",
            }}
          >
            <NavBar
              currency={currency}
              icon={icon}
              updateCurrency={this.updateCurrency}
              updateIcon={this.updateIcon}
              changeTheme={this.changeTheme}
              theme={theme}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <CoinList
                    dataCoinList={this.state}
                    updateDays={this.updateDays}
                    data={this.state.data}
                  />
                )}
              />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route
                exact
                path="/:coinId"
                render={() => (
                  <Coin currency={currency} coin={coin} theme={theme} />
                )}
              />
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
