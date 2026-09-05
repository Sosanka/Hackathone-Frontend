import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import FormField from "../components/FormField";
import AlertBanner from "../components/AlertBanner";
import { verifySellerOtp, resendSellerOtp } from "../api/services/authService";
import { useAuth } from "../context/AuthContext";

export default function VerifyOtpPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { refreshSeller } = useAuth();

  const [email, setEmail] = useState(location.state?.email || "");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResending, setIsResending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsSubmitting(true);
    try {
      const result = await verifySellerOtp({ email, otp });
      setSuccess(result.message || "Email verified.");

      if (result.access_token) {
        await refreshSeller();
        navigate("/dashboard", { replace: true });
      } else {
        navigate("/login", {
          replace: true,
          state: { verifiedEmail: email },
        });
      }
    } catch (err) {
      const remaining = err.attempts_remaining;
      setError(
        remaining !== undefined
          ? `${err.message} (${remaining} attempt${remaining === 1 ? "" : "s"} remaining)`
          : err.message || "Verification failed.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleResend() {
    setError("");
    setSuccess("");
    setIsResending(true);
    try {
      const result = await resendSellerOtp({ email });
      setSuccess(result.message || "A new code has been sent.");
    } catch (err) {
      setError(err.message || "Could not resend the code.");
    } finally {
      setIsResending(false);
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-50 px-5 py-12 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      {/* Decorative Icons */}
      <svg
        className="absolute top-12 right-12 w-16 h-16 text-green-300 opacity-20"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
      <svg
        className="absolute bottom-12 left-12 w-20 h-20 text-emerald-300 opacity-20 transform rotate-12"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>

      <div className="relative w-full max-w-[440px] bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-green-100 px-9 py-10 transition-all duration-300 hover:shadow-green-200/50">
        {/* Decorative Top Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 rounded-t-2xl" />

        {/* Corner Accents */}
        <div className="absolute top-3 right-3 w-12 h-12 border-r-2 border-t-2 border-green-200 rounded-tr-xl opacity-50"></div>
        <div className="absolute bottom-3 left-3 w-12 h-12 border-l-2 border-b-2 border-green-200 rounded-bl-xl opacity-50"></div>

        {/* Icon/Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-200/50">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
        </div>

        <p className="font-mono text-[11px] tracking-[0.2em] text-green-600 mb-3 text-center uppercase font-semibold">
          Email Verification
        </p>
        <h1 className="font-serif text-[32px] font-bold leading-tight text-green-800 mb-2 text-center">
          Confirm Your Email
        </h1>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-8 text-center">
          Enter the 6-digit verification code
          <br />
          <span className="text-sm text-green-600">
            sent to your email address
          </span>
        </p>

        <AlertBanner type="error">{error}</AlertBanner>
        <AlertBanner type="success">{success}</AlertBanner>

        <form onSubmit={handleSubmit} noValidate className="space-y-[20px]">
          <div className="space-y-1">
            <FormField
              id="email"
              label="Email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-green-400 focus:ring-2 focus:ring-green-200 transition-all duration-300 outline-none"
            />
          </div>

          <div className="space-y-1">
            <FormField
              id="otp"
              label="Verification code"
              type="text"
              inputMode="numeric"
              pattern="\d{6}"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
              required
              otp
              placeholder="000000"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-green-400 focus:ring-2 focus:ring-green-200 transition-all duration-300 outline-none text-center text-2xl tracking-[0.5em] font-mono"
            />
            {otp.length === 6 && (
              <div className="flex justify-end">
                <span className="text-xs text-green-600 flex items-center">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Code complete
                </span>
              </div>
            )}
          </div>

          <button
            className="w-full py-3.5 px-4 text-[15px] font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:from-gray-300 disabled:to-gray-400 disabled:text-gray-600 disabled:cursor-not-allowed rounded-xl transition-all duration-300 shadow-lg shadow-green-200/50 hover:shadow-xl hover:shadow-green-300/50 transform hover:scale-[1.02] active:scale-[0.98]"
            type="submit"
            disabled={isSubmitting || otp.length !== 6}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Verifying…
              </span>
            ) : (
              "Verify and continue"
            )}
          </button>
        </form>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-green-200"></div>
          <span className="px-4 text-xs text-gray-400 font-medium">OR</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-green-200"></div>
        </div>

        <div className="mt-6 flex flex-col space-y-3">
          <button
            className="w-full py-3 px-4 text-[14px] font-medium text-green-600 bg-green-50 hover:bg-green-100 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed rounded-xl transition-all duration-300 border border-green-200 hover:border-green-300"
            type="button"
            onClick={handleResend}
            disabled={isResending || !email}
          >
            {isResending ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-4 w-4 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending…
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Resend code
              </span>
            )}
          </button>

          <Link
            className="w-full py-2.5 px-4 text-[14px] text-gray-500 hover:text-gray-700 text-center transition-colors duration-200 rounded-xl hover:bg-gray-50"
            to="/login"
          >
            ← Back to sign in
          </Link>
        </div>

        {/* Trust Badge */}
        <div className="mt-6 flex justify-center space-x-4 text-xs text-gray-400">
          <span className="flex items-center">
            <svg
              className="w-3 h-3 mr-1 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Secure
          </span>
          <span className="flex items-center">
            <svg
              className="w-3 h-3 mr-1 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Verified
          </span>
          <span className="flex items-center">
            <svg
              className="w-3 h-3 mr-1 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Encrypted
          </span>
        </div>
      </div>
    </div>
  );
}
