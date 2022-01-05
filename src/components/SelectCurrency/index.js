import { SelectStyled } from "./styles";

const SelectCurrency = (props) => {
  return (
    <SelectStyled name="fiat" form="carform">
      <option value={props.currency1}>{props.currency1}</option>
      <option value={props.currency2}>{props.currency2}</option>
    </SelectStyled>
  );
};

export default SelectCurrency;
