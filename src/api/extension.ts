import { EXTENSION_ID } from "@/config";
import type { Button } from "@/stores/types";

// 확장프로그램 background가 돌려주는 상태 (확장프로그램 1.0.5 이상)
export type ExtensionState = {
  version: string;
  isLoggedIn: boolean;
  createdAt: string | null;
  donuToolActive: boolean;
  buttonsSetting: Button[];
  isDarkMode: boolean | null;
  addressOfNewTab: string | null;
  buttonClickCounts: Record<string, number>;
};

export type ExtensionSettings = {
  buttonsSetting?: Button[];
  isDarkMode?: boolean;
  addressOfNewTab?: string;
  donuToolActive?: boolean;
};

type ExtensionResponse = { data?: ExtensionState; error?: string } | undefined;

// 확장프로그램이 없거나 이 메시지를 모르는 이전 버전이면 undefined
function sendToExtension(message: object): Promise<ExtensionResponse> {
  const runtime = window.chrome?.runtime;
  if (!runtime?.sendMessage) return Promise.resolve(undefined);

  return new Promise((resolve) => {
    try {
      runtime.sendMessage(EXTENSION_ID, message, (response: ExtensionResponse) => {
        if (runtime.lastError) return resolve(undefined);
        resolve(response);
      });
    } catch {
      resolve(undefined);
    }
  });
}

async function request(message: object): Promise<ExtensionState> {
  const response = await sendToExtension(message);
  if (response?.error) throw new Error(response.error);
  if (!response?.data) throw new Error("Extension did not respond");
  return response.data;
}

// 새 버전 확장프로그램이 설치되어 있으면 상태를, 아니면 null
export async function getExtensionState(): Promise<ExtensionState | null> {
  const response = await sendToExtension({ action: "getState" });
  return response?.data ?? null;
}

export const updateExtensionSettings = (settings: ExtensionSettings) =>
  request({ action: "updateSettings", settings });

export const resetExtensionStats = () => request({ action: "resetStats" });
