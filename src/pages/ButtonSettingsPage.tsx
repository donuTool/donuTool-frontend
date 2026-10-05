import { useState } from "react";
import { useTranslation } from "react-i18next";
import { DndContext } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import { useButtonStore } from "@/stores/useButtonStore";
import { useThemeStore } from "@/stores/useThemeStore";
import { useUserStore } from "@/stores/useUserStore";
import { apiRequest } from "@/api/client";
import type { Button } from "@/stores/types";
import Card from "@/components/Card";
import ToggleButton from "@/components/buttons/ToggleButton";
import VirtualToolBar from "@/components/VirtualToolBar";
import ButtonsInList from "@/components/ButtonsInList";

export default function ButtonSettingsPage() {
  const { t } = useTranslation();

  const [isToolBarOn, setIsToolBarOn] = useState(true);
  const { isDarkMode, setIsDarkMode } = useThemeStore();
  const { buttonsSetting, setButtonsSetting } = useUserStore();
  const setButtons = useButtonStore((state) => state.setButtons);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = String(active.id);
    const overId = String(over.id);

    const updateButtons = (prev: Button[]) => {
      const activeIndex = prev.findIndex((btn) => btn.id === activeId);
      const overIndex = prev.findIndex((btn) => btn.id === overId);

      if (activeIndex < 0 || overIndex < 0) return prev;

      const newButtons = [...prev];
      const activeButton = prev[activeIndex];
      const overButton = prev[overIndex];
      newButtons[activeIndex] = {
        ...activeButton,
        id: overButton.id,
        image: overButton.image,
      };
      newButtons[overIndex] = {
        ...overButton,
        id: activeButton.id,
        image: activeButton.image,
      };

      return newButtons;
    };

    if (buttonsSetting.length > 0) {
      const newButtonsSetting = updateButtons(buttonsSetting);
      setButtonsSetting(newButtonsSetting);
      apiRequest("/api/user/me", {
        method: "PUT",
        body: { buttonsSetting: newButtonsSetting },
      }).catch((err) =>
        console.error("Failed to update buttonsSetting to server:", err),
      );
    } else {
      setButtons(updateButtons);
    }
  };

  const toggleToolBar = () => {
    setIsToolBarOn(!isToolBarOn);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className="dark:text-donutool-bright mt-5 text-2xl font-semibold text-neutral-600 transition duration-300">
        {t("settings")}
      </div>
      <div className="mb-[3%] flex h-full w-full flex-col items-center justify-between">
        <Card
          children={
            <ToggleButton onClick={toggleToolBar} state={isToolBarOn} />
          }
          title={t("toolBar")}
          width={95}
          height={10}
        />
        <Card
          children={<ToggleButton onClick={toggleTheme} state={isDarkMode} />}
          title={t("darkTheme")}
          width={95}
          height={10}
        />
        <DndContext onDragEnd={handleDragEnd}>
          <Card
            children={<VirtualToolBar size={12} showIndicators={true} />}
            title={t("buttonsSettings")}
            width={95}
            height={40}
          />
          <Card
            children={<ButtonsInList size={250} />}
            title={t("buttonsList")}
            width={95}
            height={35}
          />
        </DndContext>
      </div>
    </>
  );
}
