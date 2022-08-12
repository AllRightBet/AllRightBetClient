import "./app.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Users/Display/Home/Home";
import SignIn from "./components/Users/Display/SignIn/SignIn";
import SignUp from "./components/Users/Display/SignUp/SignUp";

import AdminDashboard from "./components/Admin/Display/AdminDashboard.js";
import AdminCreateFightCard from "./components/Admin/Forms/Admin_CreateFightCard";
import SignUpForm from "./components/Users/Forms/SignUpForm";
import DisplayModels from "./components/DisplayModels";

import GetFightCard from "./components/Users/Display/GetFightCard/GetFightCard";
import Navbar from "./components/Global/Navbar/Navbar";

const App = () => {
  return (
    <React.Fragment>
      <div className="page__container">
        <Navbar />
        <Routes>
          {/* USER INTERFACE */}
          <Route exact path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />

          <Route
            path="/user-bets"
            element={<DisplayModels url="/bet?relative_user=1" />}
          />
          <Route
            path="/user-fight-cards"
            element={<DisplayModels url="/fight-card?relative_user=1" />}
          />
          <Route path="/getFightCard" element={<GetFightCard />} />

          {/* ADMIN INTERFACE */}
          {/* todo : needs admin authentication */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/create-fight-card" element={<AdminCreateFightCard />} />
          <Route path="/create-user" element={<SignUpForm isAdmin={true} />} />

          {/* ADMIN INTERFACE */}
          {/* todo : needs admin authentication */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/create-fight-card" element={<AdminCreateFightCard />} />
          <Route path="/create-user" element={<SignUpForm isAdmin={true} />} />
          <Route path="/all-users" element={<DisplayModels url="/user" />} />
          <Route path="/all-bets" element={<DisplayModels url="/bet" />} />
          <Route path="/all-fight-cards" element={<DisplayModels url="/fight-card" />} />



        </Routes>
      </div>
    </React.Fragment>
  );
};

export default App;
