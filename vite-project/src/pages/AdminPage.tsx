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
      <div className="flex justify-center items-center flex-col gap-5">
        <main className="flex justify-center border-1 border-gray-200 rounded-xl w-[1000px] p-10">
          {isAuthenticated ? (
            "Welcome To Admin Dashboard"
          ) : (
            <button
              className="bg-green-500 rounded-xl px-5 py-2"
              onClick={() => navigate("/login")}
            >
              {" "}
              Back To Login{" "}
            </button>
          )}
        </main>
      </div>
    </>
  );
}
