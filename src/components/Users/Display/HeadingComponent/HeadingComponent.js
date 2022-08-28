import "./HeadingComponent.css";
import React from "react";
import { Link } from "react-router-dom";

const HeadingComponent = () => {
  return (
    <div className="headingComponent">
      <div className="headingComponent__container">
        <p className="headingComponent__app-name">Alright Bet</p>
        <p className="headingComponent__app-slogan">Sports Ventures</p>
      </div>
      <div className="headingComponent__secondary-heading-container">
        <h3 className="headingComponent__secondary-heading">New Customers</h3>
        <div className="headingComponent__secondary-heading-text-container">
          <h3 className="headingComponent__secondary-heading-text">
            NO SWEAT FIRST BET
          </h3>
        </div>
      </div>
      <div className="headingComponent__main-heading-container">
        <h2 className="headingComponent__main-heading-text">Place a $10 bet</h2>
        <h1 className="headingComponent__main-heading-text-two">
          Get $200 in free bets
        </h1>
      </div>
      <div className="btn__link-container">
        <Link to="/signUp" className="btn__link-main">
          Join Us
        </Link>
      </div>
    </div>
  );
};

export default HeadingComponent;
