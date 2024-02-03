import React, { useState } from "react";
import { useAuth } from "../context/AutContext";

const RegistrationForm = ({ onLoginClick }) => {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    auth.register(email, password);
  };

  return (
    <form className="form">
      <h3 className="title">Register</h3>
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
      <button onClick={(e) => handleRegister(e)} className="button">
        Register
      </button>
      <p style={{ color: "black" }}>
        Already have an account?{" "}
        <span onClick={onLoginClick} className="link">
          Login here
        </span>
      </p>
    </form>
  );
};

export default RegistrationForm;
