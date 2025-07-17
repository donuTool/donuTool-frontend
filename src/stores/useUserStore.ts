import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface Button {
  id: string;
  image: string;
  status: string;
  top?: number;
  left?: number;
}
type UserState = {
  googleId: string | null;
  buttonsSetting: Button[];
  isDarkMode: boolean;
  addressOfNewTab: string;
  setUser: (user: {
    googleId: string;
    buttonsSetting: Button[];
    isDarkMode: boolean;
    addressOfNewTab: string;
  }) => void;
  setButtonsSetting: (
    update: Button[] | ((prev: Button[]) => Button[]),
  ) => void;
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      googleId: null,
      buttonsSetting: [],
      isDarkMode: false,
      addressOfNewTab: "",
      setUser: (user) =>
        set({
          googleId: user.googleId,
          buttonsSetting: user.buttonsSetting,
          isDarkMode: user.isDarkMode,
          addressOfNewTab: user.addressOfNewTab,
        }),
      setButtonsSetting: (update) =>
        set((state) => ({
          buttonsSetting:
            typeof update === "function"
              ? update(state.buttonsSetting)
              : update,
        })),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
