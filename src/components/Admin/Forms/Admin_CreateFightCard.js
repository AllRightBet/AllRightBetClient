import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";

import { createFightCard } from "../../../api/createFightCard";




const Admin_CreateFightCard = () => {

    const [opponent_1, setOpponent_1] = useState("");
    const [opponent_2, setOpponent_2] = useState("");
    const [event_picture, setEvent_picture] = useState("");
    // const [stats, setStats] = useState({});


    const onSubmit = (event) => {
        event.preventDefault();

        const createCard = async () => {
            try {
                const res = await createFightCard(
                    opponent_1,
                    opponent_2,
                    event_picture,
                );
                console.log(res.data);
            } catch (error) {
                console.log("error message: ", error);
            }
        };

        createCard();
    };




    return (

        <Container>
            <Form onSubmit={onSubmit}>

                <Row>
                    <Col>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Event Poster Picture</Form.Label>
                            <Form.Control type="file" onChange={(e) => setEvent_picture(e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Form.Group className="mb-3" controlId="formBasicOpponent_1">
                        <Form.Label>Opponent 1</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Competitor One"
                            onChange={(e) => setOpponent_1(e.target.value)} />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group className="mb-3" controlId="formBasicOpponent_2">
                        <Form.Label>Opponent 2</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Competitor Two"
                            onChange={(e) => setOpponent_2(e.target.value)} />
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