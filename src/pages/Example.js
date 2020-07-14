import React, { Component } from "react";

// component
import InputNumber from "../components/Form/InputNumber";

export class Example extends Component {
  state = {
    value: "1",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <InputNumber
          sulfix=" night"
          isSulfixPruler
          name="value"
          value={this.state.value}
          onChange={this.handleChange}
          max={30}
          placeholder="Input"
        />
      </div>
    );
  }
}

export default Example;
