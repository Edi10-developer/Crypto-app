const SelectCurrency = (props) => {
  return (
    <select name="fiat" form="carform">
      <option value={props.currency1}>{props.currency1}</option>
      <option value={props.currency2}>{props.currency2}</option>
    </select>
  );
};

export default SelectCurrency;
