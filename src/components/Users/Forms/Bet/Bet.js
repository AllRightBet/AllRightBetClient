import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createBet } from "../../../../api/bet";

const Bet = ({option, user}) => {
  const [bet_amount, setBet_amount] = useState(0);
  const [favor_opponent, setFavor_opponent] = useState(0);
  const [favor_opponent_one_radio, setfavor_opponent_one_radio] = useState(option === 1 ? true:false);
  const [favor_opponent_two_radio, setfavor_opponent_two_radio] = useState(option === 2 ? true:false);

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
      <Form.Check
        inline
        type="radio"
        label="Opp 1"
        name="Opp 1"
        id="opp 1"
        checked={favor_opponent_one_radio}
        onChange={(e) => setFavor_opponent(e.target.id)}
        />
      <Form.Check
        inline
        type="radio"
        label="Opp 2"
        name="Opp 1"
        id="opp 2"
        checked={favor_opponent_two_radio}
        onChange={(e) => setFavor_opponent(e.target.id)}
      />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Bet;
