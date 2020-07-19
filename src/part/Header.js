import React from "react";
import Fade from "react-reveal/Fade";
// Component
import Button from "components/Button";
import BrandIcon from "part/IconText";

const Header = (props) => {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  if (props.isCenter) {
    return (
      <header className="spacing-sm">
        <div className="container">
          <div className="navbar navbar-expand-lg navber-linght">
            <Button className="brand-text-icon mx-auto" type="link" href="">
              Liburan<span className="text-gray-900">yuk!</span>
            </Button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <Fade>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <BrandIcon />
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item${getNavLinkClass("/")}`}>
                  <Button className="nav-link" type="link" href="/">
                    Home
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                  <Button className="nav-link" type="link" href="/browse-by">
                    Browse by
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/stories")}`}>
                  <Button className="nav-link" type="link" href="/stories">
                    Stories
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/agents")}`}>
                  <Button className="nav-link" type="link" href="/agents">
                    Agents
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </Fade>
  );
};

export default Header;
