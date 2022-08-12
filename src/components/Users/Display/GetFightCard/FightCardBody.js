import React from "react";

const FightCardBody = ({ img, alt }) => {
  return (
    <div className="fightCard__opponent">
      <div className="fighCard__opponent-img-container">
        <img
          src={process.env.PUBLIC_URL + img}
          alt={alt}
          className="fightCard__opponent-img"
        />
      </div>
    </div>
  );
};

export default FightCardBody;
