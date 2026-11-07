// A simple page with a “Log In” button that calls the login() function from the context.

import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  if (!context) return null;

  const login = context.login;

  const handleLogin = () => {
    login();
    navigate("/blog/admin");
  };

  return (
    <div className="flex justify-center items-center">
      <button
        className="bg-blue-500 rounded-xl px-5 py-2"
        onClick={handleLogin}
      >
        {" "}
        Login
      </button>
    </div>
  );
}
