import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { FormStyled } from "./styles";

const SearchInput = (props) => {
  const [searchValue, updateSearchValue] = useState("");
  const handleChange = (e) => {
    props.handleChange(e.target.value);
    updateSearchValue("");
  };

  const { theme, handleSubmit } = props.data;
  return (
    <ThemeProvider theme={theme}>
      <FormStyled onSubmit={handleSubmit}>
        <input type="text" placeholder={` Search...`} onChange={handleChange} />
      </FormStyled>
    </ThemeProvider>
  );
};

export default SearchInput;
