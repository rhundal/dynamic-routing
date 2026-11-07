import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Blog from "./pages/Blog";
import PageNotFound from "./pages/PostNotFound";
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/blog/:slug" element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default App;
