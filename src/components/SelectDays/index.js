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
          onClick={() => selectNumberOfDays(value)}
          selected={true}
          style={StyledLi}
        >
          {value}
        </li>
      );
    });

  return <Container>{li(props)}</Container>;
};

export default SelectDays;
