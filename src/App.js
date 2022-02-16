import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/exports";
import { CoinList, Portfolio, Coin } from "./pages/exports";

class App extends React.Component {
  state = {
    currency: "CHF",
  };

  updateCurrency = (newCurrency) => {
    this.setState({ currency: newCurrency });
    console.log("currency updated", newCurrency);
  };

  render() {
    return (
      <>
        <Router>
          <NavBar
            currency={this.state.currency}
            updateCurrency={this.updateCurrency}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <CoinList currency={this.state.currency} />}
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
