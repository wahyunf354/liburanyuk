import React, { Component } from "react";

// Component
import Header from "part/Header";
import Hero from "part/Hero";
import MostPicked from "part/MostPicked";
import Categories from "part/Categories";
import Testimony from "part/Testimony";
import Footer from "part/Footer";

// JSON Dummy
import landingPage from "json/landingPage.json";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        />
        <Categories data={landingPage.categories} />
        <Testimony data={landingPage.testimonial} />
        <Footer />
      </>
    );
  }
}

export default LandingPage;
