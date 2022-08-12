import React from "react";

const FightCardHeader = ({ text }) => {
  return (
    <div className="fightCard__heading-container">
      <div className="fightCard__heading-text">
        <h2 className="heading-text">{text}</h2>
      </div>
    </div>
  );
};

export default FightCardHeader;
