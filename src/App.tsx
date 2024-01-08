import HomePage from "./Page/HomePage";
import TeamPage from "./Page/TeamPage";
import AboutPage from "./Page/AboutPage.tsx";
import BlogPage from "./Page/BlogPage.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
