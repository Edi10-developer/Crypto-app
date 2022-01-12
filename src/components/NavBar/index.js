import React from "react";
import axios from "axios";
import {
  SearchInput,
  SelectCurrency,
  SelectTheme,
  DropdownCoinList,
} from "../exports";

import { Container, LinkStyled } from "./styles";

class NavBar extends React.Component {
  state = {
    coin: "",
    currency: "USD",
    data: [],
    coinData: [],
    coins: [],
  };

  handleChange = async (coinValue) => {
    this.setState({ coin: coinValue });
  };
  handleSubmit = (coinValue) => {
    //  await this.setState({ coin: coinValue });
    this.getCoinData();
    window.location.pathname = `/${this.state.coin}`;
  };

  getCoinData = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${this.state.coin}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`
      );
      this.setState({ coinData: data });
    } catch (err) {
      console.log(err);
    }
  };

  getCoinList = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.state.currency}&order=${this.state.orderList}&per_page=100&page=1&sparkline=true&price_change_percentage=7d`
      );
      // const coinsIds = data.map((item) => item);
      this.setState({ coins: data });
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount() {
    this.getCoinList();
  }

  render() {
    console.log(this.state.coins.map((i) => i.id));
    return (
      <Container>
        <div>
          <LinkStyled to="/">Coins</LinkStyled>
          <LinkStyled to="/portfolio"> Portfolio</LinkStyled>
          <LinkStyled to={`/${this.state.coin}`} />
        </div>
        <div>
          <LinkStyled to={`/${this.state.coin}`} />
          <SearchInput
            handleSubmit={this.handleSubmit}
            coins={this.state.coins}
            handleChange={this.handleChange}
          />
          {this.state.coin !== "" && (
            <DropdownCoinList coins={this.state.coins} coin={this.state.coin} />
          )}

          <SelectCurrency currency1={"USD"} currency2={"EUR"} />
          <SelectTheme />
        </div>
      </Container>
    );
  }
}
export default NavBar;

{
  /* 
 <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "370px",
                position: "fixed",
                backgroundColor: "black",
                color: "white",
                top: "60px",
              }}
            >
              {this.state.coins
                .filter((element) => {
                  if (this.state.coin == "") {
                    return element;
                  } else if (element[0] === this.state.coin[0]) {
                    return element;
                  }
                })
                .map((item, key) => (
                  <div
                    onClick={() => (window.location.pathname = `/${item}`)}
                    key={item}
                  >
                    {item}
                  </div>
                ))}
            </div>
*/
}
