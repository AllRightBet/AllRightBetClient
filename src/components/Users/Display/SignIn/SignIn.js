import React from "react";
import { Link } from "react-router-dom";
import Login from "../../Forms/Login/Login";


import './SignIn.css';

const SignIn = () => {
  return (
    <div className="login-wrapper">
      <Login/>
      <Link to="/signUp">Create Account</Link>
    </div>
  );
};

export default SignIn;
