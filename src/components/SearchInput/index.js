import React from "react";
import { FormStyled } from "./styles";

class SearchInput extends React.Component {
  state = {
    coin: "",
    coins: this.props.coins,
  };

  handleChange = (e) => {
    this.setState({ coin: e.target.value });
    this.props.handleChange(this.state.coin);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.coin);
    this.setState({ coin: "" });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.coin !== this.state.coin) {
      this.props.handleChange(this.state.coin);
    }
  }
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
