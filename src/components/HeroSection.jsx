import React from "react";
import header_bg from "../assets/header_bg.png";
import logo from "../assets/logo.png";
import agent from "../assets/agent.png";
import ellipse from "../assets/ellipse1.png";
import arrow_right from "../assets/arrow-right.png";

function HeroSection() {
  return (
    <div className="container">
      <div className="position-relative">
        <img alt="header-bg" className="header-bg" src={header_bg} />
        {/* header section */}
        <div className="header-section  position-absolute d-flex justify-content-between  align-items-center w-100 px-3 px-md-5">
          <img alt="logo" className="logo-leed" src={logo} />
          <button className="btn--primary z-1">Contact Us</button>
        </div>
        {/* ellipse-image*/}
        <div className="d-none d-lg-block">
          <img
            alt="ellipse--img"
            className="ellipse-img position-absolute"
            src={ellipse}
          />
          {/* agent-image */}
          <img
            alt="agent-img"
            className="agent-img position-absolute"
            src={agent}
          />
        </div>
        {/* heading */}
        <div className="position-absolute row w-100 header-typography px-3 px-md-5">
          <div className="col-12 col-lg-6">
            <h1 className="header-heading mb-0">Seller's leads.</h1>
            <h1 className="header-heading header-heading-blue mb-4">
              Hassle-free.
            </h1>
            <p className="text-small mb-5">
              We help agents close above their quota. Claim your territory
              before someone else does.
            </p>
            {/* <button className="btn--secondary z-1 d-flex get-started-btn">
              Get Started
            </button> */}
            <div className="d-flex justify-content-between align-items-center get-started-btn">
              <p className="mb-0">Get Started</p>
              <img
                alt="arrow-right-img"
                className="arrow-right-img"
                src={arrow_right}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
