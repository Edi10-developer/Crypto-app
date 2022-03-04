import { ThemeProvider } from "styled-components";
import { FormStyled } from "./styles";

const SearchInput = (props) => {
  const handleChange = (e) => {
    props.handleChange(e.target.value);
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
