import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import {
  PageContainer,
  Row,
  Column,
  CoinImage,
  UpArrow,
  DownArrow,
  ImageContainer,
  LinkStyled,
  DateSpan,
  StyledSpan,
  Plus,
} from "./styles";
import { ThemeProvider } from "styled-components";
import { Progressbar } from "components/exports";

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
        coinSymbol: coinData.data.symbol.toUpperCase(),
        coinLink: coinData.data.links.homepage[0],
        coinDescription: coinData.data.description.en,
        coinPrice: `${
          props.currency === "USD"
            ? coinData.data.market_data.current_price.usd
            : coinData.data.market_data.current_price.eur
        }`,
        coinATH: `${
          props.currency === "USD"
            ? coinData.data.market_data.ath.usd
            : coinData.data.market_data.ath.eur
        }`,
        coinATL: `${
          props.currency === "USD"
            ? coinData.data.market_data.atl.usd
            : coinData.data.market_data.atl.eur
        }`,
        coinATLDate: `${
          props.currency === "USD"
            ? moment(coinData.data.market_data.atl_date.usd).format(
                "DD, MMM, YYYY, HH:mm:ss"
              )
            : moment(coinData.data.market_data.atl_date.eur).format(
                "DD, MMM, YYYY, HH:mm:ss"
              )
        }`,
        coinATHDate: `${
          props.currency === "USD"
            ? moment(coinData.data.market_data.ath_date.usd).format(
                "DD, MMM, YYYY, HH:mm:ss"
              )
            : moment(coinData.data.market_data.ath_date.eur).format(
                "DD, MMM, YYYY, HH:mm:ss"
              )
        }`,
        marketChangePercentage24h:
          coinData.data.market_data.market_cap_change_percentage_24h,

        priceChange24h: `${
          props.currency === "USD"
            ? coinData.data.market_data.price_change_24h_in_currency.usd
            : coinData.data.market_data.price_change_24h_in_currency.eur
        }`,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const checkIsNegative = (number) => {
    if (number < 0) {
      return true;
    } else {
      return false;
    }
  };

  const arrowValueChange = (number) => {
    if (number < 0) {
      return <DownArrow />;
    } else {
      return <UpArrow />;
    }
  };

  const formattName = (name) => name.charAt(0).toUpperCase() + name.slice(1);

  useEffect(() => {
    getCoinData();
  }, [data]);

  //console.log(data.data);
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
                {formattName(`${data.coinId}`)} &nbsp; ({data.coinSymbol})
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
              {data.coinPrice}&nbsp;
              {props.icon}{" "}
              <StyledSpan
                isNegative={checkIsNegative(data.marketChangePercentage24h)}
              >
                {arrowValueChange(data.marketChangePercentage24h)}{" "}
                {Math.round(data.marketChangePercentage24h * 10) / 10} %
              </StyledSpan>
            </h2>
            <p>
              Profit:{" "}
              <StyledSpan isNegative={checkIsNegative(data.priceChange24h)}>
                {" "}
                {data.priceChange24h}&nbsp;
                {props.icon}
              </StyledSpan>
            </p>
            <div>
              <p>
                <UpArrow />
                All Time High: {data.coinATH}&nbsp;
                {props.icon}
                <br />
                <DateSpan>{data.coinATHDate} GMT</DateSpan>
              </p>

              <p>
                <DownArrow />
                All Time Low: {data.coinATL}&nbsp;
                {props.icon}
                <br />
                <DateSpan>{data.coinATLDate} GMT</DateSpan>
              </p>
            </div>
          </Column>
          <Column>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <Plus />
                Market cap:
              </li>
              <li>
                <Plus /> Fully Diliuted Valuation:
              </li>
              <li>
                <Plus /> Volume 24h:
              </li>
              <li>
                <Plus />
                Volume / Market:
              </li>
              <li>.</li>
              <li>
                <Plus /> Total Volume:
              </li>
              <li>
                <Plus /> Circulating Supply:
              </li>
              <li>
                <Plus /> Max Supply:
              </li>
              <li>
                <Progressbar
                  percent={data.priceChange24h}
                  unfilledBackground={"white"}
                  filledBackground={"#215DB5"}
                  width={"60px"}
                />
              </li>
            </ul>
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
