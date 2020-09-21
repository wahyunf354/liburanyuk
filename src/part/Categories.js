import React from "react";
import Fade from "react-reveal";

import Button from "components/Button";

const Categories = ({ data }) => {
  if (!data) return null;
  return data.map((category, index1) => {
    if (category.itemId.length === 0) return null;
    return (
      <Fade bottom>
        <section className="container" key={`category-${index1}`}>
          <h5 className="mb-3 font-weight-medium">{category.name}</h5>
          <div className="container-grid">
            {category.itemId.length > 0 &&
              category.itemId.map((item, index2) => {
                return (
                  <div
                    className="item column-3 row-1"
                    key={`category-${index1}-item-${index2}`}
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
                              className="img-cover--category"
                              src={`${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`}
                              alt={item.name}
                            />
                          </figure>
                          <div className="meta-wrapper">
                            <h6 className="text-gray-900">{item.title}</h6>
                            <span className="font-weight-light text-gray-600">
                              {item.city}, {item.country}
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
  });
};

export default Categories;
