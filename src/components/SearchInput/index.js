import { useState, useRef } from "react";
import { FormStyled } from "./styles";

const SearchInput = (props) => {
  const formRef = useRef();

  const handleChange = (e) => {
    const value = e.target.value;
    //updateSearchValue(value);
    props.updateCoin(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  formRef.current.reset();
    props.updateCoin("");
  };
  return (
    <FormStyled onSubmit={handleSubmit} ref={formRef}>
      <input type="text" placeholder={` Search...`} onChange={handleChange} />
    </FormStyled>
  );
};

export default SearchInput;
