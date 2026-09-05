function AuthSidePanel({ onLogin }) {
  return (
    <div className="auth-side register-side">

      <h2>Already have an account?</h2>

      <button
        className="create-account-button login-button"
        onClick={onLogin}
      >
        Sign In
      </button>

    </div>
  );
}

export default AuthSidePanel;