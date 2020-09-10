import React, { useRef } from "react";
import propTypes from "prop-types";

export default function File({
  value,
  placeholder,
  onChange,
  name,
  accept,
  prepend,
  append,
  outerClassName,
  inputClassName,
}) {
  const refInputFile = useRef(null);
  console.log(value);

  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input
          type="file"
          accept={accept}
          ref={refInputFile}
          name={name}
          value={value}
          onChange={onChange}
          className="d-none"
        />
        <input
          className={["form-control", inputClassName].join(" ")}
          defaultValue={value}
          placeholder={placeholder}
          onClick={() => refInputFile.current.click()}
        />
        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
    </div>
  );
}

File.defaultProps = {
  placeholder: "Browser a file...",
};

File.propTypes = {
  name: propTypes.string.isRequired,
  accept: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
  prepend: propTypes.oneOfType([propTypes.string, propTypes.number]),
  append: propTypes.oneOfType([propTypes.string, propTypes.number]),
};
