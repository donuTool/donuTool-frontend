/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL?: string;
  readonly VITE_EXTENSION_ID?: string;
}

interface Window {
  chrome?: {
    runtime?: {
      lastError?: unknown;
      sendMessage: (
        extensionId: string,
        message: unknown,
        // 응답 형태는 메시지마다 달라 호출하는 쪽에서 좁힌다
        callback: (response?: any) => void, // eslint-disable-line @typescript-eslint/no-explicit-any
      ) => void;
    };
  };
}
