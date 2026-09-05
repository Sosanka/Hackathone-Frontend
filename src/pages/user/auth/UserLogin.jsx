import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../../api/services/userAuthService";

import { setUserToken } from "../../../utils/userAuthStorage";

import UserLoginForm from "../../../components/user-auth/UserLoginForm";

export default function UserLogin() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ================================
  // LOGIN
  // ================================

  const handleLogin = async (formData, rememberMe) => {
    setLoading(true);
    setError("");

    try {
      const data = await loginUser(formData);

      // Store access token
      setUserToken(data.access_token, rememberMe);

      // User authenticated
      navigate("/user/dashboard");
    } catch (err) {
      // Handle error from form
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ================================
  // SWITCH TO REGISTER
  // ================================

  const handleSwitchToRegister = () => {
    navigate("/user/register");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-10">
        <div className="grid w-full overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">
          {/* ==========================
              LEFT - Login Form
          ========================== */}

          <div className="p-8 sm:p-10 lg:p-12">
            <UserLoginForm
              onSubmit={handleLogin}
              onSwitchToRegister={handleSwitchToRegister}
            />
          </div>

          {/* ==========================
              RIGHT - Branding
          ========================== */}

          <div className="hidden bg-gradient-to-br from-green-600 to-emerald-700 p-12 text-white md:flex md:flex-col md:items-center md:justify-center">
            <div className="max-w-sm text-center">
              <div className="mb-6 text-6xl">🥬</div>

              <h2 className="text-3xl font-bold">Welcome Back!</h2>

              <p className="mt-4 leading-7 text-green-50">
                Sign in to continue your journey with local farmers and discover
                fresh surplus produce at affordable prices.
              </p>

              <div className="mt-8 space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                    ✓
                  </span>

                  <span>Fresh surplus produce</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                    ✓
                  </span>

                  <span>Affordable prices</span>
                </div>

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
