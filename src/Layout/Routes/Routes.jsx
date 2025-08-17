import { Routes, Route } from "react-router-dom";

// Example pages (create these files inside src/Pages/)
import HomePage from "../../Pages/Home/Home.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
