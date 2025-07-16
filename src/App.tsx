import { Routes, Route } from "react-router-dom";
import DashboardPage from "@/pages/DashboardPage";
import ButtonSettingsPage from "@/pages/ButtonSettingsPage";
import InstructionsPage from "@/pages/InstructionsPage";
import AccountPage from "@/pages/AccountPage";
import StatsPage from "@/pages/StatsPage";
import BackgroundPage from "@/pages/BackgroundPage";
import QuestionPage from "./pages/QuestionPage";

function App() {
  return (
    <>
      <BackgroundPage>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/help" element={<InstructionsPage />} />
          <Route
            path="/help/question/1"
            element={<QuestionPage title="Question 1" />}
          />
          <Route
            path="/help/question/2"
            element={<QuestionPage title="Question 2" />}
          />
          <Route
            path="/help/question/3"
            element={<QuestionPage title="Question 3" />}
          />
          <Route
            path="/help/question/4"
            element={<QuestionPage title="Question 4" />}
          />
          <Route
            path="/help/contact"
            element={<QuestionPage title="Contact Us" />}
          />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/buttons" element={<ButtonSettingsPage />} />
        </Routes>
      </BackgroundPage>
    </>
  );
}

export default App;
