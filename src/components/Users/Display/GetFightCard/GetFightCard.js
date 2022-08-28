// COMPARTMENTED FROM OTHER COMPONENTS WITHIN DIR

import "./getFightCard.css";

import FightCardBody from "./FightCardBody";
import FightCardHeader from "./FightCardHeader";
import FightCardNamePlack from "./FightCardNamePlack";
import { useEffect, useState } from "react";
import { fetchFightCards } from "../../../../api/event";



const GetFightCard = () => {

  const [LatestEvent, setLatestEvent] = useState();



  useEffect(() => {
    // FETCH latest event
    const fetchLatestEvent = async () => {
      try {
        const res = await fetchFightCards();
        setLatestEvent(res.data[res.data.length - 1]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLatestEvent();
  }, []);

  

  
  return (
    <div className="fightCard__container">

      <FightCardHeader text="Header Text" />
      <div className="fightCard__opponent-name-container">
        <FightCardNamePlack text={LatestEvent != null ? LatestEvent.opponent_1 : null} option={1} />
        <FightCardNamePlack text={LatestEvent != null ? LatestEvent.opponent_2 : null} option={2} />
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
