import React from "react";
import { Link } from "react-router-dom";
import { SearchInput, SelectCurrency, SelectTheme } from "../exports";

class NavBar extends React.Component {
  state = {
    coin: "",
  };
  handleSubmit = (coinValue) => this.setState({ coin: coinValue });
  render() {
    return (
      <div style={{ display: "flex", alignContent: "space-between" }}>
        <Link to="/">Coins</Link>
        <Link to="/portfolio"> Portfolio</Link>
        <h3>{this.state.coin}</h3>
        <SearchInput handleSubmit={this.handleSubmit} />
        <SelectCurrency currency1="USD" currency2="EUR" />
        <SelectTheme />
      </div>
    );
  }
}
export default NavBar;
