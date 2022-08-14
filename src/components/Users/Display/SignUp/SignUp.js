import React, { useEffect } from "react";
import SignUpForm from "../../Forms/SignUpForm";

const SignUp = ({ setUser, user }) => {
  useEffect(() => {
    // Update the document title using the browser API
    console.log(user);
  }, [user]);

  return (
    <div>
      <SignUpForm isAdmin={false} setUser={setUser} user={user} />
    </div>
  );
};

export default SignUp;
