import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DashboardPage from "@/pages/DashboardPage";
import ButtonSettingsPage from "@/pages/ButtonSettingsPage";
import InstructionsPage from "@/pages/InstructionsPage";
import AccountPage from "@/pages/AccountPage";
import StatsPage from "@/pages/StatsPage";
import BackgroundPage from "@/pages/BackgroundPage";
import QuestionPage from "@/pages/QuestionPage";
import AlertModal from "@/components/AlertModal";
import DeviceCompatibilityChecker from "@/components/DeviceCompatibilityChecker";
import "@/utils/i18n.ts";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <DeviceCompatibilityChecker />
      <AlertModal />
      <BackgroundPage>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/buttons" element={<ButtonSettingsPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/help" element={<InstructionsPage />} />
          <Route
            path="/help/question/1"
            element={
              <QuestionPage title={t("question", { number: 1 })} content={""} />
            }
          />
          <Route
            path="/help/question/2"
            element={
              <QuestionPage title={t("question", { number: 2 })} content={""} />
            }
          />
          <Route
            path="/help/question/3"
            element={
              <QuestionPage title={t("question", { number: 3 })} content={""} />
            }
          />
          <Route
            path="/help/question/4"
            element={
              <QuestionPage title={t("question", { number: 4 })} content={""} />
            }
          />
          <Route
            path="/help/contact"
            element={<QuestionPage title={t("contactUs")} content={""} />}
          />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </BackgroundPage>
    </>
  );
}

export default App;
