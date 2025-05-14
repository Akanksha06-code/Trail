import React from "react";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";

import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import Home from "./pages/dashboard/home"
import Income from "./pages/dashboard/income";
import Expense from "./pages/dashboard/Expense";
import Subscription from "./pages/dashboard/Subscription";
import "./index.css";
import UserProvider from "./context/userContext";

const App = ()=> {
  return (
    <UserProvider>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/subscription" element={<Subscription />} />
          
      
        </Routes>
      </Router>
    </div>
    </UserProvider>
  );
};

export default App;
const Root = () => {
// Check if the token exists in local storage
  const isAuthenticated = !!localStorage.getItem("token");
// redirect to the dashboard if authenticated, otherwise redirect to login
  return  isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};