import "./signUpForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { signUp } from "../../../api/auth";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [age, setAge] = useState("");

  const onSignUp = (event) => {
    event.preventDefault();

    const createUser = async () => {
      try {
        const res = await signUp(
          firstName,
          lastName,
          userName,
          email,
          password,
          address,
          state,
          city,
          zip,
          age
        );
        console.log(res.data);
      } catch (error) {
        console.log("error message: ", error);
      }
    };

    createUser();
  };

  return (
    <Container>
      <Form noValidate onSubmit={onSignUp}>
        <Row>
          <Col>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Col>
        </Row>


        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group >
          </Col >
        </Row >
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>

          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group >
        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicState">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            placeholder="State"
            onChange={(e) => setState(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicZip">
              <Form.Label>Zip/postcode</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                onChange={(e) => setZip(e.target.value)}
              />
            </Form.Group >
          </Col >
          <Col>
            <Form.Group className="mb-3" controlId="formBasicAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
                placeholder="Age"
                onChange={(e) => setAge(e.target.value)}
              />
              <Form.Text className="text-muted">
                Must be 21 years or over to sign up.
              </Form.Text>
            </Form.Group >
          </Col >
        </Row >
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form >
    </Container >
  );
};

export default SignUpForm;
