import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import PageNavButton from "@/components/PageNavButton";
import DashboardIcon from "@/assets/dashboard.svg?react";
import QuestionMarkIcon from "@/assets/question-mark.svg?react";
import CircleUserIcon from "@/assets/circle-user.svg?react";
import ChartLineIcon from "@/assets/chart-line.svg?react";
import SettingIcon from "@/assets/setting.svg?react";

export default function BackgroundPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="dark:bg-donutool-bg absolute -z-50 flex h-full w-full items-center justify-center bg-gray-300 transition duration-300">
      <div className="dark:bg-donutool-button relative -z-40 flex h-[95%] w-[50%] flex-col items-center justify-start gap-4 rounded-2xl bg-white shadow-2xl transition duration-300">
        {children}
        <div className="dark:text-donutool-button font-rix absolute top-27 -left-36 rotate-270 transform text-5xl font-black tracking-[-0.067em] text-gray-400 transition duration-300">
          donuTool
        </div>
        <PageNavButton
          name="대시보드"
          icon={DashboardIcon}
          top="top-4"
          active={location.pathname === "/"}
          onClick={() => navigate("/")}
        />
        <PageNavButton
          name="도움말"
          icon={QuestionMarkIcon}
          top="top-17"
          active={location.pathname === "/help"}
          onClick={() => navigate("/help")}
        />
        <PageNavButton
          name="계정"
          icon={CircleUserIcon}
          top="top-30"
          active={location.pathname === "/account"}
          onClick={() => navigate("/account")}
        />
        <PageNavButton
          name="통계"
          icon={ChartLineIcon}
          top="top-43"
          active={location.pathname === "/stats"}
          onClick={() => navigate("/stats")}
        />
        <PageNavButton
          name="환경설정"
          icon={SettingIcon}
          top="top-56"
          active={location.pathname === "/buttons"}
          onClick={() => navigate("/buttons")}
        />
        <ThemeToggleButton />
      </div>
    </div>
  );
}
