import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import PageNotFound from "./pages/PostNotFound";
import PostDetails from "./pages/PostDetails";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <div>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/blog/:slug" element={<PostDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog/admin" element={<AdminPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
