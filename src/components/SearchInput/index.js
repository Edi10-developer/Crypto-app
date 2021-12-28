import React from "react";

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
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          pleaceholder="Search..."
          onChange={this.handleChange}
        />
        <p>{this.state.coin}</p>
      </form>
    );
  }
}
export default SearchInput;
