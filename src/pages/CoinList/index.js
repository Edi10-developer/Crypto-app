import React from "react";
import axios from "axios";

class CoinList extends React.Component {
  state = {
    currency: "USD",
    data: [],
    orderList: "market_cap_desc",
  };

  getCoinList = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.state.currency}&order=${this.state.orderList}&per_page=20&page=1&sparkline=true`
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
        <table style={{ padding: "10px" }}>
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
              <td>
                {Math.round((item.price_change_percentage_24h / 24) * 100) /
                  100}
                %
              </td>
              <td>
                {Math.round(item.price_change_percentage_24h * 100) / 100}%
              </td>
              <td>7 days %</td>
              <td>
                {Math.round((item.market_cap_change_24h / 1000000000) * 100) /
                  100}
                B<span> / </span>
                {Math.round((item.market_cap / 1000000000) * 100) / 100}B
              </td>
              <td>
                {Math.round((item.circulating_supply / 1000000000) * 100) / 100}
                B<span> / </span>
                {Math.round((item.total_supply / 1000000000) * 100) / 100}B
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
export default CoinList;
