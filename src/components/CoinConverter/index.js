import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, InputContainer, ButtonStyled, SwitchIcon } from "./styles";

const CoinConverter = ({ currency, coin, currencyIcon, dataCoin, symbol }) => {
  const [data, setData] = useState({});
  const [currencyValue, updateCurrencyValue] = useState({});
  const [coinValue, updateCoinValue] = useState();
  const [switched, setSwitched] = useState(false);

  const switchCurrencyCoin = () => {
    switched === false ? setSwitched(true) : setSwitched(false);
    updateCurrencyValue(0);
    updateCoinValue(0);
  };
  const baseUrl = process.env.REACT_APP_ENDPOINT;

  const convertCoin = (e) => {
    const convertNumber = e.target.value;
    const coinArray = Object.entries(data)[0];
    const currencyObject = coinArray[1];
    const result = currencyObject[currency.toLowerCase()] * convertNumber;
    updateCurrencyValue(result);
  };

  const convertCurrency = (e) => {
    const convertNumber = e.target.value;
    const coinArray = Object.entries(data)[0];
    const currencyObject = coinArray[1];
    const coinCurrencyValue = currencyObject[currency.toLowerCase()];
    const result = convertNumber / coinCurrencyValue;
    updateCoinValue(result);
  };

  useEffect(async () => {
    try {
      const data = await axios(
        `${baseUrl}/simple/price?ids=${coin}&vs_currencies=${currency}`
      );
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  }, [currencyValue, coinValue, currency]);

  return (
    <Container>
      {switched === false ? (
        <>
          <InputContainer>
            <ButtonStyled>{symbol}</ButtonStyled>
            <input type="number" onChange={convertCoin} placeholder={symbol} />
          </InputContainer>
          <SwitchIcon onClick={switchCurrencyCoin} />
          <InputContainer>
            <ButtonStyled>{currency}</ButtonStyled>
            <input
              type="number"
              placeholder={currencyIcon}
              onChange={convertCurrency}
              value={currencyValue}
            />
          </InputContainer>
        </>
      ) : (
        <>
          <InputContainer>
            <ButtonStyled>{currency}</ButtonStyled>
            <input
              type="number"
              placeholder={currencyIcon}
              onChange={convertCurrency}
            />
          </InputContainer>
          <SwitchIcon onClick={switchCurrencyCoin} />
          <InputContainer>
            <ButtonStyled>{symbol}</ButtonStyled>
            <input
              type="number"
              onChange={convertCoin}
              placeholder={symbol}
              value={coinValue}
            />
          </InputContainer>
        </>
      )}
    </Container>
  );
};

export default CoinConverter;
