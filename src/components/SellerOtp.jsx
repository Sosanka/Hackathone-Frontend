import { useState } from "react";

import {
  verifySellerOtp,
  resendSellerOtp,
} from "../api/services/sellerAuth";

import {
  getApiErrorMessage,
} from "../api/services/getApiError";

function SellerOtp({
  email,
  onVerified,
  onBack,
}) {
  const [otp, setOtp] = useState("");

  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleOtpChange = (e) => {
    const value = e.target.value
      .replace(/\D/g, "")
      .slice(0, 6);

    setOtp(value);
  };

  const handleVerify = async (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      setError("Please enter the 6-digit OTP.");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await verifySellerOtp({
        email,
        otp,
      });

      // Save authentication token
      localStorage.setItem(
        "access_token",
        response.access_token
      );

      onVerified(response);

    } catch (error) {
      setError(
        getApiErrorMessage(
          error,
          "OTP verification failed."
        )
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setResending(true);
    setError("");
    setMessage("");

    try {
      const response =
        await resendSellerOtp(email);

      setMessage(response.message);

      setOtp("");

    } catch (error) {
      setError(
        getApiErrorMessage(
          error,
          "Unable to resend OTP."
        )
      );
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="auth-card register-card">

      <h1>Verify Email</h1>

      <p className="auth-subtitle">
        Enter the OTP sent to your email
      </p>

      <p className="otp-email">
        {email}
      </p>

      <form onSubmit={handleVerify}>

        <div className="input-group">
          <input
            type="text"
            inputMode="numeric"
            placeholder="Enter 6-digit OTP"
            className="form-input otp-input"
            value={otp}
            onChange={handleOtpChange}
            maxLength={6}
            required
          />
        </div>

        {error && (
          <p className="auth-error">
            {error}
          </p>
        )}

        {message && (
          <p className="auth-success">
            {message}
          </p>
        )}

        <button
          type="submit"
          className="auth-button"
          disabled={loading}
        >
          {loading
            ? "Verifying..."
            : "Verify OTP"}
        </button>

      </form>

      <button
        type="button"
        className="forgot-password"
        onClick={handleResend}
        disabled={resending}
      >
        {resending
          ? "Sending OTP..."
          : "Resend OTP"}
      </button>

      <button
        type="button"
        className="forgot-password"
        onClick={onBack}
      >
        Back to Registration
      </button>

    </div>
  );
}

export default SellerOtp;