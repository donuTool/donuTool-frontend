import { apiRequest } from "@/api/client";
import type { Button } from "@/stores/types";

export type User = {
  googleId: string;
  buttonClickCounts: object;
  buttonsSetting: Button[];
  isDarkMode: boolean;
  addressOfNewTab: string;
};

// 로그인하지 않은 경우 null
export function fetchUser() {
  return apiRequest<User>("/api/user/me");
}
