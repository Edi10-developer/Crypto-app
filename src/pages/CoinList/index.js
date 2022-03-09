import React, { useState } from "react";
import { LineChart, BarChart } from "components/Charts/exports";
import { SelectDays, Table } from "components/exports";
import {
  PageContainer,
  MainContainer,
  ChartsContainer,
  ChartContainer,
  CoinDataContainer,
  GradientChart,
} from "./styles";

import { currentDate } from "utils/date.js";
import { nFormatter } from "utils/nFormatter";
import { ThemeProvider } from "styled-components";

const CoinList = ({ dataCoinList, data, updateDays }) => {
  const [sortedDesc, setSortDesc] = useState(true);
  const setDays = (daysNumber) => updateDays(daysNumber);

  const sortByAscOrDesc = () => {
    if (sortedDesc === true) {
      let sortedAsceding = data.sort((a, b) => {
        return a.market_cap - b.market_cap;
      });
      setSortDesc(false);
      return sortedAsceding;
    } else if (sortedDesc === false) {
      let sortedDesceding = data.sort((a, b) => {
        return b.market_cap - a.market_cap;
      });
      setSortDesc(true);
      return sortedDesceding;
    }
  };

  const {
    btcCurrentPrice,
    coinPrice,
    icon,
    coinTimestamp,
    btcCurrentVolume,
    coinVolumes,
    daysOptions,
    theme,
  } = dataCoinList;
  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <MainContainer>
          <h4>Your overview</h4>
          <ChartsContainer>
            <ChartContainer>
              <CoinDataContainer>
                <h6>BTC</h6>
                <h2>
                  {btcCurrentPrice}&nbsp;
                  {icon}
                </h2>
                <h6>{currentDate}</h6>
              </CoinDataContainer>
              <LineChart
                coinPrice={coinPrice}
                coinTimestamp={coinTimestamp}
                borderColor={theme.positiveData}
                pointBackgroundColor={"transparent"}
                pointBorderColor={"transparent"}
                backgroundColor={"red"}
                gradient={GradientChart}
                displayTicks={true}
              />
            </ChartContainer>
            <ChartContainer>
              <CoinDataContainer>
                <h6>Volume 24H</h6>
                <h2>{nFormatter(btcCurrentVolume)}</h2>
                <h6>{currentDate}</h6>
              </CoinDataContainer>
              <BarChart
                coinTotalVolumes={coinVolumes}
                coinTimestamp={coinTimestamp}
                width={300}
              />
            </ChartContainer>
          </ChartsContainer>
          <SelectDays
            days={daysOptions}
            selectNumberOfDays={(number) => setDays(number)}
            theme={theme}
          />
          <h4>Your overview</h4>
          <Table
            data={data}
            icon={icon}
            orderList={sortedDesc}
            orderCoinList={sortByAscOrDesc}
            theme={theme}
          />
        </MainContainer>
      </PageContainer>
    </ThemeProvider>
  );
};

export default CoinList;
