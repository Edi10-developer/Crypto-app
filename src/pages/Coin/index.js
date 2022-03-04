import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  PageContainer,
  Row,
  Column,
  CoinImage,
  UpArrow,
  DownArrow,
  ImageContainer,
  LinkStyled,
} from "./styles";
import { ThemeProvider } from "styled-components";

const Coin = (props) => {
  const coinId =
    window.location.pathname.charAt(7) + window.location.pathname.slice(8);

  const baseUrl = process.env.REACT_APP_ENDPOINT;

  const [coinName, updateCoinName] = useState(coinId);
  const [data, setData] = useState({});

  const getCoinData = async () => {
    try {
      const coinData = await axios.get(
        `${baseUrl}/coins/${coinName}?tickers=true`
      );

      setData({
        data: coinData.data,
        coinImg: coinData.data.image.small,
        coinId: coinData.data.id,
        coinSymbol: coinData.data.symbol,
        coinLink: coinData.data.links.homepage[0],
        coinDescription: coinData.data.description.en,
        coinPrice: `${
          props.currency === "USD"
            ? coinData.data.market_data.current_price.usd
            : coinData.data.market_data.current_price.eur
        }`,

        coinPriceEuro: coinData.data.market_data.current_price.eur,
        coinATH: coinData.data.market_data.ath.usd,

        coinATL: `${
          props.currency === "USD"
            ? coinData.data.market_data.atl.usd
            : coinData.data.market_data.atl.eur
        }`,

        coinATLDate: coinData.data.market_data.atl_date.usd,
        coinATHDate: coinData.data.market_data.ath_date.usd,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const formattName = (name) => name.charAt(0).toUpperCase() + name.slice(1);

  useEffect(() => {
    getCoinData();
  }, [data]);

  ////console.log(data);
  return (
    <ThemeProvider theme={props.theme}>
      <PageContainer>
        <h3>Your summary</h3>
        <Row>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Column>
              <Column>
                <ImageContainer>
                  <CoinImage src={data.coinImg} alt={data.coinId} />
                </ImageContainer>
                {formattName(`${data.coinId}`)}`${data.coinSymbol}
                .toUpperCase()`)
              </Column>
            </Column>
            <Column>
              <div>
                <LinkStyled href={data.coinLink}>{data.coinLink}</LinkStyled>
              </div>
            </Column>
          </div>

          <Column>
            <h2>
              {data.coinPrice}
              {props.icon}
            </h2>
            <p>Profit: 7777</p>
            <div>
              <p>
                <UpArrow />
                All Time High: {data.coinATH}
              </p>
              <p>{data.coinATHDate}</p>

              <p>
                <DownArrow />
                All Time Low: {data.coinATL}
              </p>
              <p>{data.coinATLDate}</p>
            </div>
          </Column>
          <Column>
            <h3>
              {data.coinPriceUsd}
              {props.icon}
            </h3>
            <p>Profit: 7777</p>
            <div>
              <p>
                <UpArrow />
                All Time High: {data.coinATH}
              </p>
              <p>{data.coinATHDate}</p>

              <p>
                <DownArrow />
                All Time Low: {data.coinATL}
              </p>
              <p>{data.coinATLDate}</p>
            </div>
          </Column>
        </Row>
        <h3>Description</h3>
        <Row>
          <Column>
            <p>{data.coinDescription}</p>
          </Column>
        </Row>
      </PageContainer>
    </ThemeProvider>
  );
};

export default Coin;
