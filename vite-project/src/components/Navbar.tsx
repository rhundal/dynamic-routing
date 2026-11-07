import { NavLink } from "react-router-dom";

import AuthContext from "../context/AuthContext";
import { useContext } from "react";

export default function Navbar() {
  const context = useContext(AuthContext);

  if (!context) return null;

  // const login = context.login;
  const logout = context.logout;
  const isAuthenticated = context.isAuthenticated;

  const getNavLinkClass = ({ isActive }: { isActive: boolean }): string =>
    `transition-all duration-200 ${
      isActive
        ? "underline decoration-2 font-bold text-blue-600"
        : "text-gray-700 hover:text-blue-500 no-underline"
    }`;

  // turning this off after introducing tailwind so it works properly
  // const activeStyle = ({
  //   isActive,
  // }: {
  //   isActive: boolean;
  // }): React.CSSProperties => ({
  //   textDecoration: isActive ? "underline" : "none",
  //   fontWeight: isActive ? "bold" : "normal",
  // });

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={getNavLinkClass} end>
              Home
            </NavLink>{" "}
          </li>{" "}
          {!isAuthenticated ? (
            <li>
              <NavLink to="/login" className={getNavLinkClass} end>
                {" "}
                Login
              </NavLink>
            </li>
          ) : (
            <div>
              <ul>
                <li>
                  <NavLink to="/admin" className={getNavLinkClass} end>
                    {" "}
                    Admin
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <div className="flex justify-center">
                    <button
                      className="bg-red-500 rounded-xl px-5 py-2"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          )}
          <li>
            <NavLink to="/blog/learning-react" className={getNavLinkClass} end>
              React
            </NavLink>{" "}
          </li>
          <li>
            {/* /blog/react-router will match /blog/:slug */}
            <NavLink to="/blog/react-router" className={getNavLinkClass} end>
              {" "}
              React Router{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog/context-api" className={getNavLinkClass} end>
              Context API{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog/custom-hooks" className={getNavLinkClass} end>
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
