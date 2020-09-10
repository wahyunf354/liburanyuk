import { render } from "@testing-library/react";
import Numbering from './';

import React, { Component } from "react";

import Stepper from "components/Stepper";
import itemDetails from "json/itemDetails.json";

export default class Checkout extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.velue,
      },
    });
  };
  render() {
    const { data } = this.state;

    const checkout = {
      duration: 3,
    };

    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank fields blow"
      },
      payment: {
        title: "Payment",
        description: "Kindly follow the instructions below"
      },
      completed: {
        title: "Hore!, Completed",
        discription: null,
      },
    };

    return (
      <div className="mb-5">
        <Stepper steps={steps}>
          {(prevStep, nextStep, CurrentStep, steps) => (
              <Numbering
                data={steps}
                current={CurrentStep}
                stye={{ marginBottom: 30 }}
              />          
          )}
        </Stepper>
      </div>
    );
  }
}

test("Component Numbering should have active class if it is on the same page as the current one",() => {
  const { container } = render(<Checkout
  />)

  expect(container.querySelector("li.active")).toBeInTheDocument();
})