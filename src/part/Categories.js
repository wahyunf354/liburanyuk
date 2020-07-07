import React from "react";

import Button from "components/Button";

const Categories = ({ data }) => {
  return data.map((category, index1) => {
    return (
      <section className="container px-4" key={`category-${index1}`}>
        <h5 className="mb-3 font-weight-medium px-2">{category.name}</h5>
        <div className="container-grid">
          {category.items.length === 0 ? (
            <div className="row">
              <div className="col-auto align-items-center">
                There is no property at this category
              </div>
            </div>
          ) : (
            category.items.map((item, index2) => {
              return (
                <div
                  className="item column-3 row-1 px-2"
                  key={`category-${index1}-item-${index2}`}
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
                        className="img-cover"
                        src={item.imageUrl}
                        alt={item.name}
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        className="streched-link d-block text-white"
                        href={`/properties/${item._id}`}
                      >
                        <h6 className="text-gray-900">{item.name}</h6>
                      </Button>
                      <span className="font-weight-light text-gray-600">
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  });
};

export default Categories;
