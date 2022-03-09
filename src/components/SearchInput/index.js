import { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { FormStyled } from "./styles";

const SearchInput = (props) => {
  const [searchValue, updateSearchValue] = useState(props.inputValue);

  const formRef = useRef();

  const handleChange = (e) => {
    const value = e.target.value;
    updateSearchValue(value);
    props.updateCoin(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formRef.current.reset();
  };
  const { theme } = props.data;
  return (
    <ThemeProvider theme={theme}>
      <FormStyled onSubmit={handleSubmit} ref={formRef}>
        <input
          type="text"
          placeholder={` Search...`}
          onChange={handleChange}
          //value={searchValue}
        />
      </FormStyled>
    </ThemeProvider>
  );
};

export default SearchInput;
