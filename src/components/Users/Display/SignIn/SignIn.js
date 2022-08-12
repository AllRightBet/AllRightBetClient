import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <h3>Log In</h3>
      <Link to="/signUp">Create Account</Link>
    </div>
  );
};

export default SignIn;
