import HomePage from "./Page/HomePage";
import TeamPage from "./Page/TeamPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
