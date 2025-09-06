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
  googleId: string | undefined;
  buttonsSetting: Button[];
  isDarkMode: boolean;
  addressOfNewTab: string;
  isDataErased: boolean;
  setUser: (user: {
    googleId: string;
    buttonsSetting: Button[];
    isDarkMode: boolean;
    addressOfNewTab: string;
  }) => void;
  setButtonsSetting: (
    update: Button[] | ((prev: Button[]) => Button[]),
  ) => void;
  setIsDataErased: (value: boolean) => void;
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      googleId: undefined,
      buttonsSetting: [],
      isDarkMode: false,
      addressOfNewTab: "",
      isDataErased: false,
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
      setIsDataErased: (value: boolean) => set({ isDataErased: value }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
