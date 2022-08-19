// COMPARTMENTED FROM OTHER COMPONENTS WITHIN DIR

import "./getFightCard.css";

import FightCardBody from "./FightCardBody";
import React from "react";
import FightCardHeader from "./FightCardHeader";
import FightCardNamePlack from "./FightCardNamePlack";



const GetFightCard = () => {
  return (
    <div className="fightCard__container">
      <FightCardHeader text="Header Text" />
      <div className="fightCard__opponent-name-container">
        <FightCardNamePlack />
        <FightCardNamePlack />
      </div>
      <div className="fightCard__opponent-container">
        <FightCardBody
          img="/img/chicago-bears-logo.png"
          alt="Chicago Bears Logo"
        />
        <FightCardBody
          img="/img/detroit-lions-logo.png"
          alt="Detroit Lions Logo"
        />
      </div>
    </div>
  );
};

export default GetFightCard;
