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

const CoinSummary = (props) => {
  const {
    coinLink,
    coinBlockchainLink,
    coinBlockchainViewLink,
    coinForumLink,
    coinDescription,
  } = props.data;

  const [text, setText] = useState("");
  const copy = async () => {
    await navigator.clipboard.writeText(text);
    alert("Link copied");
  };

  return (
    <ThemeProvider theme={props.theme}>
      <h3>Your summary</h3>
      <Row>
        <Column>
          <Column>
            <CoinImageContainer data={props.data} icon={props.icon} />
          </Column>
          <Column>
            <Row>
              <CoinLink link={coinLink} />
            </Row>
          </Column>
        </Column>
        <Column>
          <CoinPriceHistory
            icon={props.icon}
            data={props.data}
            checkIsNegative={props.checkIsNegative}
            arrowValueChange={props.arrowValueChange}
          />
        </Column>
        <Column>
          <CoinMarketData icon={props.icon} data={props.data} />
        </Column>
      </Row>
      <h3>Description</h3>
      <Row>
        <Column>
          <CoinDescription description={coinDescription} />
        </Column>
      </Row>
      <Row>
        <Column>
          <Row>
            <CoinLink handleClick={copy} link={coinBlockchainLink} />
            <CopyIcon />
          </Row>
        </Column>

        <Column>
          <Row>
            {coinForumLink !== "" && (
              <>
                <CoinLink handleClick={copy} link={coinForumLink} />
                <CopyIcon />
              </>
            )}
          </Row>
        </Column>
        <Column>
          <Row>
            {coinBlockchainViewLink !== "" && (
              <>
                <CoinLink handleClick={copy} link={coinBlockchainViewLink} />
                <CopyIcon />
              </>
            )}
          </Row>
        </Column>
      </Row>
    </ThemeProvider>
  );
};

export default CoinSummary;
