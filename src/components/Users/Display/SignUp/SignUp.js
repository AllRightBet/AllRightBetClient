import React from "react";
import SignUpForm from "../../Forms/SignUp/SignUpForm";

const SignUp = ({ setUser, user }) => {
  return (
    <div>
      <SignUpForm
          isSetting={false}
          isAdmin={false}
          setUser={setUser}
          user={user} />
    </div>
  );
};

export default SignUp;
