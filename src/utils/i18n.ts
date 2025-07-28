import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      dashboard: "Dashboard",
      help: "Help",
      account: "Account",
      stats: "Analytics",
      settings: "Settings",
      user: "User",
      loggedInTime: "Logged in at",
      usedTime: "Time used",
      welcome: "Welcome, {{name}}!",
      buttonsSetting: "Buttons Setting",
      faq: "FAQ",
      quickStartGuide: "Quick Start Guide",
      contactUs: "Problem?",
      contact: "Contact",
      version: "Version",
      community: "Community",
      question: "Question {{number}}",
      topThreeButtons: "Top 3 Most Used Buttons",
      recentUsedButtons: "Button Clicks in the Last 7 Days",
      usedTimePerDay: "Daily Usage Time",
      frequentlyVisitiedWebsites: "Top 3 Frequently Visited Websites",
      eraseData: "Clear Data",
      toolBar: "Toggle Toolbar",
      darkTheme: "Toggle Theme",
      buttonsList: "Buttons List",
    },
  },
  ko: {
    translation: {
      dashboard: "대시보드",
      help: "도움말",
      account: "계정",
      stats: "통계",
      settings: "설정",
      user: "사용자",
      loggedInTime: "로그인한 시간",
      usedTime: "사용 시간",
      welcome: "{{name}}님, 환영합니다!",
      buttonsSetting: "버튼 세팅",
      faq: "자주 묻는 질문",
      quickStartGuide: "빠른 시작 가이드",
      contactUs: "문의",
      contact: "문의하기",
      version: "버전",
      community: "커뮤니티",
      question: "질문 {{number}}",
      topThreeButtons: "가장 많이 쓴 버튼 TOP 3",
      recentUsedButtons: "최근 7일 간 버튼 클릭 횟수",
      usedTimePerDay: "하루 사용 시간",
      frequentlyVisitiedWebsites: "자주 방문한 웹사이트 TOP 3",
      eraseData: "데이터 초기화",
      toolBar: "툴바",
      darkTheme: "테마",
      buttonsList: "버튼 목록",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ko",
    supportedLngs: ["en", "ko"],
    load: "languageOnly",
    detection: {
      order: ["navigator"],
      caches: [],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
