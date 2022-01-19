import React from "react";
import axios from "axios";
import { LineChart, BarChart, Table } from "../../components/exports";

import { Container, ChartsContainer, ChartContainer } from "./styles";

class CoinList extends React.Component {
  state = {
    currency: "USD",
    data: [],
    orderList: "market_cap_desc",
  };

  getCoinList = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.state.currency}&order=${this.state.orderList}&per_page=5&page=1&sparkline=true&price_change_percentage=1h,24h,7d`
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
      <Container>
        <h4>Your overview</h4>
        <ChartsContainer>
          <ChartContainer>
            <LineChart
              data={{
                labels: ["", "", "", "", "", "", ""],
                datasets: [
                  {
                    label: "BTC",
                    data: this.state.data.map(
                      (item) => item.sparkline_in_7d.price
                    ),
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
            <BarChart
              data={{
                labels: ["", "", "", "", "", "", ""],
                datasets: [
                  {
                    label: "",
                    data: this.state.data.map(
                      (item) => item.sparkline_in_7d.price
                    ),
                    borderColor: "rgb(255, 99, 132)",
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: false,
                  },
                },
                width: "200px",
                height: "100px",
              }}
            />
          </ChartContainer>
        </ChartsContainer>
        <h4>Your overview</h4>
        <Table data={this.state.data} currency={this.state.currency} />
      </Container>
    );
  }
}
export default CoinList;
