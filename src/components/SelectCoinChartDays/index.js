import React, { useState } from "react";
import { Container, Circle } from "./styles";

const SelectCoinChartDays = (props) => {
  const [selected, setSelected] = useState(false);

  const selectNumberOfDays = (value, index) => {
    props.selectNumberOfDays(value);
    setSelected(true);
  };

  const selectOption = (index, selected) => {
    let bgClr = "";
    if (selected === true) {
      bgClr = "red";
    } else if (selected === false) {
      bgClr = "blue";
    }
    return bgClr;
  };

  const li = (props) =>
    props.days.map((value, index) => {
      //console.log("1****", indexOf(value), index);
      return (
        <li
          key={index}
          onClick={(e) => {
            selectNumberOfDays(value);
          }}
          selected={selected}
          theme={props.theme}
        >
          <Circle bgClr={selectOption(selected)} key={index} />
          {value}d
        </li>
      );
    });

  return <Container>{li(props)}</Container>;
};

export default SelectCoinChartDays;
