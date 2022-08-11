import React from 'react'

import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { Col, Container, Row } from "react-bootstrap";

import "./AdminDashboard.css";


const AdminDashboard = () => {
    return (
        <Container className="admin_container">
            <Row>
                <Col>
                    <LinkContainer to="/create-fight-card" className="admin_link__container">
                        <Nav.Link className="admin_link">Add Fight Card</Nav.Link>
                    </LinkContainer>
                </Col>
            </Row>

            <Row>
                <Col>
                    <LinkContainer to="/all-users" className="admin_link__container">
                        <Nav.Link className="admin_link">All Users</Nav.Link>
                    </LinkContainer>
                </Col>
                <Col>
                    <LinkContainer to="/all-bets" className="admin_link__container">
                        <Nav.Link className="admin_link">Bets History</Nav.Link>
                    </LinkContainer>
                </Col>
            </Row>

            <Row>
                <Col>
                    <LinkContainer to="/create-user" className="admin_link__container">
                        <Nav.Link className="admin_link">Create User</Nav.Link>
                    </LinkContainer>
                </Col>
                <Col>
                    <LinkContainer to="/all-fight-cards" className="admin_link__container">
                        <Nav.Link className="admin_link">Fight-Card History</Nav.Link>
                    </LinkContainer>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminDashboard