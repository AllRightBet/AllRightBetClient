// FORM COMPONENT EXTENTION (unused)

import React from 'react'


import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';
import { Container, Row, Col } from "react-bootstrap";
import SignUpForm from '../../Users/Forms/SignUpForm';





const Admin_CreateUser = () => {

  return (
    <>
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

    </>
  )
}

export default Admin_CreateUser