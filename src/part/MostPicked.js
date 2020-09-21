import React from "react";
import Fade from "react-reveal";
import Button from "components/Button";

const MostPicked = (props) => {
  return (
    <section ref={props.refMostPicked} className="container">
      <Fade bottom>
        <h5 className="mb-4">Most Picked</h5>
        <div className="container-grid">
          {props.data.map((item, index) => {
            return (
              <div
                key={`mostpicked-${index}`}
                className={`item column-4${index === 0 ? " row-2" : " row-1"}`}
              >
                <Fade bottom delay={500 * index}>
                  <div className="card card-featured">
                    <div className="tag">
                      ${item.price}
                      <span className="font-weight-light">
                        {" "}
                        per {item.unit ? item.unit : "night"}
                      </span>
                    </div>
                    <figure className="image-wrapper">
                      <img
                        src={`${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`}
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        className="stretched-link d-block text-white"
                        href={`/properties/${item._id}`}
                      >
                        <h5>{item.title}</h5>
                      </Button>
                      <span className="font-weight-light">
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  );
};

export default MostPicked;
