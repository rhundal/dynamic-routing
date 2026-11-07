import { NavLink } from "react-router-dom";

export default function Navbar() {
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
          </li>
          <li>
            <NavLink to="/login" style={activeStyle} end>
              {" "}
              Login
            </NavLink>
          </li>
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
The application’s main navigation should display a “Log In” link if the user is logged out, and a “Log Out” button and a link to the “Admin” page if the user is logged in.
Actual authentication is not required, but you should use the AuthContext to manage the authentication state and switch between the login and logout states when the buttons are clicked.

*/
