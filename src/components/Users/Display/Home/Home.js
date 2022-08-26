import "./home.css";
import React from "react";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { Col, Container, Row } from "react-bootstrap";

const Home = ({ user }) => {
  return (
    <Container className="container">
      <Row>
        <Col className="link__column">
          <LinkContainer to="/deposit-funds" className="link__container">
            <Nav.Link className="link">Add Chips</Nav.Link>
          </LinkContainer>
        </Col>
        <Col className="link__column">
          <LinkContainer to="/event" className="link__container">
            <Nav.Link className="link">${user.wallet_balance}</Nav.Link>
          </LinkContainer>
        </Col>
      </Row>
      <Row>
        <Col className="link__column">
          <LinkContainer to="/withdraw-funds" className="link__container">
            <Nav.Link className="link">Withdraw</Nav.Link>
          </LinkContainer>
        </Col>
        <Col className="link__column">
          <LinkContainer to="/history" className="link__container">
            <Nav.Link className="link">History</Nav.Link>
          </LinkContainer>
        </Col>
      </Row>
      <Row>
        <Col className="link__column">
          <LinkContainer to="/settings" className="link__container">
            <Nav.Link className="link">Settings</Nav.Link>
          </LinkContainer>
        </Col>
        <Col className="link__column">
          <LinkContainer to="/top-bets" className="link__container">
            <Nav.Link className="link">Top Bets</Nav.Link>
          </LinkContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
