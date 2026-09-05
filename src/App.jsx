import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
<<<<<<< HEAD

import Dashboard from "./pages/user/Dashboard";
import MyListings from "./pages/user/MyListings";
import LiveStocks from "./pages/user/LiveStocks";

=======
import Dashboard from "./pages/user/Dashboard";
import MyListings from "./pages/user/MyListings";
import LiveStocks from "./pages/user/LiveStocks";
>>>>>>> main
import Login from "./pages/Login";
import SellerRegister from "./pages/SellerRegister";
import Home from "./pages/Home";
import UserRegister from "./pages/user/auth/UserRegister";

import ProfileUpdatePage from "./pages/ProfileUpdatePage";
import Onboarding from "./pages/user/Onboarding";
import UserRegister from "./pages/user/auth/UserRegister";

function App() {
  return (
    <Router>
      <Routes>

        {/* Default */}
        <Route
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />

        {/* Authentication */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        {/* Login */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SellerRegister />} />
        <Route
          path="/user/register"
          element={<UserRegister />}
        />

        {/* Onboarding & Profile */}
        <Route
          path="/onboarding"
          element={<Onboarding />}
        />

        <Route
          path="/profile-update"
          element={<ProfileUpdatePage />}
        />

        {/* Home */}
        <Route path="/home" element={<Home />} />

<<<<<<< HEAD
        {/* Seller Portal */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/listings"
          element={<MyListings />}
        />

        <Route
          path="/stocks"
          element={<LiveStocks />}
        />


        

=======
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/listings" element={<MyListings />} />
        <Route path="/stocks" element={<LiveStocks />} />
        <Route path="/user/register" element={<UserRegister />} />
>>>>>>> main
      </Routes>
    </Router>
  );
}

export default App;
