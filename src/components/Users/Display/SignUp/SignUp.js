import React from "react";
import SignUpForm from "../../Forms/SignUpForm";

const SignUp = ({ setUser, user }) => {
  return (
    <div>
      <SignUpForm isAdmin={false} />
    </div>
  );
};

export default SignUp;
