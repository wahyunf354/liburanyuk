import React from "react";
import Fade from "react-reveal/Fade";
import CompletedImage from "assets/image/Illustration.svg";

export default function Completed() {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-4">
            <img
              src={CompletedImage}
              alt="completed checkout apartement"
              className="img-fluid"
            />
            <p className="text-gray-500 text-center">
              We will infrom you via email later once the transaction has been
              accepted
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
