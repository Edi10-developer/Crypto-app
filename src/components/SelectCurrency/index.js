import React from "react";
import { ThemeProvider } from "styled-components";
import { SelectStyled, OptionStyled } from "./styles";

const SelectCurrency = (props) => {
  const selectNewCurrency = (e) => {
    props.updateCurrency(e);
  };
  const { currency, currencies, theme } = props.data;
  return (
    <ThemeProvider theme={theme}>
      <SelectStyled onChange={selectNewCurrency} currency={currency}>
        {currencies.map((element, index) => (
          <option key={index} value={element.value} id={element.icon}>
            {element.icon} - {element.value}
          </option>
        ))}
      </SelectStyled>
    </ThemeProvider>
  );
};

export default SelectCurrency;
