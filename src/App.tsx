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
import "@/utils/i18n.ts";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <AlertModal />
      <BackgroundPage>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/help" element={<InstructionsPage />} />
          <Route
            path="/help/question/1"
            element={<QuestionPage title={t("question", { number: 1 })} />}
          />
          <Route
            path="/help/question/2"
            element={<QuestionPage title={t("question", { number: 2 })} />}
          />
          <Route
            path="/help/question/3"
            element={<QuestionPage title={t("question", { number: 3 })} />}
          />
          <Route
            path="/help/question/4"
            element={<QuestionPage title={t("question", { number: 4 })} />}
          />
          <Route
            path="/help/contact"
            element={<QuestionPage title={t("contactUs")} />}
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
