const selectCoin = (song) => {
  // REturn an action
  return {
    type: "COIN_SELECTED",
    payload: song,
  };
};

export default selectCoin;
