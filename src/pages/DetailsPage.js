import React, { Component } from "react";
import Header from "part/Header";
import PageDetailsTitle from "part/PageDetailsTitle";
import FeaturedImage from "part/FeaturedImage";
import PageDetailDescription from "part/PageDetailDescription";
import BookingForm from "part/BookingForm";
import Testimony from "part/Testimony";
import Footer from "part/Footer";
import Activities from "part/Activities";

// redux
import { connect } from "react-redux";
import { checkoutBooking } from "store/actions/checkout";
import { fetchDataPage } from "store/actions/page";

class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);

    if (!this.props.page[this.props.match.params.id])
      this.props.fetchDataPage(
        `${process.env.REACT_APP_HOST}/api/v1/member/detail-page/${this.props.match.params.id}`,
        `${this.props.match.params.id}`
      );
  }

  render() {
    const { page, match } = this.props;
    console.log(page);
    if (!page[match.params.id]) return null;

    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "Home Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailsTitle
          breadcrumb={breadcrumb}
          data={page[match.params.id]}
        />
        <FeaturedImage data={page[match.params.id].imageId} />
        <div className="container mb-5">
          <div className="row">
            <div className="col-7 pr-5">
              <PageDetailDescription data={page[match.params.id]} />
            </div>
            <div className="col-5">
              <BookingForm
                itemDetails={page[match.params.id]}
                startBooking={this.props.checkoutBooking}
              />
            </div>
          </div>
        </div>
        <Activities data={page[match.params.id].activityId} />
        <Testimony data={page[match.params.id].testimonial} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { checkoutBooking, fetchDataPage })(
  DetailsPage
);
