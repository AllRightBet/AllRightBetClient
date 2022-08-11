import "./getFightCard.css";
import React from "react";

const GetFightCard = () => {
  return (
    <div className="fightCard__container">
      <div className="fightCard__heading-container">
        <div className="fightCard__heading-text">
          <h2 className="heading-text">FightCard Text</h2>
        </div>
      </div>
      <div className="fightCard__opponent-name-container">
        <div className="fightCard__opponent-name">
          <h3 className="fightCard__opponent-name-text">Opp Name</h3>
        </div>
        <div className="fightCard__opponent-name">
          <h3 className="fightCard__opponent-name-text">Opp Name</h3>
        </div>
      </div>
      <div className="fightCard__opponent-container">
        <div className="fightCard__opponent"></div>
        <div className="fightCard__opponent"></div>
      </div>
    </div>
  );
};

export default GetFightCard;
