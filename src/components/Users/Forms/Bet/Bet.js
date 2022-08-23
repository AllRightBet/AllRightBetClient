import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createBet } from "../../../../api/bet";
import { useNavigate } from "react-router-dom";

const Bet = ({ option, user }) => {
  
  const navigate = useNavigate()

  const [bet_amount, setBet_amount] = useState(0);
  const [favor_opponent, setFavor_opponent] = useState(option === 1 ? "Opp 1" : "Opp 2");

  const onCreateBet = (e) => {
    e.preventDefault();
    const addBet = async () => {
      try {
        const res = await createBet(bet_amount, favor_opponent);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    addBet();
    navigate("/history")
  };
  return (

    <>
      {/* DEBUG */}
      <h1> {favor_opponent} </h1>
      <h1> ${user['wallet_balance']} </h1>


      <Form onSubmit={onCreateBet}>
        <h1>{user['wallet_amount']}</h1>
        <Form.Group className="mb-3" controlId="formBasicBet">
          <Form.Label>Bet</Form.Label>
          <Form.Control
            type="text"
            placeholder="place a bet"
            name="betG"
            value={bet_amount}
            onChange={(e) => setBet_amount(e.target.value)}
          />
        </Form.Group>


        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>



  );
};

export default Bet;
