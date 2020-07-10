import React from "react";
import Button from "components/Button";
import IconText from "./IconText";

const Footer = () => {
  return (
    <footer>
      <div className="container px-4">
        <div className="row px-2">
          <div className="col-auto" style={{ width: 400 }}>
            <IconText />
            <p className="brand-tagline" style={{ maxWidth: 250 }}>
              We kaboom your beuty holiday instantly and memorable
            </p>
          </div>
          <div className="col-2 mr-5">
            <h6 className="font-weight-medium mt-2">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Start Booking a Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/payment">
                  Use Payment
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="font-weight-medium mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/about">
                  About
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy Policy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <h6 className="font-weight-medium mt-2">Getting Touch</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" isExternal href="tel:+628942591">
                  +62-8934-2591
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" isExternal href="support@liburyuk.com">
                  support@liburyuk.com
                </Button>
              </li>
              <li className="list-group-item">
                <span>Liburyuk Dy, Medan</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col copy-right text-center">
            Copyright 2020 . All right reserved . Liburyuk
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
