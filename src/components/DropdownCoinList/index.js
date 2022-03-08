import { ThemeProvider } from "styled-components";
import { Container, StyledLink, StyledCoinImg } from "./styles";

const DropdownCoinList = ({ coins, theme, coin, updateCoin }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        {coins.coins
          .filter((element) => {
            if (coin.id === "") {
              return element;
            } else if (element.id[0] === coin[0]) {
              return element;
            }
          })
          .map((item, index) => (
            <StyledLink
              to={`/coins/${item.id}`}
              onClick={updateCoin(item.id)}
              key={index}
            >
              <div>
                <StyledCoinImg src={`${item.thumb}`} alt={item.id} />
              </div>
              <div>{item.id}</div>
              <div>{item.symbol.toUpperCase()}</div>
            </StyledLink>
          ))}
      </Container>
    </ThemeProvider>
  );
};

export default DropdownCoinList;
