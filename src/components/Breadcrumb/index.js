import React from "react";

import propTypes from "prop-types";
import Button from "components/Button";

import "./index.scss";

const Breadcrumb = (props) => {
  return (
    <div aria-label="breadcrumb">
      <ul className={`breadcrumb ${props.className}`}>
        {props.data.map((item, index) => {
          return (
            <li
              key={`breadcrumb-${index}`}
              className={`breadcrumb-item${
                index === props.data.length - 1 ? " active" : ""
              }`}
            >
              {index === props.data.length - 1 ? (
                item.pageTitle
              ) : (
                <Button
                  type="link"
                  className="text-gray-400"
                  href={item.pageHref}
                >
                  {item.pageTitle}
                </Button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Breadcrumb.propTypes = {
  data: propTypes.array,
  className: propTypes.string,
};

export default Breadcrumb;
