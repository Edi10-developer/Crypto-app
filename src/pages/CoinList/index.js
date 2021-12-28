import React from "react";
import axios from "axios";

class CoinList extends React.Component {
  state = {
    currency: "USD",
    data: [],
  };

  getCoinList = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.state.currency}&order=market_cap_desc&per_page=20&page=1&sparkline=true`
      );
      this.setState({ data: data });
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount() {
    this.getCoinList();
  }
  render() {
    console.log(this.state.data);
    return (
      <div>
        <table>
          <th>Name</th>
          <th>Price</th>
          <th>1h %</th>
          <th>24h %</th>
          <th>7d %</th>
          <th>24h Volume/Market Cap</th>
          <th>Circulating/Total Supply</th>
          <th>Last7days</th>
          {this.state.data.map((item) => (
            <tr>
              <td>
                <img src={item.image} alt={item.id} style={{ width: "20px" }} />
                {item.id}
              </td>
              <td>{item.current_price}</td>
              <td>{Math.round(item.ath_change_percentage)}%</td>
              <td>{Math.round(item.high_24h - item.low_24h)}%</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
export default CoinList;
