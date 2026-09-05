import { useState } from "react";

export default function UserLoginForm({ onSubmit, onSwitchToRegister }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // Clear error when user types
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      await onSubmit(formData, rememberMe);
    } catch (err) {
      // Handle different error responses from backend
      const errorDetail = err?.response?.data?.detail;

      // Check if it's the custom error object from backend
      if (typeof errorDetail === "object" && errorDetail.code) {
        // Map error codes to user-friendly messages
        const errorMessages = {
          INVALID_CREDENTIALS: "Invalid email or password. Please try again.",
          EMAIL_NOT_VERIFIED:
            "Please verify your email before logging in. Check your inbox for the OTP.",
          ACCOUNT_INACTIVE: "Your account is inactive. Please contact support.",
        };

        setError(
          errorMessages[errorDetail.code] ||
            errorDetail.message ||
            "Login failed.",
        );
      } else if (typeof errorDetail === "string") {
        setError(errorDetail);
      } else {
        setError(err?.message || "Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
        <p className="mt-2 text-gray-500">Sign in to your Quickky account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
          />
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            autoComplete="current-password"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
          />
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between">
          <label className="flex cursor-pointer items-center space-x-2 text-sm text-gray-600">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
            />
            <span>Remember me</span>
          </label>

          <button
            type="button"
            className="text-sm font-medium text-green-600 transition hover:text-green-700"
          >
            Forgot password?
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-green-600 px-4 py-3.5 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-500">
        Don't have an account?
        <button
          type="button"
          onClick={onSwitchToRegister}
          className="ml-1 font-semibold text-green-600 transition hover:text-green-700"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
