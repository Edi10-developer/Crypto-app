import React from "react";
import "react-step-progress-bar/styles.css";
import { Step, ProgressBar } from "react-step-progress-bar";

class Progressbar extends React.Component {
  render() {
    return (
      <ProgressBar
        percent={this.props.percent}
        unfilledBackground="red"
        filledBackground="green"
        width={this.props.width}
      />
    );
  }
}

export default Progressbar;
