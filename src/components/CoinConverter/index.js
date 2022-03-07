import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, InputContainer, ButtonStyled, SwitchIcon } from "./styles";

const CoinConverter = (props) => {
  const [currentValue, updateCurrentValue] = useState({});
  const { currency, coinSymbol, coin, currencyIcon } = props;

  const switchCurrencyCoin = () => {};

  const baseUrl = process.env.REACT_APP_ENDPOINT;

  const convert = async (e) => {
    const convertNumber = e.target.value;
    try {
      const data = await axios(
        `${baseUrl}/simple/price?ids=${coin}&vs_currencies=${currency}`
      );
      const x = Object.entries(data.data)[0];
      const y =
        currency === "USD"
          ? convertNumber * x[1].usd
          : convertNumber * x[1].eur;
      updateCurrentValue(y);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <InputContainer>
        <ButtonStyled>{coinSymbol}</ButtonStyled>
        <input type="number" onChange={convert} placeholder={coinSymbol} />
      </InputContainer>
      <SwitchIcon onClick={switchCurrencyCoin} />
      <InputContainer>
        <ButtonStyled>{currency}</ButtonStyled>
        <input type="number" value={currentValue} placeholder={currencyIcon} />
      </InputContainer>
    </Container>
  );
};

export default CoinConverter;
