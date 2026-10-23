import { apiRequest } from "@/api/client";
import type { Button } from "@/stores/types";

export type User = {
  googleId: string;
  buttonClickCounts?: Record<string, number>;
  buttonsSetting?: Button[];
  isDarkMode?: boolean;
  addressOfNewTab?: string;
  createdAt?: string;
};

// 로그인하지 않은 경우 null
export function fetchUser() {
  return apiRequest<User>("/api/user/me");
}
