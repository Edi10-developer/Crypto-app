import React from "react";
import { Row, Column, TableData, GreenBall, arrowStyled } from "./styles";
import { Progressbar } from "../exports";
import { ColorExtractor } from "react-color-extractor";
import { SparkLine } from "../Charts/exports";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { nFormatter } from "../../utils/nFormatter";

class Table extends React.Component {
  state = {
    colors: [],
    isNegative: true,
    oderList: this.props.oderList,
    icon: this.props.icon,
  };

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

  arrowValueChange = (number) => {
    if (number < 0) {
      return <TiArrowSortedDown style={arrowStyled} />;
    } else {
      return <TiArrowSortedUp style={arrowStyled} />;
    }
  };

  arrowSort = (sortedDesc) => {
    if (sortedDesc === true) {
      return <button onClick={this.props.orderCoinList}></button>;
    } else {
      return (
        <button onClick={this.props.orderCoinList}>
          <TiArrowSortedDown />
        </button>
      );
    }
  };

  getColors = (colors) =>
    this.setState((state) => ({ colors: [...state.colors, ...colors] }));

  render() {
    return (
      <TableData>
        <Row>
          <Column>#</Column>
          <Column>
            <p>
              Name{" "}
              <span onClick={this.props.orderCoinList}>
                {this.props.orderList === true ? (
                  <TiArrowSortedDown style={arrowStyled} />
                ) : (
                  <TiArrowSortedUp style={arrowStyled} />
                )}
              </span>
            </p>
          </Column>
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
              market_cap_change_percentage_24h,
              market_cap,
              circulating_supply,
              total_supply,
              sparkline_in_7d,
            },
            index
          ) => (
            <Row key={index}>
              <Column>{index + 1}</Column>
              <Column>
                <p>
                  {/* <ColorExtractor getColors={this.getColors}>
                      <img src={image} alt={id} />
                    </ColorExtractor> */}
                  <img src={image} alt={id} />
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </p>
              </Column>
              <Column>
                {current_price}&nbsp;
                {this.props.icon}
              </Column>
              <Column
                isNegative={this.checkIsNegative(
                  price_change_percentage_1h_in_currency
                )}
              >
                <p>
                  {" "}
                  {this.arrowValueChange(
                    price_change_percentage_1h_in_currency
                  )}
                  &nbsp;
                  {Math.round(price_change_percentage_1h_in_currency * 100) /
                    100}
                  %
                </p>
              </Column>
              <Column
                isNegative={this.checkIsNegative(price_change_percentage_24h)}
              >
                <p>
                  {" "}
                  {this.arrowValueChange(price_change_percentage_24h)}
                  &nbsp;
                  {Math.round(price_change_percentage_24h * 100) / 100}%
                </p>
              </Column>
              <Column
                isNegative={this.checkIsNegative(
                  price_change_percentage_7d_in_currency
                )}
              >
                <p>
                  {" "}
                  {this.arrowValueChange(
                    price_change_percentage_7d_in_currency
                  )}
                  &nbsp;
                  {Math.round(price_change_percentage_7d_in_currency * 100) /
                    100}
                  %
                </p>
              </Column>
              <Column>
                {/* <p style={{ color: this.state.color }}> {this.renderSwatches()} </p> */}
                <p>
                  {nFormatter(market_cap_change_24h)}
                  &nbsp;&nbsp; &nbsp;&nbsp;
                  {nFormatter(market_cap)}
                </p>
                <Progressbar
                  percent={market_cap_change_percentage_24h}
                  width="100px"
                  unfilledBackground={"white"}
                  filledBackground={"#215DB5"}
                />
              </Column>
              <Column>
                {/* <p style={{ color: this.state.color }}> {this.renderSwatches()} </p> */}{" "}
                <p>
                  {nFormatter(circulating_supply)}
                  &nbsp;&nbsp; &nbsp;&nbsp;
                  {nFormatter(total_supply)}
                </p>
                <Progressbar
                  percent={(circulating_supply * 100) / total_supply}
                  width="100px"
                  unfilledBackground={"white"}
                  filledBackground={"#215DB5"}
                />
              </Column>
              <Column>
                <SparkLine
                  price={sparkline_in_7d.price}
                  coinName={id}
                  weekPercentageResult={price_change_percentage_7d_in_currency}
                />
              </Column>
            </Row>
          )
        )}
      </TableData>
    );
  }
}

export default Table;
