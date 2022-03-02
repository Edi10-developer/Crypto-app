import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "components/exports";
import { CoinList, Portfolio, Coin } from "pages/exports";
import { darkTheme, lightTheme } from "utils/theme";

class App extends React.Component {
  state = {
    currency: "USD",
    icon: "$",
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
              currency={this.state.currency}
              icon={this.state.icon}
              updateCurrency={this.updateCurrency}
              updateIcon={this.updateIcon}
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
          </div>
        </Router>
      </>
    );
  }
}

export default App;
