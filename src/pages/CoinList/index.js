import React from "react";
import axios from "axios";
import { LineChart, BarChart, Table } from "../../components/exports";

import { Container, ChartsContainer, ChartContainer } from "./styles";

class CoinList extends React.Component {
  state = {
    currency: "USD",
    data: [],
    orderList: "market_cap_desc",
    btc: [],
    days: 7,
  };

  corsProblemFixer = "https://cors-anywhere.herokuapp.com/";

  getBitcoinData = async () => {
    try {
      const btcData = await axios.get(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${this.state.currency}&days=${this.state.days}`
      );
      this.setState({ btc: btcData.data });
    } catch (err) {
      console.log(err);
    }
  };

  getCoinList = async () => {
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.state.currency}&order=${this.state.orderList}&per_page=5&page=1&sparkline=true&price_change_percentage=1h,24h,7d`
      );
      this.setState({ data: data });
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount() {
    this.getCoinList();
    this.getBitcoinData();
  }
  render() {
    console.log(this.state.btc.prices);
    return (
      <Container>
        <div
          style={{
            width: "1100px",
            border: "1px solid blue",
            margin: "0px auto",
          }}
        >
          <h4>Your overview</h4>
          <ChartsContainer>
            <ChartContainer>
              <LineChart
                data={{
                  labels: ["", "", "", "", "", "", ""],
                  datasets: [
                    {
                      label: "BTC",
                      data: this.state.btc.prices,
                      borderColor: "#568E2B",
                      backgroundColor: "#568E2B",
                      pointBackgroundColor: "transparent",
                      pointBorderColor: "transparent",
                      tension: 0.5,
                    },
                  ],
                }}
                options={{
                  layout: {
                    padding: {
                      top: 100,
                    },
                  },

                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  animation: {
                    duration: 2000,
                  },
                  maintainAspectRatio: false,
                  responsive: true,
                  scales: {
                    y: {
                      display: false,
                    },
                    x: {
                      grid: {
                        color: "transparent",
                      },
                      ticks: {
                        font: {
                          size: 12,
                        },
                        maxRotation: 0,
                        minRotation: 0,
                      },
                    },
                  },
                }}
              />
            </ChartContainer>
            <ChartContainer>
              <BarChart totalVolumes={this.state.btc.total_volumes} />{" "}
            </ChartContainer>
          </ChartsContainer>
          <h4>Your overview</h4>
          <Table data={this.state.data} currency={this.state.currency} />
        </div>
      </Container>
    );
  }
}
export default CoinList;
