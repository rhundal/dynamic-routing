import { NavLink } from "react-router-dom";

import AuthContext from "../context/AuthContext";
import { useContext } from "react";

export default function Navbar() {
  const context = useContext(AuthContext);

  if (!context) return null;

  // const login = context.login;
  const logout = context.logout;
  const isAuthenticated = context.isAuthenticated;

  const activeStyle = ({
    isActive,
  }: {
    isActive: boolean;
  }): React.CSSProperties => ({
    textDecoration: isActive ? "underline" : "none",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>{" "}
          </li>{" "}
          {!isAuthenticated ? (
            <li>
              <NavLink to="/login" style={activeStyle} end>
                {" "}
                Login
              </NavLink>
            </li>
          ) : (
            <div>
              <ul>
                <li>
                  <NavLink to="/admin" style={activeStyle} end>
                    {" "}
                    Admin
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <button onClick={logout}>Logout</button>
                </li>
              </ul>
            </div>
          )}
          <li>
            <NavLink to="/blog/learning-react" style={activeStyle} end>
              React
            </NavLink>{" "}
          </li>
          <li>
            {/* /blog/react-router will match /blog/:slug */}
            <NavLink to="/blog/react-router" style={activeStyle} end>
              {" "}
              React Router{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog/context-api" style={activeStyle} end>
              Context API{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog/custom-hooks" style={activeStyle} end>
              {" "}
              Custom Hooks
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

/*
Navbar/Header:
The application’s main navigation should display a “Log In” link if the user is logged out, and a “Log Out” button and a 
link to the “Admin” page if the user is logged in.


*/
