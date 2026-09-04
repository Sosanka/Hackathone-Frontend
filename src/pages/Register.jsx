
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "../components/Auth.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      // API integration will go here
      console.log("Register data:", formData);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSuccess("Account created successfully!");

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.detail ||
        "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-container register-container">

        {/* LEFT - REGISTER FORM */}
        <div className="auth-card register-card">

          <h1>Create Account</h1>

          <p className="auth-subtitle">
            Please register below account detail
          </p>

          <form onSubmit={handleSubmit}>

            {/* First Name */}
            <div className="input-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Last Name */}
            <div className="input-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="input-group password-group">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={
                  showPassword ? "Hide password" : "Show password"
                }
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            {/* Error */}
            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            {/* Success */}
            {success && (
              <div className="success-message">
                {success}
              </div>
            )}

            {/* Create Button */}
            <button
              type="submit"
              className="auth-button"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create"}
            </button>

          </form>

        </div>

        {/* RIGHT SIDE */}
        <div className="auth-side register-side">

          <h2>Already an account holder?</h2>

          <button
            className="create-account-button login-button"
            onClick={() => navigate("/login")}
          >
            Log in
          </button>

          <div className="terms">

            <p className="terms-title">
              <span>*</span>Terms & conditions.
            </p>

            <p>
              Your privacy and security are important to us.
              For more information on how we use your data
              read our
            </p>

            <button className="privacy-button">
              privacy policy
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;