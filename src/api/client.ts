import { API_URL, EXTENSION_ID } from "@/config";

// 확장프로그램(externally_connectable)에서 로그인 토큰을 받아온다.
// 확장프로그램이 없거나 게스트 모드면 null
export function getSessionToken(): Promise<string | null> {
  const runtime = window.chrome?.runtime;
  if (!runtime?.sendMessage) return Promise.resolve(null);

  return new Promise((resolve) => {
    runtime.sendMessage(EXTENSION_ID, { action: "getSession" }, (response) => {
      if (runtime.lastError) return resolve(null);
      resolve(response?.token ?? null);
    });
  });
}

export async function apiRequest<T>(
  path: string,
  { method = "GET", body }: { method?: string; body?: unknown } = {},
): Promise<T | null> {
  const token = await getSessionToken();
  if (!token) return null;

  const res = await fetch(`${API_URL}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(body !== undefined && { "Content-Type": "application/json" }),
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    throw new Error(`API request failed: ${res.status}`);
  }

  return res.json();
}
