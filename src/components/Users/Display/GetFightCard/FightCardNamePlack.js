import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


const FightCardNamePlack = ({ text,  option }) => {
  return (
    <>
      <LinkContainer to={`/bet-${option}`} className="fightCard_plack_container">
        <Nav.Link className="fightCard_plack_link">
          <div className="fightCard__opponent-name">
            <div className="fightCard__opponent-name-text">{text}</div>
          </div>
        </Nav.Link>
      </LinkContainer>
    </>
  );
};

export default FightCardNamePlack;
