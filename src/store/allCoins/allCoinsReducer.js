import { COIN_SELECTED } from "./allCoinsTypes";

const allCoinsReducer = (state, action) => {
  console.log("this state", state, action);
  if (action.type === COIN_SELECTED) {
    return console.log("this state", { state }); //state.filter((el) => el.title !== action.payload.title);
  }
  return [
    { title: "Song One", duration: "4:05" },
    { title: "Song Two", duration: "3:05" },
    { title: "Song Three", duration: "3:35" },
    { title: "Song Four", duration: "2:15" },
  ];
};

export default allCoinsReducer;
