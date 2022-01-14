import { TableStyled, Row, Column, TableData, IconCoin } from "./styles";
import { LineChart, Progressbar } from "../exports";

const Table = (props) => (
  <>
    <TableStyled>
      <th>#</th>
      <th>Name</th>
      <th>Price</th>
      <th>1h %</th>
      <th>24h %</th>
      <th>7d %</th>
      <th>24h Volume/Market Cap</th>
      <th>Circulating/Total Supply</th>
      <th>Last7days</th>
      {props.data.map(
        (
          {
            image,
            id,
            current_price,
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
          <tr>
            <td>{index + 1}</td>
            <td>
              <img
                src={image}
                alt={id}
                style={{
                  width: "20px",
                  margin: "4px",
                  marginBottom: "-5px",
                }}
              />
              {id}
            </td>
            <td>{current_price}</td>
            <td>
              {Math.round((price_change_percentage_24h / 24) * 100) / 100}%
            </td>
            <td>{Math.round(price_change_percentage_24h * 100) / 100}%</td>
            <td>
              {Math.round(price_change_percentage_7d_in_currency * 100) / 100}
            </td>
            <td>
              {Math.round((market_cap_change_24h / 1000000000) * 100) / 100}B
              <span> / </span>
              {Math.round((market_cap / 1000000000) * 100) / 100}B
            </td>
            <td>
              {Math.round((circulating_supply / 1000000000) * 100) / 100}B
              <span> / </span>
              {Math.round((total_supply / 1000000000) * 100) / 100}B
            </td>
            <td>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignContent: "space-between",
                }}
              >
                <h4>{Math.round(market_cap_change_24h / 10000000)}B</h4>
                <h4>{Math.round(market_cap_change_24h / 10000000)}B</h4>
              </div>
              <Progressbar
                percent={
                  Math.round(market_cap_change_24h / 1000000000) /
                  Math.round(market_cap / 1000000000)
                }
              />
            </td>
            <td>
              <Progressbar
                percent={
                  Math.round(circulating_supply / 1000000000) /
                  Math.round(total_supply / 1000000000)
                }
                bilion={circulating_supply}
              />
            </td>
            <td>
              <LineChart
                data={{
                  labels: ["", "", "", "", "", "", ""],
                  datasets: [
                    {
                      label: "",
                      data: sparkline_in_7d.price,
                      borderColor: "rgb(255, 99, 132)",
                      backgroundColor: "rgba(255, 99, 132, 0.5)",
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: true,
                  scales: {
                    y: {
                      beginAtZero: false,
                    },
                  },
                }}
              />
            </td>
          </tr>
        )
      )}
    </TableStyled>

    <TableData>
      <Column>
        <Row>
          <Column>#</Column>Name<Column>Price</Column>
          <Column>1h %</Column>
          <Column>24h %</Column>
          <Column>7d %</Column>
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
              <Column>{current_price}</Column>
              <Column>
                {Math.round((price_change_percentage_24h / 24) * 100) / 100}%
              </Column>
              <Column>
                {Math.round(price_change_percentage_24h * 100) / 100}%
              </Column>
              <Column>
                {" "}
                {Math.round(price_change_percentage_7d_in_currency * 100) / 100}
              </Column>
              <Column>
                <p>
                  {" "}
                  {Math.round((market_cap_change_24h / 1000000000) * 100) / 100}
                  B<span> / </span>
                  {Math.round((market_cap / 1000000000) * 100) / 100}B
                </p>
                <Progressbar
                  percent={
                    Math.round(market_cap_change_24h / 1000000000) /
                    Math.round(market_cap / 1000000000)
                  }
                />
              </Column>
              <Column>
                <p>
                  {" "}
                  {Math.round((circulating_supply / 1000000000) * 100) / 100}B
                  <span> / </span>
                  {Math.round((total_supply / 1000000000) * 100) / 100}B
                </p>
                <Progressbar
                  percent={
                    Math.round(circulating_supply / 1000000000) /
                    Math.round(total_supply / 1000000000)
                  }
                  bilion={circulating_supply}
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
                        borderColor: "rgb(255, 99, 132)",
                        backgroundColor: "rgba(255, 99, 132, 0.5)",
                      },
                    ],
                  }}
                  options={{
                    maintainAspectRatio: true,
                    scales: {
                      y: {
                        beginAtZero: false,
                      },
                    },
                  }}
                />
              </Column>
            </Row>
          )
        )}
      </Column>
    </TableData>
  </>
);

export default Table;
