import { ListContainer, StyledDataSpan, Plus } from "./styles";
import { Progressbar } from "components/exports";
import { nFormatter } from "utils/nFormatter";

const CoinMarketData = (props) => {
  const {
    marketCap,
    fullyDilutedValuation,
    marketVolume24h,
    totalVolume,
    circulatingSupply,
    coinSymbol,
    maxSupply,
  } = props.data;

  const { icon } = props;
  return (
    <ListContainer>
      <li>
        <Plus />
        Market cap:{" "}
        <StyledDataSpan>
          {icon}&nbsp;
          {nFormatter(marketCap)}
        </StyledDataSpan>
      </li>
      <li>
        <Plus /> Fully Diliuted Valuation:
        <StyledDataSpan>
          {" "}
          {icon}&nbsp;
          {nFormatter(fullyDilutedValuation)}
        </StyledDataSpan>
      </li>
      <li>
        <Plus /> Volume 24h:
        <StyledDataSpan>
          {" "}
          {icon}&nbsp;
          {nFormatter(marketVolume24h)}
        </StyledDataSpan>
      </li>
      <li>
        <Plus />
        Volume / Market:{" "}
        <StyledDataSpan>{marketVolume24h / marketCap}</StyledDataSpan>
      </li>
      <li>
        <br />
      </li>
      <li>
        <Plus /> Total Volume:{" "}
        <StyledDataSpan>
          {totalVolume}&nbsp;{coinSymbol}
        </StyledDataSpan>
      </li>
      <li>
        <Plus /> Circulating Supply:{" "}
        <StyledDataSpan>
          {circulatingSupply}&nbsp;{coinSymbol}
        </StyledDataSpan>
      </li>
      <li>
        <Plus /> Max Supply:{" "}
        <StyledDataSpan>
          {maxSupply}&nbsp;{coinSymbol}
        </StyledDataSpan>
      </li>
      <li>
        <p>30% 94%</p>
        <Progressbar
          percent={30}
          unfilledBackground={"white"}
          filledBackground={"#215DB5"}
          width={"230px"}
        />
      </li>
    </ListContainer>
  );
};

export default CoinMarketData;
