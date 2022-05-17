import React, { useState, useEffect } from "react";
import { Progressbar } from "components/exports";
import { Container, CoinImg } from "./styles";
import { nFormatter } from "utils/nFormatter";

import { connect } from "react-redux";
import { getData } from "store/globalCoinsData/actions";

const CoinsDataBar = (props) => {
  const { todayTotalMarketCap } = props;
  const {
    active_cryptocurrencies,
    markets,
    currencyIcon,
    total_volume,
    market_cap_percentage,
    market_cap_change_percentage_24h_usd,
  } = props.data.globalCoinsData;

  useEffect(() => {
    props.getData();
  }, []);

  return (
    <Container>
      {props.data.globalCoinsData.length !== 0 && (
        <>
          <li>Coins: {active_cryptocurrencies}</li>
          <li>Exchange: {markets}</li>{" "}
          <li>
            •{currencyIcon}
            {nFormatter(total_volume.usd)}
          </li>
          <li>
            {currencyIcon}
            <span>{Math.round(market_cap_change_percentage_24h_usd)} % </span>
            <Progressbar
              percent={market_cap_change_percentage_24h_usd}
              unfilledBackground={"white"}
              filledBackground={"#215DB5"}
              width={"60px"}
            />
          </li>
          <li>
            <CoinImg
              src={
                "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
              }
              alt={"bitcoin"}
            />{" "}
            <span>{Math.round(market_cap_percentage.btc)}%</span>
            <Progressbar
              percent={market_cap_percentage.btc}
              unfilledBackground={"white"}
              filledBackground={"#215DB5"}
              width={"60px"}
            />
          </li>
          <li>
            <CoinImg
              src={
                "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
              }
              alt={"etherium"}
            />
            <span>{Math.round(market_cap_percentage.eth)}%</span>
            <Progressbar
              percent={market_cap_percentage.eth}
              unfilledBackground={"white"}
              filledBackground={"#215DB5"}
              width={"60px"}
            />
          </li>
        </>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  data: state.globalCoinsData,
});
const mapDispatchToProps = {
  getData,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinsDataBar);
