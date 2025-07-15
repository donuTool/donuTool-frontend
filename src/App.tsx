import { Routes, Route } from "react-router-dom";
import DashboardPage from "@/pages/DashboardPage";
import ButtonSettingsPage from "@/pages/ButtonSettingsPage";
import InstructionsPage from "@/pages/InstructionsPage";
import AccountPage from "@/pages/AccountPage";
import StatsPage from "@/pages/StatsPage";
import BackgroundPage from "@/pages/BackgroundPage";

function App() {
  return (
    <>
      <BackgroundPage>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/help" element={<InstructionsPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/buttons" element={<ButtonSettingsPage />} />
        </Routes>
      </BackgroundPage>
    </>
  );
}

export default App;
