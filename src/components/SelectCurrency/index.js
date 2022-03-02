import React from "react";
import { ThemeProvider } from "styled-components";
import { SelectStyled, OptionStyled } from "./styles";

class SelectCurrency extends React.Component {
  state = { currency: this.props.currency };

  selectNewCurrency = (e) => {
    this.props.updateCurrency(e);
  };
  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <SelectStyled
          onChange={this.selectNewCurrency}
          currency={this.state.currency}
        >
          {this.props.currencies.map((element, index) => (
            <option key={index} value={element.value} id={element.icon}>
              {element.icon} - {element.value}
            </option>
          ))}
        </SelectStyled>
      </ThemeProvider>
    );
  }
}

export default SelectCurrency;
