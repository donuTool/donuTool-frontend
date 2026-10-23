import { useThemeStore } from "@/stores/useThemeStore";
import { useUserStore } from "@/stores/useUserStore";

// 테마를 바꾸고 확장프로그램(또는 서버)에도 저장한다
export function useToggleTheme() {
  const { isDarkMode, setIsDarkMode } = useThemeStore();
  const saveSettings = useUserStore((state) => state.saveSettings);

  const toggleTheme = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    saveSettings({ isDarkMode: next }).catch(() => setIsDarkMode(!next));
  };

  return { isDarkMode, toggleTheme };
}
