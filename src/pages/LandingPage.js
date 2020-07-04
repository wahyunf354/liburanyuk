import React, { Component } from "react";

// Component
import Header from "part/Header";

class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props} />
      </>
    );
  }
}

export default LandingPage;
