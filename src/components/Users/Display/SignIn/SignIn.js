import React from "react";
import { Link } from "react-router-dom";
import Login from "../../Login/Login";

import "./SignIn.css";

const SignIn = ({ setUser, user }) => {
  return (
    <div className="login-wrapper">
      <Login setUser={setUser} user={user} />
    </div>
  );
};

export default SignIn;
