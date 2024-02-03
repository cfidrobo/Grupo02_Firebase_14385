import React, { useState } from "react";
import { useAuth } from "../context/AutContext";

const LoginForm = ({ onRegisterClick }) => {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    auth.login(email, password);
  };

  const handleGoogle = (e) => {
    e.preventDefault();
    auth.loginWithGoogle();
  };

  return (
    <div>
      {auth.user && auth.user.displayName && (
        <h5>Welcome: {auth.user.displayName}</h5>
      )}

    <form className="form">
      <h3 className="title">Login</h3>
      <input
        onChange={(e) => setEmail(e.target.value)}
        className="input"
        type="email"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        className="input"
        type="password"
        placeholder="Password"
      />
      <button onClick={(e) => handleLogin(e)} className="button">
        Login
      </button>
      <button onClick={(e) => handleGoogle(e)} className="button">
        Login with Google
      </button>
      <p style={{ color: "black" }}>
        Not registered yet?{" "}
        <span onClick={onRegisterClick} className="link">
          Register here
        </span>
      </p>
    </form>
    </div>
  );
};

export default LoginForm;
