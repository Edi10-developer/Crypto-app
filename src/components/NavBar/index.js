import React from "react";
import { Link } from "react-router-dom";
import { SearchInput } from "../exports";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Coins</Link>
        <Link to="/portfolio">Portfolio</Link>
        <div>
          <SearchInput />
          <div>
            <select name="fiat" form="carform">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    );
  }
}
export default NavBar;
