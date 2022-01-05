import React from "react";
import { FormStyled } from "./styles";

class SearchInput extends React.Component {
  state = {
    coin: "",
  };

  handleChange = (e) => this.setState({ coin: e.target.value });
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.coin);
    this.setState({ coin: "" });
  };
  render() {
    return (
      <FormStyled onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder={` Search...`}
          onChange={this.handleChange}
        />
      </FormStyled>
    );
  }
}
export default SearchInput;
