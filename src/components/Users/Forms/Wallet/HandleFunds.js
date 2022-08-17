import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { Container, Row, Col, Button } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";


import { CardElement, PaymentElement } from '@stripe/react-stripe-js';
import { Elements } from '@stripe/react-stripe-js';


import { updateDB } from '../../../../api/updateUser';
import Fader from '../../../Messages/Fader';



const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "30px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "#000" },
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        },
    }
}




const HandleFunds = ({ stripePromise, stripeSecret, user, setUser, deposit }) => {

    const [input_amount, setDeposit_amount] = useState(0.0);
    const [success, setSuccess] = useState(false);

    const wallet_action = deposit ? "Deposit" : "Withdraw"

    
    const onSubmit = async (e) => {
        e.preventDefault();

        const updateUser = async () => {
            try {

                let amount = 0;
                if (deposit) amount = parseFloat(user['wallet_balance']) + parseFloat(input_amount)
                else amount = parseFloat(user['wallet_balance']) - parseFloat(input_amount)
                if (amount < 0) { setSuccess(false); return }


                const res = await updateDB(
                    user,
                    ["wallet_balance"],
                    [amount]
                );
                setUser(res.data);
            } catch (error) {
                console.log("error message: ", error);
            }
        };
        updateUser();
        setSuccess(true)
    }



    // FOR <PaymentElement/> @STRIPE-COMPONENT
    const options = {
        // clientSecret : stripeSecret
    }






    return (

        <Container>

            {/* SUBMITION SUCCESS NOTIFICATION */}
            {success ?
                <Fader
                    text={`${deposit ? "Deposited" : "Withdrew"}: $${input_amount}`}
                    setSuccess={setSuccess}
                />
                : null}



            <Form onSubmit={onSubmit}>
                <Row className='StripeRow'>
                    <Col>
                        <Form.Group className="PayGroup" controlId="formPaymentMethod" >
                            {/* STRIPE */}
                            <Elements stripe={stripePromise} options={options} >
                                <CardElement options={CARD_OPTIONS} />
                                {/* <PaymentElement /> */}
                            </Elements>
                        </Form.Group>
                    </Col>
                </Row>




                <Row>
                    <Col>
                        <Form.Label>{wallet_action} Amount</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control
                                type='number'
                                aria-label={`${wallet_action} Amount`}
                                onChange={(e) => setDeposit_amount(e.target.value)}
                            />
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup>
                    </Col>
                </Row>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default HandleFunds