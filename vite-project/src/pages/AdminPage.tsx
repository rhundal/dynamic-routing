import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminPage() {
  const context = useContext(AuthContext);

  if (!context) return null;

  //   const login = context.login;
  const isAuthenticated = context.isAuthenticated;
  const navigate = useNavigate();

  return (
    <>
      {isAuthenticated ? (
        "Welcome To Admin Dashboard"
      ) : (
        <button onClick={() => navigate("/login")}> Back To Login </button>
      )}
    </>
  );
}
