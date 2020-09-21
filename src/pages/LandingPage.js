import React, { Component } from "react";
// Component
import Header from "part/Header";
import Hero from "part/Hero";
import MostPicked from "part/MostPicked";
import Categories from "part/Categories";
import Testimony from "part/Testimony";
import Footer from "part/Footer";

// redux
import { fetchDataPage } from "../store/actions/page";
import { connect } from "react-redux";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    window.title = "Liburan yuk | Home";
    window.scrollTo(0, 0);
    if (!this.props.page.landingPage)
      this.props.fetchDataPage(
        `${process.env.REACT_APP_HOST}/api/v1/member/landing-page`,
        "landingPage"
      );
  }

  render() {
    const { page } = this.props;

    if (!page.hasOwnProperty("landingPage")) return null;

    return (
      <>
        <Header {...this.props} />
        <Hero refMostPicked={this.refMostPicked} data={page.landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={page.landingPage.mostPicked}
        />
        <Categories data={page.landingPage.categories} />
        <Testimony data={page.landingPage.testimonial} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchDataPage })(LandingPage);
