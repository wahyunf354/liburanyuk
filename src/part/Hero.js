import React from "react";
import Fade from "react-reveal";

// assets
import ImageHero from "assets/image/img-hero.jpg";
import ImageHeroFram from "assets/image/img-hero-fram.jpg";
import IconCities from "assets/icons/Icon_Cities.svg";
import IconTraveler from "assets/icons/Icon_Traveler.svg";
import IconTreasure from "assets/icons/Icon_Treasure.svg";
import Button from "components/Button";

// utils
import formatNumber from "utils/formatNumber";

function Hero(props) {
  const showMostPicked = () => {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  };

  return (
    <Fade bottom>
      <section className="container pt-5">
        <div className="row align-items-conter px-3">
          <div className="col-auto pr-4" style={{ width: 500 }}>
            <h1 className="font-weight-light line-height-1 mb-3">
              Forget the busy work, <br />
              <span className="font-weight-bold">start</span> your next
              <span className="font-weight-bold"> holiday</span>
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "170%" }}
            >
              We provide what you need to enjoy your holiday with family. Your
              maney can return, but your time is not.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me
            </Button>
            <div className="row" style={{ marginTop: 50 }}>
              <div className="col-auto" style={{ marginRight: 40 }}>
                <img
                  src={IconTraveler}
                  alt={`${props.data.travelers} Traveler`}
                />
                <p className="mt-3">
                  {formatNumber(props.data.travelers)}{" "}
                  <span className="font-weight-light text-gray-500">
                    travelers
                  </span>
                </p>
              </div>

              <div className="col-auto" style={{ marginRight: 40 }}>
                <img src={IconCities} alt={`${props.data.cities} Cities`} />
                <p className="mt-3">
                  {formatNumber(props.data.cities)}{" "}
                  <span className="font-weight-light text-gray-500">
                    cities
                  </span>
                </p>
              </div>

              <div className="col-auto">
                <img
                  src={IconTreasure}
                  alt={`${props.data.treasures} Treasures`}
                />
                <p className="mt-3">
                  {formatNumber(props.data.treasures)}{" "}
                  <span className="font-weight-light text-gray-500">
                    treasures
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-5 ml-auto" style={{ marginRight: 50 }}>
            <div style={{ width: 500, height: 416 }}>
              <img
                src={ImageHero}
                className="img-fluid position-absolute"
                alt="Room with pool"
                style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
              />
              <img
                src={ImageHeroFram}
                className="img-fluid position-absolute"
                alt="Room with pool fram"
                style={{ margin: "0 -15px -15px 0" }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default Hero;
