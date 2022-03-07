import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Container, StyledCoinItem, StyledCoinImg } from "./styles";
import { Link } from "react-router-dom";

const DropdownCoinList = ({ coins, theme, coin, updateCoin }) => {
  const { currentCoinName, setCurrentCoinName } = useState(
    window.location.pathname
  );

  return (
    <ThemeProvider theme={theme}>
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
            <StyledCoinItem
              // onClick={() => (window.location.pathname = `/coins/${item.id}`)}
              key={index}
            >
              <Link to={`/coins/${item.id}`} onClick={updateCoin(item.id)}>
                <div>
                  <StyledCoinImg src={`${item.image}`} alt={item.id} />
                </div>
                <div>{item.id}</div>
                <div>{item.symbol.toUpperCase()}</div>
              </Link>
            </StyledCoinItem>
          ))}
      </Container>
    </ThemeProvider>
  );
};

export default DropdownCoinList;
