import React from "react";
import Fade from "react-reveal/Fade";

import { InputText } from "components/Form";

export default function BookingInformation({
  data,
  onChange,
  itemDetails,
  checkout,
}) {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5">
            <Fade delay={300}>
              <div className="card">
                <figure className="image-wrapper" style={{ height: 270 }}>
                  <img
                    src={`${process.env.REACT_APP_HOST}/${itemDetails.imageId[0].imageUrl}`}
                    alt={itemDetails.name}
                    className="img-cover"
                  />
                </figure>
                <div className="row align-items-center mt-2">
                  <div className="col">
                    <div className="mate-wrapper">
                      <h5>{itemDetails.title}</h5>
                      <span className="text-gray-500 font-weight-light">
                        {itemDetails.city}, {itemDetails.country}
                      </span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <span>
                      ${+checkout.duration * itemDetails.price} USD
                      <span className="text-gray-500 font-weight-light">
                        {" "}
                        per{" "}
                      </span>
                      {checkout.duration} {itemDetails.unit}
                      {+checkout.duration > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={300}>
              <label htmlFor="firstName">First Name</label>
              <InputText
                type="text"
                id="firstName"
                name="firstName"
                value={data.firstName}
                onChange={onChange}
              />
              <label htmlFor="lastName">Last Name</label>
              <InputText
                type="text"
                id="lastName"
                name="lastName"
                value={data.lastName}
                onChange={onChange}
              />
              <label htmlFor="email">Email</label>
              <InputText
                id="email"
                type="email"
                name="email"
                value={data.email}
                onChange={onChange}
              />
              <label htmlFor="phone">Phone Number</label>
              <InputText
                id="phone"
                type="tel"
                name="phoneNumber"
                value={data.phone}
                onChange={onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
