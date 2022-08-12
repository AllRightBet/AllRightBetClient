import "./home.css";
import React from "react";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="container">
      <Row>
        <Col>
          <LinkContainer to="/" className="link__container">
            <Nav.Link className="link">Add Chips</Nav.Link>
          </LinkContainer>
        </Col>
        <Col>
          <LinkContainer to="/" className="link__container">
            <Nav.Link className="link">$$$$</Nav.Link>
          </LinkContainer>
        </Col>
      </Row>
      <Row>
        <Col>
          <LinkContainer to="/" className="link__container">
            <Nav.Link className="link">Withdraw</Nav.Link>
          </LinkContainer>
        </Col>
        <Col>
          <LinkContainer to="/" className="link__container">
            <Nav.Link className="link">History</Nav.Link>
          </LinkContainer>
        </Col>
      </Row>
      <Row>
        <Col>
          <LinkContainer to="/" className="link__container">
            <Nav.Link className="link">Settings</Nav.Link>
          </LinkContainer>
        </Col>
        <Col>
          <LinkContainer to="/" className="link__container">
            <Nav.Link className="link">Top-Bets</Nav.Link>
          </LinkContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
