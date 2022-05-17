import { Container, StyledLink, StyledCoinImg } from "./styles";

const DropdownCoinList = ({ coins, coin, updateCoin }) => {
  return (
    <Container>
      {coins
        .filter((element) => {
          if (coin === "") {
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
  );
};

export default DropdownCoinList;
