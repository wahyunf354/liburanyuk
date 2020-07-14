import React, { useState } from "react";
import propTypes from "prop-types";
// style
import "./index.scss";

const Number = (props) => {
  const {
    value,
    name,
    min,
    max,
    prefix,
    sulfix,
    placeholder,
    outerClassName,
    isSulfixPruler,
  } = props;
  const [inputValue, setInputValue] = useState(`${prefix}${value}${sulfix}`);

  const onChange = (e) => {
    let value = String(e.target.value);
    if (prefix) value = value.replace(prefix);
    if (sulfix) value = value.replace(sulfix);

    const patterNumeric = RegExp("[0-9]*");
    const isNumeric = patterNumeric.test(value);
    if (isNumeric && +value >= min && +value <= max) {
      props.onChange({
        target: {
          name: name,
          value: +value,
        },
      });
      setInputValue(
        `${prefix}${value}${sulfix}${isSulfixPruler && +value > 1 ? "s" : ""}`
      );
    }
  };

  const minus = () => {
    value > min &&
      onChange({
        target: {
          name: name,
          value: +value - 1,
        },
      });
  };

  const plus = () => {
    value < max &&
      onChange({
        target: {
          name: name,
          value: +value + 1,
        },
      });
  };

  return (
    <div className={["input-number mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        <div className="input-group-append">
          <span className="input-group-text minus" onClick={minus}>
            -
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          min={min}
          max={max}
          name={name}
          pattern="[0-9]*"
          value={inputValue}
          placeholder={placeholder ? placeholder : "0"}
          onChange={onChange}
        />
        <div className="input-group-prepend">
          <span className="input-group-text plus" onClick={plus}>
            +
          </span>
        </div>
      </div>
    </div>
  );
};

Number.defaultProps = {
  min: 1,
  max: 1,
  prefix: "",
  sulfix: "",
};

Number.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  outerClassName: propTypes.string,
  isSulfixPruler: propTypes.bool,
  placeholder: propTypes.string,
  onChange: propTypes.func,
};

export default Number;
