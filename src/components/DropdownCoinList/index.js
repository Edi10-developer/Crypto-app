import { ThemeProvider } from "styled-components";
import { Container, StyledCoinItem, StyledCoinImg } from "./styles";

const DropdownCoinList = ({ coins, theme, coin }) => (
  <ThemeProvider theme={theme}>
    <Container>
      {coins
        .filter((element) => {
          if (coin == "") {
            return element;
          } else if (element.id[0] === coin[0]) {
            return element;
          }
        })
        .map((item, index) => (
          <StyledCoinItem
            onClick={() => (window.location.pathname = `/coins/${item.id}`)}
            key={index}
          >
            <div>
              <StyledCoinImg src={`${item.image}`} alt={item.id} />
            </div>
            <div>{item.id}</div>
            <div>{item.symbol.toUpperCase()}</div>
          </StyledCoinItem>
        ))}
    </Container>
  </ThemeProvider>
);

export default DropdownCoinList;
