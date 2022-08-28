import "./HeadingComponent.css";
import React from "react";

const HeadingComponent = () => {
  return (
    <div className="headingComponent">
      <div className="headingComponent__container">
        <p className="headingComponent__app-name">Alright Bet</p>
        <p className="headingComponent__app-slogan">Sports Ventures</p>
      </div>
      <div class="headingComponent__secondary-heading-container">
        <h3 class="headingComponent__secondary-heading">New Customers</h3>
        <div class="headingComponent__secondary-heading-text-container">
          <h3 class="headingComponent__secondary-heading-text">
            NO SWEAT FIRST BET
          </h3>
        </div>
      </div>
      <div class="headingComponent__main-heading-container">
        <h2 class="headingComponent__main-heading-text">Place a $10 bet</h2>
        <h1 class="headingComponent__main-heading-text-two">
          Get $200 in free bets
        </h1>
      </div>
    </div>
  );
};

export default HeadingComponent;
