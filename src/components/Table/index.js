import {
  TableStyled,
  Row,
  Column,
  TableData,
  IconCoin,
  PositiveValue,
  NegativeValue,
} from "./styles";
import { LineChart, Progressbar } from "../exports";

const Table = (props) => (
  <div
    style={{
      margin: "0 auto",
    }}
  >
    <TableData>
      <Row>
        <Column>#</Column>
        <Column>Name</Column>
        <Column>Price</Column>
        <Column>
          <span>1h %</span>
        </Column>
        <Column>
          <span>124h %</span>
        </Column>
        <Column>
          <span>17d %</span>
        </Column>
        <Column>24h Volume/Market Cap</Column>
        <Column>Circulating/Total Supply</Column>
        <Column>Last7days</Column>
      </Row>
      {props.data.map(
        (
          {
            image,
            id,
            current_price,
            price_change_percentage_1h_in_currency,
            price_change_percentage_24h,
            price_change_percentage_7d_in_currency,
            market_cap_change_24h,
            market_cap,
            circulating_supply,
            total_supply,
            sparkline_in_7d,
          },
          index
        ) => (
          <Row>
            <Column>{index + 1}</Column>
            <Column>
              <p>
                {" "}
                <IconCoin src={image} alt={id} />
                {id}
              </p>
            </Column>
            <Column>
              {current_price}&nbsp;
              {props.currency}
            </Column>
            <Column>
              {Math.round(price_change_percentage_1h_in_currency * 100) / 100}%
            </Column>
            <Column>
              {Math.round(price_change_percentage_24h * 100) / 100}%
            </Column>
            <Column>
              {" "}
              {Math.round(price_change_percentage_7d_in_currency * 100) / 100}%
            </Column>
            <Column>
              <p>
                {" "}
                {Math.round((market_cap_change_24h / 1000000000) * 100) / 100}B
                &nbsp;&nbsp; &nbsp;&nbsp;
                {Math.round((market_cap / 1000000000) * 100) / 100}B
              </p>
              <Progressbar
                percent={(market_cap_change_24h * 100) / market_cap}
                width="100px"
              />
            </Column>
            <Column>
              <p>
                {" "}
                {Math.round((circulating_supply / 1000000000) * 100) / 100}B
                &nbsp;&nbsp; &nbsp;&nbsp;
                {Math.round((total_supply / 1000000000) * 100) / 100}B
              </p>
              <Progressbar
                percent={(circulating_supply * 100) / total_supply}
                width="100px"
              />
            </Column>
            <Column>
              {" "}
              <LineChart
                data={{
                  labels: ["", "", "", "", "", "", ""],
                  datasets: [
                    {
                      label: "",
                      data: sparkline_in_7d.price,
                      borderColor: "#568E2B",
                      backgroundColor: "#568E2B",
                      pointBackgroundColor: "transparent",
                      pointBorderColor: "transparent",
                      tension: 0.6,
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    maintainAspectRatio: true,
                    y: {
                      display: false,
                    },
                    x: {
                      grid: {
                        color: "transparent",
                      },
                      ticks: {
                        font: {
                          size: 12,
                        },
                      },
                    },
                  },
                }}
              />
            </Column>
          </Row>
        )
      )}
    </TableData>
  </div>
);

export default Table;
