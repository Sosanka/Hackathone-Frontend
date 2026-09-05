import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import RequireSeller from "./components/RequireSeller";

import Dashboard from "./pages/user/Dashboard";
import MyListings from "./pages/user/MyListings";
import LiveStocks from "./pages/user/LiveStocks";

import Login from "./pages/LoginPage";
import SellerRegister from "./pages/Register";
import VerifyOtpPage from "./pages/VerifyOtpPage";
import Home from "./pages/Home";

import ProfileUpdatePage from "./pages/ProfileUpdatePage";
import Onboarding from "./pages/user/Onboarding";
import UserRegister from "./pages/user/auth/UserRegister";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Default */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SellerRegister />} />
          <Route path="/verify-otp" element={<VerifyOtpPage />} />
          <Route path="/user/register" element={<UserRegister />} />

          {/* Onboarding & Profile */}
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/profile-update" element={<ProfileUpdatePage />} />

          {/* Home */}
          <Route path="/home" element={<Home />} />

          {/* Seller Portal (guarded) */}
          <Route
            path="/dashboard"
            element={
              <RequireSeller>
                <Dashboard />
              </RequireSeller>
            }
          />
          <Route
            path="/listings"
            element={
              <RequireSeller>
                <MyListings />
              </RequireSeller>
            }
          />
          <Route
            path="/stocks"
            element={
              <RequireSeller>
                <LiveStocks />
              </RequireSeller>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
