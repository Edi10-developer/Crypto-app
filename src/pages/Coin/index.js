import React, { useState, useEffect } from "react";
import { Container } from "./styles";

const Coin = () => {
  const coinId =
    window.location.pathname.charAt(1).toUpperCase() +
    window.location.pathname.slice(2);

  const [coinName, updateCoinName] = useState(coinId);

  useEffect(() => {
    setTimeout(() => {}, 1000);
  }, []);

  return (
    <Container>
      <h1>{coinName} Page</h1>
    </Container>
  );
};

export default Coin;
