import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


const FightCardBody = ({ img, alt, option }) => {
  return (
    <>
      <LinkContainer to="/bet" className="fightCard_body_container">
        <Nav.Link className="fightCard_opponent_link">
          <div className="fightCard__opponent">
            <div className="fighCard__opponent-img-container">
              <img
                src={process.env.PUBLIC_URL + img}
                alt={alt}
                className="fightCard__opponent-img"
              />
            </div>
          </div>
        </Nav.Link>
      </LinkContainer>
    </>
  );
};

export default FightCardBody;
