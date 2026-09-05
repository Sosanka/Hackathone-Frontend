import { useState } from "react";
import "../pages/Register.css";
import "../components/Auth.css";

import { registerSeller } from "../api/services/sellerAuth";

function SellerRegisterForm({ onSuccess, onBack }) {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await registerSeller(formData);
      onSuccess(formData.email);
    } catch (err) {
      setError(err.response?.data?.detail?.message || err.response?.data?.detail || err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-card register-card">
      <h1>Seller Registration</h1>
      <p className="auth-subtitle">Create a Farmer/Seller account</p>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-input"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="form-input"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-input"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-input password-input"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        {error && <p style={{ color: "red", fontSize: "14px", marginTop: "10px", marginBottom: "10px" }}>{error}</p>}

        <button type="submit" className="auth-button" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      <button
        type="button"
        className="forgot-password"
        onClick={onBack}
        style={{ marginTop: "20px" }}
      >
        Back to Role Selection
      </button>
    </div>
  );
}

export default SellerRegisterForm;