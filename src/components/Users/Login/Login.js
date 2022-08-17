import React, { useState } from "react";
import { fetchAllUsers } from "../../../api/auth";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// import { useNavigate } from "react-router-dom";


const Login = ({ setUser, user }) => {
  // const navigate = useNavigate();


  const [email_input, setEmail] = useState("");
  const [password_input, setPassword] = useState("");
  const [users, setUsers] = useState([]);



  function ValidateEmail() {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email_input)) {
      return true;
    }
    return false;
  }

  function ValidatePassword() {
    if (password_input.length < 6) {
      return false
    }
    return true
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const getUsers = async () => {
      const res = await fetchAllUsers();
      setUsers(res.data);
    };

    const checkIfCredsMatchDb = (email, password, userList) => {
      let result = false;
      userList.forEach((item) => {
        if (item.email === email && item.password === password) {
          setUser(item);
          result = true;
        }
      });
      return result;
    };

    getUsers().then(() => {
      if (
        ValidateEmail() &&
        ValidatePassword() &&
        checkIfCredsMatchDb(email_input, password_input, users)
      ) {
        console.log("user signed in");
      } else {
        console.log("Wrong credentials");
      }
    });
  };

  return (
    <>
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Login;
