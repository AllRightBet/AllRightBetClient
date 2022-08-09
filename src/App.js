import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
