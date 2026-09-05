import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/user/Dashboard';
import MyListings from './pages/user/MyListings';
import LiveStocks from './pages/user/LiveStocks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/listings" element={<MyListings />} />
        <Route path="/stocks" element={<LiveStocks />} />
      </Routes>
    </Router>
  );
}

export default App;