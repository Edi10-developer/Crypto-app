import React, { useState } from "react";
import { Row, Column, CopyIcon } from "./styles";
import {
  CoinImageContainer,
  CoinPriceHistory,
  CoinMarketData,
  CoinDescription,
  CoinLink,
} from "components/exports";
import { ThemeProvider } from "styled-components";

const CoinSummary = ({
  data,
  icon,
  theme,
  currency,
  checkIsNegative,
  arrowValueChange,
}) => {
  const [text, setText] = useState("");
  const copy = async () => {
    await navigator.clipboard.writeText(text);
    alert("Link copied");
  };

  const coinSummaryHTML = Object.entries(data).length > 0 && (
    <ThemeProvider theme={theme}>
      <h3>Your summary</h3>
      <Row>
        <Column>
          <Column>
            <CoinImageContainer data={data.data} />
          </Column>
          <Column>
            <Row>
              <CoinLink link={data.data.links.homepage[0]} />
            </Row>
          </Column>
        </Column>
        <Column>
          <CoinPriceHistory
            icon={icon}
            currency={currency}
            data={data.data}
            checkIsNegative={checkIsNegative}
            arrowValueChange={arrowValueChange}
          />
        </Column>
        <Column>
          <CoinMarketData icon={icon} data={data.data} currency={currency} />
        </Column>
      </Row>
      <h3>Description</h3>
      <Row>
        <CoinDescription description={data.data.description.en} />
      </Row>

      <Row>
        <Column>
          <Row>
            <CoinLink
              handleClick={copy}
              link={data.data.links.blockchain_site[0]}
            />
            <CopyIcon />
          </Row>
        </Column>
        <Column>
          <Row>
            {data.data.links.official_forum_url[0] !== "" && (
              <>
                <CoinLink
                  handleClick={copy}
                  link={data.data.links.official_forum_url[0]}
                />
                <CopyIcon />
              </>
            )}
          </Row>
        </Column>
        <Column>
          <Row>
            {data.data.links.blockchain_site[2] !== "" && (
              <>
                <CoinLink
                  handleClick={copy}
                  link={data.data.links.blockchain_site[2]}
                />
                <CopyIcon />
              </>
            )}
          </Row>
        </Column>
      </Row>
    </ThemeProvider>
  );

  return <>{coinSummaryHTML}</>;
};

export default CoinSummary;
