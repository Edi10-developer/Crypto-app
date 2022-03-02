import Reac, { useState } from "react";
import { Container, StyledLi } from "./styles";

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
            console.log(e);
            selectNumberOfDays(value);
          }}
          selected={selected}
          style={{
            backgroundColor: `${selected === true ? "green" : "white"}`,
          }}
        >
          {value}d
        </li>
      );
    });

  return <Container>{li(props)}</Container>;
};

export default SelectDays;
