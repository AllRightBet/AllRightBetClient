import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Users/Display/Home/Home";
import SignIn from "./components/Users/Display/SignIn/SignIn";
import SignUp from "./components/Users/Display/SignUp/SignUp";

import AdminDashboard from "./components/Admin/Display/AdminDashboard.js";
import AdminCreateFightCard from "./components/Admin/Forms/Admin_CreateFightCard"
import AdminCreateUser from "./components/Admin/Forms/Admin_CreateUser"





const App = () => {
  return (
    <React.Fragment>
      <Routes>

        {/* USER INTERFACE */}
        <Route exact path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />

        {/* ADMIN INTERFACE */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/create-fight-card" element={<AdminCreateFightCard />} />
        <Route path="/create-user" element={<AdminCreateUser />} />

        <Route path="/all-users" element={<AdminDashboard />} />
        <Route path="/all-bets" element={<AdminDashboard />} />
        <Route path="/all-fight-cards" element={<AdminDashboard />} />

      </Routes>
    </React.Fragment>
  );
};


export default App;


