import { TableStyled } from "./styles";
import { LineChart } from "../exports";

const Table = (props) => (
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
          <td>{Math.round((price_change_percentage_24h / 24) * 100) / 100}%</td>
          <td>{Math.round(price_change_percentage_24h * 100) / 100}%</td>
          <td>7 days %</td>
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
          <td></td>
        </tr>
      )
    )}
  </TableStyled>
);

export default Table;
