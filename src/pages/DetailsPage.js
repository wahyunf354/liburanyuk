import React, { Component } from "react";
import Header from "part/Header";
import PageDetailsTitle from "part/PageDetailsTitle";
import FeaturedImage from "part/FeaturedImage";
import itemDetails from "json/itemDetails.json";
import PageDetailDescription from "part/PageDetailDescription";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "Home Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailsTitle breadcrumb={breadcrumb} data={itemDetails} />
        <FeaturedImage data={itemDetails.imageUrls} />
        <div className="container">
          <div className="row">
            <div className="col-7">
              <PageDetailDescription data={itemDetails} />
            </div>
            <div className="col-5">Booking form</div>
          </div>
        </div>
      </>
    );
  }
}
