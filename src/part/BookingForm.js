import React, { Component } from "react";
import propTypes from "prop-types";

import Button from "components/Button";
import { InputNumber, InputDate } from "components/Form";

export default class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      },
    };
  }

  updateData = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;

    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();

      this.setState({
        data: {
          ...this.state.data,
          duration: countDuration,
        },
      });
    }

    if (prevState.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1)
      );
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate: endDate,
          },
        },
      });
    }
  }

  render() {
    const { data } = this.state;
    const { itemDetails, startBooking } = this.props;

    return (
      <div
        className="card border"
        style={{ padding: "60px 80px", borderRadius: 15 }}
      >
        <h4 className="mb-3">Start Booking</h4>
        <h2 className="h2 text-teal mb-4">
          ${itemDetails.price}{" "}
          <span className="text-gray-500 font-weight-light">
            per {itemDetails.unit}
          </span>
        </h2>
        <label htmlFor="duration"> How long you will style? </label>
        <InputNumber
          max={30}
          isSulfixPruler
          onChange={this.updateData}
          name="duration"
          value={data.duration}
          sulfix={` ${itemDetails.unit}`}
        />
        <label htmlFor="date"> Pick a date </label>
        <InputDate onChange={this.updateData} name="date" value={data.date} />
        <h6
          className="text-gray-500 font-weight-light"
          style={{ marginBottom: 40 }}
        >
          You will pay{" "}
          <span className="text-gray-900 font-weight-normal">
            ${itemDetails.price * data.duration} USD{" "}
          </span>
          per{" "}
          <span className="text-gray-900 font-weight-normal">
            {data.duration} {itemDetails.unit}
            {data.duration > 1 ? "s" : ""}
          </span>
        </h6>
        <Button
          className="btn"
          hasShadow
          isBlock
          isPrimary
          onClick={startBooking}
        >
          Continue to Book
        </Button>
      </div>
    );
  }
}

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
};
