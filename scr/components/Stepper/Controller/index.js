import React from "react";
import Fade from "react-reveal/Fade";

const Controller = ({ children }) => {
  return (
    <Fade>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-3">{children}</div>
        </div>
      </div>
    </Fade>
  );
};

export default Controller;
