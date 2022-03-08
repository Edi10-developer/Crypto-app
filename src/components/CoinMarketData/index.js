import { ListContainer, StyledDataSpan, Plus, DataStyled } from "./styles";
import { Progressbar } from "components/exports";
import { nFormatter } from "utils/nFormatter";

const CoinMarketData = (props) => {
  const { icon, currency } = props;
  const { market_data, symbol } = props.data;
  return (
    <ListContainer>
      <li>
        <Plus />
        Market cap:{" "}
        <StyledDataSpan>
          {icon}&nbsp;
          {nFormatter(market_data.market_cap[currency])}
        </StyledDataSpan>
      </li>
      <li>
        <Plus /> Fully Diliuted Valuation:
        <StyledDataSpan>
          {" "}
          {icon}&nbsp;
          {nFormatter(market_data.fully_diluted_valuation[currency])}
        </StyledDataSpan>
      </li>
      <li>
        <Plus /> Volume 24h:
        <StyledDataSpan>
          {" "}
          {icon}&nbsp;
          {nFormatter(market_data.market_cap_change_24h_in_currency[currency])}
        </StyledDataSpan>
      </li>
      <li>
        <Plus />
        Volume / Market:{" "}
        <StyledDataSpan>
          {market_data.market_cap_change_24h_in_currency[currency] /
            market_data.market_cap[currency]}
        </StyledDataSpan>
      </li>
      <li>
        <br />
      </li>
      <li>
        <Plus /> Total Volume:{" "}
        <StyledDataSpan>
          {market_data.total_supply}&nbsp;{symbol.toUpperCase()}
        </StyledDataSpan>
      </li>
      <li>
        <Plus /> Circulating Supply:{" "}
        <StyledDataSpan>
          {market_data.circulating_supply}&nbsp;{symbol.toUpperCase()}
        </StyledDataSpan>
      </li>
      <li>
        <Plus /> Max Supply:{" "}
        <StyledDataSpan>
          {market_data.max_supply}&nbsp;{symbol.toUpperCase()}
        </StyledDataSpan>
      </li>
      <li>
        <DataStyled>
          <span>
            {Math.round(
              (market_data.circulating_supply * 100) / market_data.max_supply
            )}
            %
          </span>
          <span>
            {100 -
              Math.round(
                (market_data.circulating_supply * 100) / market_data.max_supply
              )}{" "}
            %
          </span>
        </DataStyled>
        {/*
       <Progressbar
          percent={(circulatingSupply * 100) / maxSupply}
          unfilledBackground={"white"}
          filledBackground={"#215DB5"}
          width={"230px"}
        />
       */}
      </li>
    </ListContainer>
  );
};

export default CoinMarketData;
