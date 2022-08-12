import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Users/Display/Home/Home";
import SignIn from "./components/Users/Display/SignIn/SignIn";
import SignUp from "./components/Users/Display/SignUp/SignUp";

<<<<<<< HEAD
import AdminDashboard from "./components/Admin/Display/AdminDashboard.js";
import AdminCreateFightCard from "./components/Admin/Forms/Admin_CreateFightCard"
import SignUpForm from "./components/Users/Forms/SignUpForm";
import DisplayModels from "./components/DisplayModels";


<<<<<<< HEAD



=======
import AdminDashboard from "./components/Admin/AdminDashboard";
=======
import AdminDashboard from "./components/Display/Admin/AdminDashboard";
>>>>>>> fba35d6 (fix imports)
import AdminCreateFightCard from "./components/Forms/Admin_CreateFightCard";
import AdminCreateUser from "./components/Forms/Admin_CreateUser";
import SignUpForm from "./components/Users/Forms/SignUpForm";
import GetFightCard from "./components/GetFightCard/GetFightCard";
<<<<<<< HEAD
>>>>>>> e62d6ca (Add fightcard component and style)
=======
>>>>>>> fba35d6 (fix imports)

const App = () => {




  return (
    <React.Fragment>
      <Routes>
        {/* USER INTERFACE */}
        <Route exact path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
<<<<<<< HEAD
<<<<<<< HEAD

        <Route path="/user-bets" element={<DisplayModels url="/bet?relative_user=1" />} />
        <Route path="/user-fight-cards" element={<DisplayModels url="/fight-card?relative_user=1" />} />
=======
        <Route path="/getFightCard" element={<GetFightCard />} />
>>>>>>> e62d6ca (Add fightcard component and style)
=======
        <Route path="/getFightCard" element={<GetFightCard />} />
>>>>>>> fba35d6 (fix imports)

        {/* ADMIN INTERFACE */}
        {/* todo : needs admin authentication */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/create-fight-card" element={<AdminCreateFightCard />} />
        <Route path="/create-user" element={<SignUpForm isAdmin={true} />} />

        <Route path="/all-users" element={<DisplayModels url="/user" />} />
        <Route path="/all-bets" element={<DisplayModels url="/bet" />} />
        <Route path="/all-fight-cards" element={<DisplayModels url="/fight-card" />} />


<<<<<<< HEAD

=======
        <Route path="/all-users" element={<AdminDashboard />} />
        <Route path="/all-bets" element={<AdminDashboard />} />
        <Route path="/all-fight-cards" element={<AdminDashboard />} />
>>>>>>> e62d6ca (Add fightcard component and style)
      </Routes>
    </React.Fragment>
  );
};

export default App;
