import React from "react";
import { Row, TableData, arrowStyled } from "./styles";
import { TableHead, TableRow } from "components/exports";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { ThemeProvider } from "styled-components";

class Table extends React.Component {
  state = {
    isNegative: true,
    orderList: this.props.orderList,
    icon: this.props.icon,
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
      return (
        <button onClick={this.props.orderCoinList}>
          <TiArrowSortedUp />
        </button>
      );
    } else {
      return (
        <button onClick={this.props.orderCoinList}>
          <TiArrowSortedDown />
        </button>
      );
    }
  };

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <TableData>
          <TableHead
            orderCoinList={this.props.orderCoinList}
            orderList={this.props.orderList}
            arrowSort={this.arrowSort}
          />
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
              <TableRow
                key={index}
                index={index}
                image={image}
                id={id}
                current_price={current_price}
                price_change_percentage_1h_in_currency={
                  price_change_percentage_1h_in_currency
                }
                price_change_percentage_24h={price_change_percentage_24h}
                price_change_percentage_7d_in_currency={
                  price_change_percentage_7d_in_currency
                }
                market_cap_change_24h={market_cap_change_24h}
                market_cap={market_cap}
                market_cap_change_percentage_24h={
                  market_cap_change_percentage_24h
                }
                sparkline_in_7d={sparkline_in_7d}
                circulating_supply={circulating_supply}
                total_supply={total_supply}
                key={index}
                data={this.props.data}
                icon={this.props.icon}
                checkIsNegative={this.checkIsNegative}
                arrowValueChange={this.arrowValueChange}
              />
            )
          )}
        </TableData>
      </ThemeProvider>
    );
  }
}

export default Table;
