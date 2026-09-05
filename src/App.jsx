import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/user/Dashboard';
import MyListings from './pages/user/MyListings';
import LiveStocks from './pages/user/LiveStocks';
import Login from "./pages/Login";
import SellerRegister from "./pages/SellerRegister";
import Home from "./pages/Home";
import ProfileUpdatePage from './pages/ProfileUpdatePage'; 
import Onboarding from './pages/user/Onboarding';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        
        {/* Login & Registration */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SellerRegister />} />
        
        {/* Onboarding & Profile */}
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/profile-update" element={<ProfileUpdatePage />} />

        <Route path="/home" element={<Home />} />

        {/* Core Seller Portal Pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/listings" element={<MyListings />} />
        <Route path="/stocks" element={<LiveStocks />} />
      </Routes>
    </Router>
  );
}

export default App;