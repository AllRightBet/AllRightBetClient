import "./signUpForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { signUp } from "../../../api/auth";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ isAdmin, setUser, user }) => {
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

  const [auth_provider, setAuth_provider] = useState("null");
  const [wallet_amount, setWallet_amount] = useState(0);
  const [payment_method, setPayment_method] = useState("");
  const [admin, setAdmin] = useState(true);

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
          age,
          auth_provider,
          wallet_amount,
          payment_method,
          !admin
        );
        console.log(res.data);
        setUser(res.data);
      } catch (error) {
        console.log("error message: ", error);
      }
    };

    createUser();
    // if (user && isAdmin) {
    //   navigate("/admin");
    // } else {
    //   navigate("/");
    // }
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
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>
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
        </Form.Group>
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
            </Form.Group>
          </Col>
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
            </Form.Group>
          </Col>
        </Row>

        {/* IF ADMIN */}
        {isAdmin ? (
          <>
            <h1 className="mt-5 mb-3">ADMIN HIDDEN USER ATTRIBUTES</h1>
            <Row>
              <Col>
                <Form.Label>Authorization Provider</Form.Label>
                <div key="inline-radio" className="mb-3">
                  <Form.Check
                    inline
                    label="Google"
                    name="auth_group"
                    type="radio"
                    id="Google"
                    onChange={(e) => setAuth_provider(e.target.id)}
                  />

                  <Form.Check
                    inline
                    label="Twitter"
                    name="auth_group"
                    type="radio"
                    id="Twitter"
                    onChange={(e) => setAuth_provider(e.target.id)}
                  />

                  <Form.Check
                    inline
                    label="GitHub"
                    name="auth_group"
                    type="radio"
                    id="GitHub"
                    onChange={(e) => setAuth_provider(e.target.id)}
                  />

                  <Form.Check
                    inline
                    label="Admin"
                    name="auth_group"
                    type="radio"
                    id="Admin"
                    onChange={(e) => setAuth_provider(e.target.id)}
                  />
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Label>Wallet Amount</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text>$</InputGroup.Text>
                  <Form.Control
                    aria-label="Wallet Amount"
                    onChange={(e) => setWallet_amount(e.target.value)}
                  />
                  <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
              </Col>

              <Col>
                <Form.Group className="mb-3" controlId="formPaymentMethod">
                  <Form.Label>Payment Method</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Payment Method"
                    onChange={(e) => setPayment_method(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Check
                  className="mt-3"
                  type="switch"
                  id="formBasicAdmin"
                  label="Admin"
                  checked={!admin}
                  onChange={(e) => {
                    setAdmin(!admin);
                    console.log(admin);
                  }}
                />
              </Col>
            </Row>
          </>
        ) : null}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default SignUpForm;
