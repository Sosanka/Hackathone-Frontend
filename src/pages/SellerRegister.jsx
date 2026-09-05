import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SellerRegisterForm from "../components/SellerRegisterForm";
import SellerOtp from "../components/SellerOtp";
import AuthSidePanel from "../components/AuthSidePanel";

import "./Register.css";
import "../components/Auth.css";

function SellerRegister() {
  const navigate = useNavigate();

  const [step, setStep] = useState("register");

  const [email, setEmail] = useState("");

  const handleRegisterSuccess = (registeredEmail) => {
    setEmail(registeredEmail);
    setStep("otp");
  };

  const handleOtpVerified = (response) => {
    console.log(
      "Seller authentication successful",
      response
    );

    navigate("/dashboard");
  };

  const handleBack = () => {
    setStep("register");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="auth-page">

      <div className="auth-container">

        {step === "register" && (
          <SellerRegisterForm
            onSuccess={handleRegisterSuccess}
            onBack={() =>
              navigate("/register")
            }
          />
        )}

        {step === "otp" && (
          <SellerOtp
            email={email}
            onVerified={handleOtpVerified}
            onBack={handleBack}
          />
        )}

        <AuthSidePanel
          onLogin={handleLogin}
        />

      </div>

    </div>
  );
}

export default SellerRegister;