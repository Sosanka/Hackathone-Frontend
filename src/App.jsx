import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import SellerRegister from "./pages/SellerRegister";
import SellerDashboard from "./pages/SellerDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Seller Registration */}
        <Route path="/register" element={<SellerRegister />} />

        {/* Seller Dashboard */}
        <Route
          path="/seller/dashboard"
          element={<SellerDashboard />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;