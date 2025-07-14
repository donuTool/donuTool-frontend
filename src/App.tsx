import { Routes, Route } from "react-router-dom";
import DashboardPage from "@/pages/DashboardPage";
import ButtonSettingsPage from "@/pages/ButtonSettingsPage";
import ThemeToggleButton from "./components/ThemeToggleButton";

function App() {
  return (
    <>
      <div className="dark:bg-donutool-bg absolute -z-50 flex h-full w-full items-center justify-center bg-gray-300 transition duration-300">
        <div className="dark:bg-donutool-button -z-40 h-[95%] w-[50%] rounded-2xl bg-white shadow-2xl transition duration-300"></div>
      </div>
      <ThemeToggleButton />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/buttons" element={<ButtonSettingsPage />} />
      </Routes>
    </>
  );
}

export default App;
