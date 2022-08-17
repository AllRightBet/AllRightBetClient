import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { signUp } from "../../../../api/auth";
import { createBet } from "../../../../api/bet";

const Bet = () => {
  const [bet, setBet] = useState(0);

  const userCreatesBet = (event) => {
    event.preventDefault();

    const createBet = async () => {
      try {
        const res = await signUp
      } catch (error) {

      }
    };
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicBet">
        <Form.Label>Bet</Form.Label>
        <Form.Control
          type="text"
          placeholder="place a bet"
          name="betG"
          value={bet}
          onChange={(e) => setBet(e.target.value)}
        />
      </Form.Group>
      <Form.Check inline type="radio" label="Opp 1" name="Opp 1" />
      <Form.Check inline type="radio" label="Opp 2" name="Opp 1" />
    </Form>
  );
};

export default Bet;
