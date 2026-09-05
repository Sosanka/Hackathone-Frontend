import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/Auth.css";
import "../App.css";
import eyeIcon from "../assets/eye-solid-full.svg";
import { loginSeller } from "../api/services/sellerAuth";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await loginSeller(formData);

      localStorage.setItem("access_token", response.access_token);

      console.log("Login successful");
      navigate("/seller/dashboard"); // Navigate to seller dashboard after login
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.detail?.message ||
        err.response?.data?.detail ||
          "Login failed. Please check your credentials.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* LEFT - LOGIN FORM */}
        <div className="auth-card">
          <h1>Login</h1>

          <p className="auth-subtitle">Please login below account detail</p>

          <form onSubmit={handleSubmit}>
                    
            {/* Email Field */}
            <div className="input-group">
              <input 
                type="email" 
                name="email"
                placeholder="Email" 
                className="form-input" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password Field */}
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="form-input password-input"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="eye-toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {/* Replace with your eye icon/SVG */}
                👁
              </button>
            </div>

            {/* Error */}
            {error && <div className="error-message">{error}</div>}

            {/* Login Button */}
            <button type="submit" className="auth-button" disabled={loading}>
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <button
            className="forgot-password"
            onClick={() => console.log("Forgot password")}
          >
            Forgot your password?
          </button>
        </div>
        {/* RIGHT SIDE */}
        <div className="auth-side">
          <h2>Don't have an account?</h2>

          <button
            className="create-account-button"
            onClick={() => navigate("/register")}
          >
            Create account
          </button>

          <div className="terms">
            <p className="terms-title">
              <span>*</span>Terms & conditions.
            </p>

            <p>
              Your privacy and security are important to us. For more
              information on how we use your data read our
            </p>

            <button className="privacy-button">privacy policy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
