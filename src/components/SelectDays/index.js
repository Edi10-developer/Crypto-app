import Reac, { useState } from "react";
import { Container } from "./styles";

const SelectDays = (props) => {
  const [selected, setSelected] = useState(false);

  const selectNumberOfDays = (value, index) => {
    props.selectNumberOfDays(value);
    setSelected(true);
  };

  const li = (props) =>
    props.days.map((value, index) => {
      return (
        <li
          key={index}
          onClick={(e) => {
            selectNumberOfDays(value);
          }}
          selected={selected}
          theme={props.theme}
        >
          {value}d
        </li>
      );
    });

  return <Container borderRadius={props.borderRadius}>{li(props)}</Container>;
};

export default SelectDays;
