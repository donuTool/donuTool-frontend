import { useState } from "react";
import { useTranslation } from "react-i18next";
import { DndContext } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import { useButtonStore } from "@/stores/useButtonStore";
import { useThemeStore } from "@/stores/useThemeStore";
import { useUserStore } from "@/stores/useUserStore";
import type { Button } from "@/stores/types";
import Card from "@/components/Card";
import ToggleButton from "@/components/buttons/ToggleButton";
import VirtualToolBar from "@/components/VirtualToolBar";
import ButtonsInList from "@/components/ButtonsInList";

export default function ButtonSettingsPage() {
  const { t } = useTranslation();

  const [isToolBarOn, setIsToolBarOn] = useState(true);
  const { isDarkMode, setIsDarkMode } = useThemeStore();
  const { googleId, buttonsSetting, setButtonsSetting } = useUserStore();
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
      const temp = {
        id: newButtons[activeIndex].id,
        image: newButtons[activeIndex].image,
      };
      newButtons[activeIndex].id = newButtons[overIndex].id;
      newButtons[activeIndex].image = newButtons[overIndex].image;
      newButtons[overIndex].id = temp.id;
      newButtons[overIndex].image = temp.image;

      return newButtons;
    };

    if (buttonsSetting.length > 0) {
      setButtonsSetting(updateButtons);
      fetch(`http://localhost:3001/api/user/${googleId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ buttonsSetting: updateButtons }),
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
      <Card
        children={<ToggleButton onClick={toggleToolBar} state={isToolBarOn} />}
        title={t("toolBar")}
        width={95}
        height={5}
      />
      <Card
        children={<ToggleButton onClick={toggleTheme} state={isDarkMode} />}
        title={t("darkTheme")}
        width={95}
        height={5}
      />
      <DndContext onDragEnd={handleDragEnd}>
        <Card
          children={
            <>
              <VirtualToolBar size={250} />
              {/* <ButtonIndicator /> */}
            </>
          }
          title={t("buttonsSettings")}
          width={95}
          height={40}
        />
        <Card
          children={<ButtonsInList size={250} />}
          title={t("buttonsList")}
          width={95}
          height={32.5}
        />
      </DndContext>
    </>
  );
}
