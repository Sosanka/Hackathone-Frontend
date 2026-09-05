import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  registerUser,
  verifyUserOtp,
  resendUserOtp,
} from "../../../api/services/userAuthService";

import { setUserToken } from "../../../utils/userAuthStorage";

import UserRegisterForm from "../../../components/user-auth/UserRegisterForm";
import UserOtpVerification from "../../../components/user-auth/UserOTPVerification";

export default function UserRegister() {
  const navigate = useNavigate();

  const [step, setStep] = useState("register");
  const [email, setEmail] = useState("");

  // ============================================================
  // REGISTER
  // ============================================================

  const handleRegister = async (formData) => {
    const data = await registerUser(formData);

    setEmail(formData.email);
    setStep("otp");

    return data;
  };

  // ============================================================
  // VERIFY OTP
  // ============================================================

  const handleVerifyOtp = async (otp) => {
    const data = await verifyUserOtp({
      email,
      otp,
    });

    // Store access token
    setUserToken(data.access_token);

    // User authenticated
    navigate("/user/dashboard", {
      replace: true,
    });

    return data;
  };

  // ============================================================
  // RESEND OTP
  // ============================================================

  const handleResendOtp = async () => {
    return await resendUserOtp(email);
  };

  // ============================================================
  // BACK TO REGISTER
  // ============================================================

  const handleBack = () => {
    setStep("register");
  };

  // ============================================================
  // SWITCH TO LOGIN
  // ============================================================

  const handleSwitchToLogin = () => {
    navigate("/login");
  };

  // ============================================================
  // UI
  // ============================================================

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-10">
        <div className="grid w-full overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">
          {/* ======================================================
              LEFT - FORM
          ====================================================== */}

          <div className="p-8 sm:p-10 lg:p-12">
            {/* REGISTER */}
            {step === "register" && (
              <UserRegisterForm
                onSubmit={handleRegister}
                onSwitchToLogin={handleSwitchToLogin}
              />
            )}

            {/* OTP */}
            {step === "otp" && (
              <UserOtpVerification
                email={email}
                onVerify={handleVerifyOtp}
                onResend={handleResendOtp}
                onBack={handleBack}
              />
            )}
          </div>

          {/* ======================================================
              RIGHT - QUICKKY INFORMATION
          ====================================================== */}

          <div className="hidden bg-gradient-to-br from-green-600 to-emerald-700 p-12 text-white md:flex md:flex-col md:items-center md:justify-center">
            <div className="max-w-sm text-center">
              {/* Icon */}
              <div className="mb-6 text-6xl">🥬</div>

              {/* Heading */}
              <h2 className="text-3xl font-bold">Welcome to Quickky</h2>

              {/* Description */}
              <p className="mt-4 leading-7 text-green-50">
                Connect with local farmers and discover fresh surplus produce at
                affordable prices.
              </p>

              {/* Features */}
              <div className="mt-8 space-y-4 text-left">
                {/* Feature 1 */}
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                    ✓
                  </span>

                  <span>Fresh surplus produce</span>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                    ✓
                  </span>

                  <span>Affordable prices</span>
                </div>

                {/* Feature 3 */}
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                    ✓
                  </span>

                  <span>Support local farmers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
