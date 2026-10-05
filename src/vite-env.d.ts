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
        callback: (response?: { token?: string | null }) => void,
      ) => void;
    };
  };
}
