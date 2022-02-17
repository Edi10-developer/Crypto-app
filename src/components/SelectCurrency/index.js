import { render } from "@testing-library/react";
import React from "react";
import { SelectStyled } from "./styles";

class SelectCurrency extends React.Component {
  state = { currency: this.props.currency };

  selectNewCurrency = (e) => {
    this.props.updateCurrency(e);
  };
  render() {
    return (
      <SelectStyled
        onChange={this.selectNewCurrency}
        currency={this.state.currency}
      >
        {this.props.currencies.map((element, index) => (
          <option key={index} value={element}>
            {element}
          </option>
        ))}
      </SelectStyled>
    );
  }
}

export default SelectCurrency;
