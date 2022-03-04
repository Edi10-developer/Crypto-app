import React, { useState, useEffect } from "react";
import { PageContainer, MainContainer, Div1 } from "./styles";

const Coin = () => {
  const coinId =
    window.location.pathname.charAt(1).toUpperCase() +
    window.location.pathname.slice(2);

  const [coinName, updateCoinName] = useState(coinId);

  useEffect(() => {
    setTimeout(() => {}, 1000);
  }, []);

  return (
    <PageContainer>
      <h1>{coinName} Page</h1>
      <MainContainer>
        <div>
          <Div1>1</Div1>
          <div>1b</div>
        </div>
        <div>2</div>
        <div>3</div>
      </MainContainer>
    </PageContainer>
  );
};

export default Coin;
