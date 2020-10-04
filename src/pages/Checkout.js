import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";

import Header from "part/Header";
import Button from "components/Button";
import Stepper from "components/Stepper";

import Controller from "components/Stepper/Controller";
import Numbering from "components/Stepper/Numbering";
import Meta from "components/Stepper/Meta";
import MainContent from "components/Stepper/MainContent";

import BookingInformation from "part/Checkout/BookingInformation";
import Payment from "part/Checkout/Payment";
import Completed from "part/Checkout/Completed";

import itemDetails from "../json/itemDetails.json";
import { bookingPost } from "../store/actions/booking.js";

class Checkout extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      proofPayment: "",
      accountHolder: "",
      bankFrom: "",
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
  }

  handleBookingPost = (nextStep) => {
    const { data } = this.state;
    const { checkout } = this.props;

    const payload = new FormData();
    payload.append("firstName", data.firstName);
    payload.append("lastName", data.lastName);
    payload.append("idItem", checkout._id);
    payload.append("email", data.email);
    payload.append("duration", checkout.duration);
    payload.append("bookingDateStart", checkout.date.startDate);
    payload.append("bookingDateEnd", checkout.date.endDate);
    payload.append("phoneNumber", data.phoneNumber);
    payload.append("accountHolder", data.accountHolder);
    payload.append("bankFrom", data.bankFrom);
    payload.append("image", data.proofPayment[0]);
    console.log("data : ", data);
    console.log("payload form Data : ", payload);

    this.props
      .bookingPost(
        `/booking-page`,
        payload
      )
      .then(() => {
        nextStep();
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { data } = this.state;
    const { checkout, page } = this.props;

    if (!page) return null;
    if (!checkout.duration) {
      return (
        <div
          className="row justify-content-center align-items-center text-center"
          style={{ height: "100vh" }}
        >
        <div>
          <p>Pilih Kamar Dulu</p>
            <Button
              className="btn"
              style={{ margin: 20 }}
              type="button"
              onClick={() => {
                this.props.history.goBack();
              }}
              isLight
            >
              Back
            </Button>
          </div>
        </div>
      );
    }

    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank fields blow",
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            itemDetails={page[checkout._id]}
            onChange={this.onChange}
          />
        ),
      },
      payment: {
        title: "Payment",
        description: "Kindly follow the instructions below",
        content: (
          <Payment
            data={data}
            checkout={checkout}
            itemDetails={page[checkout._id]}
            onChange={this.onChange}
          />
        ),
      },
      completed: {
        title: "Hore!, Completed",
        discription: null,
        content: <Completed />,
      },
    };

    return (
      <div className="mb-5">
        <Header isCenter />
        <Stepper steps={steps}>
          {(prevStep, nextStep, CurrentStep, steps) => (
            <>
              <Numbering
                data={steps}
                current={CurrentStep}
                stye={{ marginBottom: 30 }}
              />
              <Meta data={steps} current={CurrentStep} />
              <MainContent data={steps} current={CurrentStep} />
              {CurrentStep === "bookingInformation" && (
                <Controller>
                  {data.firtName !== "" &&
                    data.lastName !== "" &&
                    data.email !== "" &&
                    data.phone !== "" && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextStep}
                        >
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn"
                    type="link"
                    isBlock
                    isLight
                    href={`/properties/${itemDetails._id}`}
                  >
                    {" "}
                    Cancel{" "}
                  </Button>
                </Controller>
              )}
              {CurrentStep === "payment" && (
                <Controller>
                  {data.proofPayment !== "" &&
                    data.bankName !== "" &&
                    data.bankHolder !== "" && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={() => this.handleBookingPost(nextStep)}
                        >
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn"
                    onClick={prevStep}
                    type="button"
                    isBlock
                    isLight
                  >
                    {" "}
                    Cancel{" "}
                  </Button>
                </Controller>
              )}
              {CurrentStep === "completed" && (
                <Controller>
                  <Button
                    className="btn"
                    type="link"
                    isBlock
                    isPrimary
                    hasShadow
                    href=""
                  >
                    Back to Home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  checkout: state.checkout,
  page: state.page,
});

export default connect(mapStateToProps, { bookingPost })(Checkout);
