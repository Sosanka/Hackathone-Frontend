import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/user/Dashboard';
import MyListings from './pages/user/MyListings';
import LiveStocks from './pages/user/LiveStocks';
import Login from "./pages/Login";
import SellerRegister from "./pages/SellerRegister";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
                {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Seller Registration */}
        <Route path="/register" element={<SellerRegister />} />

        <Route path="/home" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/listings" element={<MyListings />} />
        <Route path="/stocks" element={<LiveStocks />} />
      </Routes>
    </Router>
  );
}

export default App;