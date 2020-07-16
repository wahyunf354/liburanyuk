import React, { Component } from "react";

// component
import Breadcrumb from "../components/Breadcrumb";

const breadcrumbList = [
  { pageTitle: "Home", pageHref: "" },
  { pageTitle: "Home Details", pageHref: "" },
];
class Example extends Component {
  render() {
    return (
      <div className="container">
        <div
          style={{ height: "100vh" }}
          className="align-items-center justify-content-center"
        >
          <div className="col-auto">
            <Breadcrumb data={breadcrumbList} />
          </div>
        </div>
      </div>
    );
  }
}

export default Example;
