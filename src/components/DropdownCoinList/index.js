import { ThemeProvider } from "styled-components";
import { Container, StyledCoinItem, StyledCoinImg } from "./styles";

const DropdownCoinList = (props) => (
  <ThemeProvider theme={props.theme}>
    <Container>
      {props.coins
        .filter((element) => {
          if (props.coin == "") {
            return element;
          } else if (element.id[0] === props.coin[0]) {
            console.log("element ", element);
            return element;
          }
        })
        .map((item, key) => (
          <StyledCoinItem
            onClick={() => (window.location.pathname = `/${item.id}`)}
            key={item.id}
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
