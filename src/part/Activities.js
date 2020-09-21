import React from "react";
import Fade from "react-reveal";

import Button from "components/Button";

const Activities = ({ data }) => {
  if (!data) return null;
  if (data.length === 0) return null;
  return (
    <Fade bottom>
      <section className="container">
        <h5 className="mb-3 font-weight-medium">Activity</h5>
        <div className="container-grid">
          {data.length > 0 &&
            data.map((item, index2) => {
              return (
                <div
                  className="item column-3 row-1"
                  key={`data-item-${index2}`}
                >
                  <Fade bottom delay={300 * index2}>
                    <Button
                      type="link"
                      className="streched-link d-block text-white"
                      href={`/properties/${item._id}`}
                    >
                      <div className="card">
                        {item.isPopular && (
                          <div className="tag">
                            Popular{" "}
                            <span className="font-weight-light"> Choice</span>
                          </div>
                        )}
                        <figure className="image-wrapper">
                          <img
                            className="img-cover--activity"
                            src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                            alt={item.name}
                          />
                        </figure>
                        <div className="meta-wrapper">
                          <h5 className="text-gray-900">{item.name}</h5>
                          <span className="font-weight-light text-gray-600">
                            {item.type}
                          </span>
                        </div>
                      </div>
                    </Button>
                  </Fade>
                </div>
              );
            })}
        </div>
      </section>
    </Fade>
  );
};

export default Activities;
