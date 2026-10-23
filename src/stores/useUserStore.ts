import { create } from "zustand";
import type { Button } from "@/stores/types";
import { apiRequest } from "@/api/client";
import {
  getExtensionState,
  resetExtensionStats,
  updateExtensionSettings,
  type ExtensionSettings,
  type ExtensionState,
} from "@/api/extension";
import { fetchUser } from "@/utils/fetchUser";
import { withDefaultButtons } from "@/constants/defaultButtons";

// extension: 새 버전 확장프로그램을 통해 읽고 저장 (게스트/로그인 모두)
// server: 이전 버전 확장프로그램 + 로그인 → 서버 API로 직접 읽고 저장
// none: 확장프로그램이 없음 → 기본값만 보여주고 저장하지 않음
type Source = "extension" | "server" | "none";

type UserState = {
  isLoaded: boolean;
  source: Source;
  isLoggedIn: boolean;
  createdAt: string | null;
  extensionVersion: string | null;
  donuToolActive: boolean;
  buttonsSetting: Button[];
  isDarkMode: boolean | null;
  buttonClickCounts: Record<string, number>;
  load: () => Promise<void>;
  saveSettings: (settings: ExtensionSettings) => Promise<void>;
  resetStats: () => Promise<void>;
};

const fromExtension = (state: ExtensionState) => ({
  source: "extension" as const,
  isLoggedIn: state.isLoggedIn,
  createdAt: state.createdAt,
  extensionVersion: state.version,
  donuToolActive: state.donuToolActive,
  buttonsSetting: withDefaultButtons(state.buttonsSetting),
  isDarkMode: state.isDarkMode,
  buttonClickCounts: state.buttonClickCounts ?? {},
});

export const useUserStore = create<UserState>()((set, get) => ({
  isLoaded: false,
  source: "none",
  isLoggedIn: false,
  createdAt: null,
  extensionVersion: null,
  donuToolActive: false,
  buttonsSetting: withDefaultButtons(),
  isDarkMode: null,
  buttonClickCounts: {},

  load: async () => {
    const extensionState = await getExtensionState();
    if (extensionState) {
      set({ isLoaded: true, ...fromExtension(extensionState) });
      return;
    }

    const user = await fetchUser().catch((error) => {
      console.error("Failed to fetch user data:", error);
      return null;
    });
    if (user) {
      set({
        isLoaded: true,
        source: "server",
        isLoggedIn: true,
        createdAt: user.createdAt ?? null,
        buttonsSetting: withDefaultButtons(user.buttonsSetting),
        isDarkMode: typeof user.isDarkMode === "boolean" ? user.isDarkMode : null,
        buttonClickCounts: user.buttonClickCounts ?? {},
      });
      return;
    }

    set({ isLoaded: true, source: "none", isLoggedIn: false });
  },

  // 화면에 먼저 반영하고 저장한다. 저장에 실패하면 저장된 상태를 다시 불러온다
  saveSettings: async (settings) => {
    const { source, load } = get();
    set(settings);

    try {
      if (source === "extension") {
        set(fromExtension(await updateExtensionSettings(settings)));
      } else if (source === "server") {
        // 툴바 on/off는 이전 버전 확장프로그램에 전달할 방법이 없어 서버 설정만 저장한다
        const { buttonsSetting, isDarkMode, addressOfNewTab } = settings;
        const body = Object.fromEntries(
          Object.entries({ buttonsSetting, isDarkMode, addressOfNewTab }).filter(
            ([, value]) => value !== undefined,
          ),
        );
        if (Object.keys(body).length > 0) {
          await apiRequest("/api/user/me", { method: "PUT", body });
        }
      }
    } catch (error) {
      console.error("Failed to save settings:", error);
      await load();
      throw error;
    }
  },

  resetStats: async () => {
    const { source } = get();
    if (source === "extension") {
      set(fromExtension(await resetExtensionStats()));
    } else if (source === "server") {
      await apiRequest("/api/user/me/stats", { method: "DELETE" });
      set({ buttonClickCounts: {} });
    }
  },
}));
