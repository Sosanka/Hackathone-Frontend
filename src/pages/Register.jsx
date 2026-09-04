import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";
import "./Register.css";
import "../components/Auth.css";

function Register() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);

  const handleCustomer = () => {
    setSelectedRole("customer");
  };

  const handleProvider = () => {
    setSelectedRole("provider");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  if (selectedRole) {
    return (
      <div className="auth-page">
        <div className="auth-container">
          {/* LEFT - REGISTER FORM */}
          <div className="auth-card register-card">
            <h1>Register</h1>
            <p className="auth-subtitle">
              Create a {selectedRole === "customer" ? "Customer" : "Farmer/Seller"} account
            </p>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <input type="text" placeholder="Username" className="form-input" />
              </div>
              <div className="input-group">
                <input type="email" placeholder="Email" className="form-input" />
              </div>
              <div className="input-group">
                <input type="password" placeholder="Password" className="form-input password-input" />
              </div>

              <button type="submit" className="auth-button">
                Register
              </button>
            </form>

            <button
              className="forgot-password"
              onClick={() => setSelectedRole(null)}
              style={{ marginTop: "20px" }}
            >
              Back to Registation
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="auth-side register-side">
            <h2>Already have an account?</h2>
            <button
              className="create-account-button login-button"
              onClick={handleLogin}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="register-page">
      <div className="register-container">

        {/* Header */}
        <div className="register-header">
          <h1>Join Quickky</h1>
          <p>Choose how you want to use Quickky</p>
        </div>

        {/* Role Cards */}
        <div className="role-cards">

          {/* Customer Card */}
          <div className="role-card customer-card">
            <div className="role-icon customer-icon">
              <FaUser />
            </div>
            <h2>I'm a Customer</h2>
            <p className="role-description">
              Find fresh surplus produce directly from local farmers and suppliers at affordable prices.
            </p>
            <ul className="role-features">
              <li>
                <span className="blue-dot"></span>
                Browse available surplus produce
              </li>
              <li>
                <span className="blue-dot"></span>
                Compare prices and quantities
              </li>
              <li>
                <span className="blue-dot"></span>
                Place orders directly with sellers
              </li>
            </ul>
            <button
              className="role-button customer-button"
              onClick={handleCustomer}
            >
              Register as Customer
            </button>
          </div>

          {/* Provider Card */}
          <div className="role-card provider-card">
            <div className="role-icon provider-icon">
              <HiLightningBolt />
            </div>
            <h2>I'm a Farmer/Seller</h2>
            <p className="role-description">
              List your excess farm produce, connect with buyers, and earn from produce that might otherwise go to waste.
            </p>
            <ul className="role-features">
              <li>
                <span className="purple-dot"></span>
                List surplus produce
              </li>
              <li>
                <span className="purple-dot"></span>
               Manage orders and buyers
              </li>
              <li>
                <span className="purple-dot"></span>
                Reduce food waste and increase earnings
              </li>
            </ul>
            <button
              className="role-button provider-button"
              onClick={handleProvider}
            >
              Register as Farmer/Seller
            </button>
          </div>

        </div>

        {/* Login */}
        <div className="login-section">
          <span>Already have an account?</span>
          <button onClick={handleLogin}>
            Login
          </button>
          
        </div>

      </div>
    </div>
  );
}

export default Register;