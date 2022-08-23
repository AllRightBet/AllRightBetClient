// COMPARTMENTED FROM OTHER COMPONENTS WITHIN DIR

import "./getFightCard.css";

import FightCardBody from "./FightCardBody";
import React, { useState } from "react";
import FightCardHeader from "./FightCardHeader";
import FightCardNamePlack from "./FightCardNamePlack";



const GetFightCard = () => {


  // useState(
  //   () => {

  //   }
  //   , []
  // )




  return (
    <div className="fightCard__container">
      <FightCardHeader text="Header Text" />
      <div className="fightCard__opponent-name-container">
        <FightCardNamePlack text={null} option={1} />
        <FightCardNamePlack text={null} option={2} />
      </div>
      <div className="fightCard__opponent-container">
        <FightCardBody
          img="/img/chicago-bears-logo.png"
          alt="Chicago Bears Logo"
          option={1}
          />
        <FightCardBody
          img="/img/detroit-lions-logo.png"
          alt="Detroit Lions Logo"
          option={2}
        />
      </div>
    </div>
  );
};

export default GetFightCard;
