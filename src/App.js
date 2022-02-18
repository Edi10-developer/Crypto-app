import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/exports";
import { CoinList, Portfolio, Coin } from "./pages/exports";

class App extends React.Component {
  state = {
    currency: "USD",
    icon: "$",
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
    console.log("app icon updated", this.state.icon);
  };

  render() {
    return (
      <>
        <Router>
          <NavBar
            currency={this.state.currency}
            icon={this.state.icon}
            updateCurrency={this.updateCurrency}
            updateIcon={this.updateIcon}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <CoinList
                  currency={this.state.currency}
                  icon={this.state.icon}
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
