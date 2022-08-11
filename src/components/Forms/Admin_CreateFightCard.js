import React from 'react'

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";




const Admin_CreateFightCard = () => {

    // private String opponent_1;
    // private String opponent_2;

    // BACKGROUND VARIABLES
    // private List<Bet> opponent_1_bets;
    // private List<Bet> opponent_2_bets;



    const onSubmit = () => {

    }




    return (

        <Container>
            <Form onSubmit={ onSubmit }>


                <Row>
                    <Col>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Event Poster Picture</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Form.Group className="mb-3" controlId="formBasicOpponent_1">
                        <Form.Label>Opponent 1</Form.Label>
                        <Form.Control type="text" placeholder="Competitor One" />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group className="mb-3" controlId="formBasicOpponent_2">
                        <Form.Label>Opponent 2</Form.Label>
                        <Form.Control type="text" placeholder="Competitor Two" />
                    </Form.Group>
                </Row>




                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </Container>

    )
}

export default Admin_CreateFightCard