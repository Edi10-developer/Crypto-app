import React from "react";
import { Row, Column, TableData, IconCoin, GreenBall } from "./styles";
import { LineChart, Progressbar } from "../exports";
import { ColorExtractor } from "react-color-extractor";
import { SparkLine } from "../Charts/exports";
import { Line } from "react-chartjs-2";

class Table extends React.Component {
  state = { colors: [], isNegative: true };

  renderSwatches = () => {
    const { colors } = this.state;

    return colors.map((color, id) => {
      return (
        <div
          key={id}
          style={{
            color: color,
          }}
        />
      );
    });
  };
  checkIsNegative = (number) => {
    if (number < 0) {
      return true;
    } else {
      return false;
    }
  };

  getColors = (colors) =>
    this.setState((state) => ({ colors: [...state.colors, ...colors] }));

  render() {
    return (
      <div
        style={{
          margin: "0 auto",
        }}
      >
        <TableData>
          <Row>
            <Column>#</Column>
            <Column>Name</Column>
            <Column>Price</Column>
            <Column>
              <span>1h %</span>
            </Column>
            <Column>
              <span>24h %</span>
            </Column>
            <Column>
              <span>7d %</span>
            </Column>
            <Column>24h Volume/Market Cap</Column>
            <Column>Circulating/Total Supply</Column>
            <Column>
              Last7days <GreenBall />
            </Column>
          </Row>
          {this.props.data.map(
            (
              {
                image,
                id,
                current_price,
                price_change_percentage_1h_in_currency,
                price_change_percentage_24h,
                price_change_percentage_7d_in_currency,
                market_cap_change_24h,
                market_cap,
                circulating_supply,
                total_supply,
                sparkline_in_7d,
                total_volume,
              },
              index
            ) => (
              <Row>
                <Column>{index + 1}</Column>
                <Column>
                  <p>
                    {" "}
                    <ColorExtractor getColors={this.getColors}>
                      <img src={image} alt={id} />
                    </ColorExtractor>
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </p>
                </Column>
                <Column>
                  {current_price}&nbsp;
                  {this.props.currency}
                </Column>
                <Column
                  isNegative={this.checkIsNegative(
                    price_change_percentage_1h_in_currency
                  )}
                >
                  {Math.round(price_change_percentage_1h_in_currency * 100) /
                    100}
                  %
                </Column>
                <Column
                  isNegative={this.checkIsNegative(price_change_percentage_24h)}
                >
                  {Math.round(price_change_percentage_24h * 100) / 100}%
                </Column>
                <Column
                  isNegative={this.checkIsNegative(
                    price_change_percentage_7d_in_currency
                  )}
                >
                  {" "}
                  {Math.round(price_change_percentage_7d_in_currency * 100) /
                    100}
                  %
                </Column>
                <Column>
                  <p style={{ color: this.state.color }}>
                    {" "}
                    {this.renderSwatches()}
                    {Math.round((total_volume / 1000000000) * 100) / 100}B
                    &nbsp;&nbsp; &nbsp;&nbsp;
                    {Math.round((market_cap / 1000000000) * 100) / 100}B
                  </p>
                  <Progressbar
                    percent={(market_cap_change_24h * 100) / market_cap}
                    width="100px"
                    unfilledBackground={this.state.colors}
                    filledBackground={this.state.colors}
                  />
                </Column>
                <Column>
                  {this.renderSwatches()}
                  <p>
                    {" "}
                    {Math.round((circulating_supply / 1000000000) * 100) / 100}B
                    &nbsp;&nbsp; &nbsp;&nbsp;
                    {Math.round((total_supply / 1000000000) * 100) / 100}B
                  </p>
                  <Progressbar
                    percent={(circulating_supply * 100) / total_supply}
                    width="100px"
                  />
                </Column>
                <Column>
                  {" "}
                  <SparkLine
                    price={sparkline_in_7d.price}
                    coinName={id}
                    weekPercentageResult={
                      price_change_percentage_7d_in_currency
                    }
                  />
                </Column>
              </Row>
            )
          )}
        </TableData>
      </div>
    );
  }
}

export default Table;
