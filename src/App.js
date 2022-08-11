import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminCreateFightCard from "./components/Forms/Admin_CreateFightCard"
import AdminCreateUser from "./components/Forms/Admin_CreateUser"




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


