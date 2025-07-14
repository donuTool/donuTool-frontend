import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ButtonSettingsPage from "./pages/ButtonSettingsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/buttons" element={<ButtonSettingsPage />} />
    </Routes>
  );
}

export default App;
