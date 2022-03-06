import { Row, Column } from "./styles";
import { ColorExtractor } from "react-color-extractor";
import { nFormatter } from "utils/nFormatter";
import { Progressbar } from "components/exports";
import { SparkLine } from "components/Charts/exports";

const TableRow = (props) => {
  {
    /*
const RenderSwatches = () => {
     getColors = (colors) =>
    this.setState((state) => ({ colors: [...state.colors, ...colors] }));
    
    const { colors, setColors } = useState(["red", "green"]);
    return colors.map((color, id) => {
      return (
        <div
          key={id}
          style={{
            color: color,
          }}
        />
      );
    });
  };
 */
  }

  const {
    image,
    id,
    current_price,
    price_change_percentage_1h_in_currency,
    price_change_percentage_24h,
    price_change_percentage_7d_in_currency,
    market_cap_change_24h,
    market_cap_change_percentage_24h,
    circulating_supply,
    total_supply,
    market_cap,
    sparkline_in_7d,
    icon,
    checkIsNegative,
    arrowValueChange,
  } = props;

  return (
    <Row>
      <Column>{props.index + 1}</Column>
      <Column>
        <p>
          {/* <ColorExtractor getColors={this.getColors}>
              <img src={image} alt={id} />
            </ColorExtractor> */}
          <img src={image} alt={id} />
          {`${id.charAt(0).toUpperCase() + id.slice(1)}`}
        </p>
      </Column>
      <Column>
        {current_price}&nbsp;
        {icon}
      </Column>
      <Column
        isNegative={checkIsNegative(price_change_percentage_1h_in_currency)}
      >
        <p>
          {" "}
          {arrowValueChange(price_change_percentage_1h_in_currency)}
          &nbsp;
          {Math.round(price_change_percentage_1h_in_currency * 100) / 100}%
        </p>
      </Column>
      <Column isNegative={checkIsNegative(price_change_percentage_24h)}>
        <p>
          {" "}
          {arrowValueChange(price_change_percentage_24h)}
          &nbsp;
          {Math.round(price_change_percentage_24h * 100) / 100}%
        </p>
      </Column>
      <Column
        isNegative={checkIsNegative(price_change_percentage_7d_in_currency)}
      >
        <p>
          {" "}
          {arrowValueChange(price_change_percentage_7d_in_currency)}
          &nbsp;
          {Math.round(price_change_percentage_7d_in_currency * 100) / 100}%
        </p>
      </Column>
      <Column>
        {/* <p style={{ color: this.state.color }}> {this.renderSwatches()} </p> */}
        <p>
          {nFormatter(market_cap_change_24h)}
          &nbsp;&nbsp; &nbsp;&nbsp;
          {nFormatter(market_cap)}
        </p>
        <Progressbar
          percent={market_cap_change_percentage_24h}
          width="100px"
          unfilledBackground={"#FFFFF9"}
          filledBackground={"#215DB5"}
        />
      </Column>
      <Column>
        {/* <p style={{ color: this.state.color }}> {this.renderSwatches()} </p> */}{" "}
        <p>
          {nFormatter(circulating_supply)}
          &nbsp;&nbsp; &nbsp;&nbsp;
          {nFormatter(total_supply)}
        </p>
        <Progressbar
          percent={(circulating_supply * 100) / total_supply}
          width="100px"
          unfilledBackground={"white"}
          filledBackground={"#215DB5"}
        />
      </Column>
      <Column>
        <SparkLine
          price={sparkline_in_7d.price}
          coinName={id}
          weekPercentageResult={price_change_percentage_7d_in_currency}
        />
      </Column>
    </Row>
  );
};

export default TableRow;
