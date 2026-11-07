// A simple page with a “Log In” button that calls the login() function from the context.

import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function Login() {
  const context = useContext(AuthContext);

  if (!context) return null;

  const login = context.login;
  const isAuthenticated = context.isAuthenticated;

  function loginFunction() {
    if (!isAuthenticated) {
      login();
    }
  }

  return (
    <div>
      <button onClick={loginFunction}> Login</button>
    </div>
  );
}
