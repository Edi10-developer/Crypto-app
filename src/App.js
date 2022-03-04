import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "components/exports";
import { CoinList, Portfolio, Coin } from "pages/exports";
import { darkTheme, lightTheme } from "utils/theme";

class App extends React.Component {
  state = {
    currency: "USD",
    icon: "$",
    // coin: "",
    theme: darkTheme,
  };

  updateCurrency = (newCurrency) => {
    if (this.state.currency !== newCurrency) {
      this.setState({ currency: newCurrency });
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
              // updateCoin={this.updateCoin}
              changeTheme={this.changeTheme}
              theme={theme}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <CoinList currency={currency} icon={icon} theme={theme} />
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
