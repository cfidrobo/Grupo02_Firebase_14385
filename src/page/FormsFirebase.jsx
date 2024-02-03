import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import { useAuth } from "../context/AutContext";

function FormsFirebase() {
  const auth = useAuth();
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);

  const handleRegisterClick = () => {
    setLoginFormVisible(false);
  };

  const handleLoginClick = () => {
    setLoginFormVisible(true);
  };

  return (
    <div className="App">
      {isLoginFormVisible ? (
        <LoginForm onRegisterClick={handleRegisterClick} />
      ) : (
        <RegistrationForm onLoginClick={handleLoginClick} />
      )}

      <button onClick={() => auth.logout()} className="button">
        Logout
      </button>
    </div>
  );
}

export default FormsFirebase;
