import React from "react";
import propTypes from "prop-types";

import Star from "../components/Star";
import TestimonyFrame from "../assets/image/testimonial-fram.jpg";
import Button from "components/Button";

const Testimony = ({ data }) => {
  return (
    <section className="container px-4">
      <div className="row align-items-center px-2">
        <div className="col-auto" style={{ marginRight: 27 }}>
          <div className="testimonial-hero" style={{ margin: "30px 0 0 30px" }}>
            <img
              src={data.imageUrl}
              alt="Testimony IMG"
              className="position-absolute"
              style={{ zIndex: 2 }}
            />
            <img
              src={TestimonyFrame}
              alt="Tastimony Frame"
              className="position-absolute"
              style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
            />
          </div>
        </div>
        <div className="col">
          <h5 style={{ marginBottom: 40 }}>{data.name}</h5>
          <Star value={data.rate} width={35} height={35} spacing={4} />
          <h5 className="h4 my-3 font-weight-normal line-height-2">
            {data.content}
          </h5>
          <span className="text-gray-500 font-weight-light">
            {data.familyName}, {data.familyOccupation}
          </span>
          <div style={{ marginTop: 40 }}>
            <Button
              className="btn px-4"
              hasShadow
              isPrimary
              type="link"
              href={`/testimony/${data._id}`}
            >
              Read the story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimony.propTypes = {
  data: propTypes.object.isRequired,
};

export default Testimony;
