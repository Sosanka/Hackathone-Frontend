import { useState } from "react";

export default function UserOtpVerification({
  email,
  onVerify,
  onResend,
  onBack,
}) {
  const [otp, setOtp] = useState("");

  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // ================================
  // OTP INPUT
  // ================================

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);

    setOtp(value);
    setError("");
  };

  // ================================
  // VERIFY OTP
  // ================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await onVerify(otp);
    } catch (err) {
      setError(
        err?.response?.data?.detail?.message ||
          err?.response?.data?.detail ||
          err?.message ||
          "Invalid OTP.",
      );
    } finally {
      setLoading(false);
    }
  };

  // ================================
  // RESEND OTP
  // ================================

  const handleResend = async () => {
    setResending(true);
    setError("");
    setSuccess("");

    try {
      const data = await onResend();

      setSuccess(data?.message || "A new OTP has been sent to your email.");

      setOtp("");
    } catch (err) {
      setError(
        err?.response?.data?.detail?.message ||
          err?.response?.data?.detail ||
          err?.message ||
          "Unable to resend OTP.",
      );
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="w-full">
      {/* Header */}

      <div className="mb-8 text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
          ✉️
        </div>

        <h1 className="text-3xl font-bold text-gray-900">Verify Your Email</h1>

        <p className="mt-3 text-sm text-gray-500">
          We've sent a 6-digit verification code to
        </p>

        <p className="mt-1 break-all font-semibold text-gray-800">{email}</p>
      </div>

      {/* Form */}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* OTP */}

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Verification Code
          </label>

          <input
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={6}
            value={otp}
            onChange={handleOtpChange}
            placeholder="000000"
            className="w-full rounded-xl border border-gray-300 px-4 py-4 text-center text-2xl font-semibold tracking-[0.5em] text-gray-900 outline-none transition placeholder:tracking-[0.5em] placeholder:text-gray-300 focus:border-green-500 focus:ring-4 focus:ring-green-100"
            autoFocus
            required
          />
        </div>

        {/* Error */}

        {error && (
          <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Success */}

        {success && (
          <div className="rounded-xl border border-green-100 bg-green-50 px-4 py-3 text-sm text-green-600">
            {success}
          </div>
        )}

        {/* Verify */}

        <button
          type="submit"
          disabled={loading || otp.length !== 6}
          className="w-full rounded-xl bg-green-600 px-4 py-3.5 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Verifying..." : "Verify Email"}
        </button>
      </form>

      {/* Resend */}

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">Didn't receive the code?</p>

        <button
          type="button"
          onClick={handleResend}
          disabled={resending}
          className="mt-2 font-semibold text-green-600 transition hover:text-green-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {resending ? "Sending..." : "Resend OTP"}
        </button>
      </div>

      {/* Back */}

      <div className="mt-6 border-t border-gray-100 pt-5 text-center">
        <button
          type="button"
          onClick={onBack}
          className="text-sm text-gray-500 transition hover:text-gray-800"
        >
          ← Back to registration
        </button>
      </div>
    </div>
  );
}
