import React from 'react'


import "./signUpForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';
import { Container, Row, Col } from "react-bootstrap";





const Admin_CreateUser = () => {


  const onSubmit = () => {

  }


  return (
    <Container>
      <Form onSubmit={onSubmit}>
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
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicState">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" />
        </Form.Group>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicZip">
              <Form.Label>Zip/postcode</Form.Label>
              <Form.Control type="text" placeholder="Zip" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicAge">
              <Form.Label>Age</Form.Label>
              <Form.Control type="text" placeholder="Age" />
              <Form.Text className="text-muted">
                Must be 21 years or over to sign up.
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>




        <h1 className='mt-5 mb-3'>ADMIN HIDDEN USER ATTRIBUTES</h1>
        <Row>
          <Col>
            <Form.Label>Authorization Provider</Form.Label>
            <div key='inline-radio' className="mb-3">
              <Form.Check
                inline
                label="Google"
                name="auth_group"
                type='radio'
                id="1"
              />

              <Form.Check
                inline
                label="Twitter"
                name="auth_group"
                type='radio'
                id="2"
              />

              <Form.Check
                inline
                label="GitHub"
                name="auth_group"
                type='radio'
                id="3"
              />

              <Form.Check
                inline
                label="Admin"
                name="auth_group"
                type='radio'
                id="4"
              />

            </div>
          </Col>
        </Row>

        <Row>

          <Col>
            <Form.Label>Wallet Amount</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control aria-label="Wallet Amount" />
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="formPaymentMethod">
              <Form.Label>Payment Method</Form.Label>
              <Form.Control type="text" placeholder="Payment Method" />
            </Form.Group>
          </Col>

        </Row>


        <Row >
          <Col>
            <Form.Check className='mt-3'
              type="switch"
              id="formBasicAdmin"
              label="Admin"
            />
          </Col>
        </Row>


        <Button className="mt-5" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Admin_CreateUser