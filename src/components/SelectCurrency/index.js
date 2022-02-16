import { SelectStyled } from "./styles";

const SelectCurrency = (props) => {
  return (
    <SelectStyled onChange={() => console.log("is working")}>
      {props.currencies.map((element, index) => (
        <option key={index} value={element}>
          {element}
        </option>
      ))}
    </SelectStyled>
  );
};

export default SelectCurrency;
