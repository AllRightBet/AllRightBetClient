import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createBet } from "../../../../api/bet";

const Bet = () => {
  const [bet_amount, setBet_amount] = useState(0);
  const [favor_opponent, setFavor_opponent] = useState(0);

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
  };
  return (
    <Form onSubmit={onCreateBet}>
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
      <Form.Check
        inline
        type="radio"
        label="Opp 1"
        name="Opp 1"
        id="opp 1"
        onChange={(e) => setFavor_opponent(e.target.id)}
      />
      <Form.Check
        inline
        type="radio"
        label="Opp 2"
        name="Opp 1"
        id="opp 2"
        onChange={(e) => setFavor_opponent(e.target.id)}
      />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Bet;
