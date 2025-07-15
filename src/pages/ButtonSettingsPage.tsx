import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import { useButtonStore } from "@/stores/useButtonStore";
import { useThemeStore } from "@/stores/useThemeStore";
import Card from "@/components/Card";
import ToggleButton from "@/components/ToggleButton";
import ButtonIndicator from "@/components/ButtonIndicator";
import VirtualToolBar from "@/components/VirtualToolBar";
import ButtonsInList from "@/components/ButtonsInList";

export default function ButtonSettingsPage() {
  const [isToolBarOn, setIsToolBarOn] = useState(true);
  const { isDarkMode, setIsDarkMode } = useThemeStore();
  const setButtons = useButtonStore((state) => state.setButtons);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = String(active.id);
    const overId = String(over.id);

    setButtons((prev) => {
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
    });
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
        설정
      </div>
      <Card
        children={<ToggleButton onClick={toggleToolBar} state={isToolBarOn} />}
        title="툴바"
        width={95}
        height={5}
      />
      <Card
        children={<ToggleButton onClick={toggleTheme} state={isDarkMode} />}
        title="다크 테마"
        width={95}
        height={5}
      />
      <DndContext onDragEnd={handleDragEnd}>
        <Card
          children={
            <>
              <VirtualToolBar size={250} />
              <ButtonIndicator />
            </>
          }
          title="버튼 설정"
          width={95}
          height={40}
        />
        <Card
          children={<ButtonsInList size={250} />}
          title="버튼 목록"
          width={95}
          height={32.5}
        />
      </DndContext>
    </>
  );
}
