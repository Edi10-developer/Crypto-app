import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/exports";
import { CoinList, Portfolio, Coin } from "./pages/exports";
import { darkTheme, lightTheme } from "./utils/theme";

class App extends React.Component {
  state = {
    currency: "USD",
    icon: "$",
    primaryTheme: true,
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
    if (this.state.primaryTheme === true) {
      this.setState({ primaryTheme: false });
    } else if (this.state.primaryTheme === false) {
      this.setState({ primaryTheme: true });
    }
  };

  render() {
    console.log("app state theme", this.state.primaryTheme);
    return (
      <>
        <Router>
          <NavBar
            currency={this.state.currency}
            icon={this.state.icon}
            updateCurrency={this.updateCurrency}
            updateIcon={this.updateIcon}
            primaryTheme={this.state.primaryTheme}
            changeTheme={this.changeTheme}
            theme={this.state.theme}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <CoinList
                  currency={this.state.currency}
                  icon={this.state.icon}
                  primaryTheme={this.state.primaryTheme}
                  theme={this.state.theme}
                />
              )}
            />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/:coinId" component={Coin} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
