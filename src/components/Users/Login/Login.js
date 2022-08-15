import React, { useState } from "react";
import { fetchAllUsers } from "../../../api/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser, user, history }) => {
  // const navigate = useNavigate();
  const [email_input, setEmail] = useState("");
  const [password_input, setPassword] = useState("");

  const [users, setUsers] = useState([]);

  function ValidateEmail() {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email_input)) {
      return true;
    }

    console.log("You have entered an invalid email address!");
    return false;
  }

  // function ValidatePassword() {
  //   if (password_input.length < 6) {
  //     alert("Password must be at least 6 characters.")
  //     return false
  //   }
  //   return true
  // }

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
        checkIfCredsMatchDb(email_input, password_input, users)
      ) {
        console.log("user signed in");
        history.push("/");
      } else {
        console.log("Wrong credentials");
      }
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email:</p>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
          />
        </label>

        <label>
          <p>Password:</p>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="text"
          />
        </label>

        <input type="submit" />
      </form>
    </>
  );
};

export default Login;
