import React, { useState } from "react";
import propTypes from "prop-types";

import "./index.scss";

export default function Text(props) {
  const {
    value,
    type,
    name,
    append,
    prepend,
    outerClassName,
    inputClassName,
    errorResponse,
    placeholder,
  } = props;

  const [hasError, setHasError] = useState(null);
  let pattern = "";
  if (type === "email") pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  if (type === "tel") pattern = "[0-9]*";

  const onChange = (event) => {
    const target = {
      target: {
        name: name,
        value: event.target.value,
      },
    };

    if (type === "email") {
      if (!pattern.test(event.target.value)) setHasError(errorResponse);
      else setHasError(null);
    }

    if (type === "tel") {
      if (event.target.validity.valid) props.onChange(target);
    } else {
      props.onChange(target);
    }
  };

  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <div className="input-group-text">{prepend}</div>
          </div>
        )}
        <input
          type={type}
          name={name}
          pattern={pattern}
          className={["form-control", inputClassName].join(" ")}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {append && (
          <div className="input-group-append bg-gray-900">
            <div className="input-group-text">{append}</div>
          </div>
        )}
      </div>
      {hasError && <span className="error-helper">{hasError}</span>}
    </div>
  );
}

Text.defaultProps = {
  type: "text",
  pattern: "",
  placeholder: "Please type here...",
  errorResponse: "Please match the requested format.",
};

Text.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  onChange: propTypes.func.isRequired,
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  type: propTypes.string,
  placeholder: propTypes.string,
  errorResponse: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
};
