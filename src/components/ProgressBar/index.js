import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

class Progressbar extends React.Component {
  render() {
    return (
      <ProgressBar
        percent={this.props.percent}
        unfilledBackground={this.props.unfilledBackground}
        filledBackground={this.props.filledBackground}
        width={this.props.width}
      />
    );
  }
}

export default Progressbar;
