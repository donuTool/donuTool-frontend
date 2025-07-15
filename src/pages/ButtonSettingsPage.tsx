import Card from "@/components/Card";
import VirtualToolBar from "@/components/VirtualToolBar";
import ButtonsInList from "@/components/ButtonsInList";
import { DndContext } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import { useButtonStore } from "@/stores/useButtonStore";
import { useState } from "react";

export default function ButtonSettingsPage() {
  const [isToolBarOn, setIsToolBarOn] = useState(true);
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

  return (
    <>
      <div className="dark:text-donutool-bright mt-5 text-2xl font-semibold text-neutral-600 transition duration-300">
        설정
      </div>
      <Card
        children={
          <>
            <div
              onClick={toggleToolBar}
              className={`${isToolBarOn ? "bg-green-400 dark:bg-lime-600" : "dark:bg-donutool-middle bg-gray-100"} ml-auto flex h-7 w-12 cursor-pointer items-center rounded-2xl transition-all duration-300`}
            >
              <div
                className={`${
                  isToolBarOn ? "translate-x-4.5" : "translate-x-0"
                } mx-1 h-5.5 w-5.5 rounded-full bg-white transition-transform duration-300`}
              ></div>
            </div>
          </>
        }
        title="툴바"
        width={95}
        height={5}
      />
      <Card
        children={
          <>
            <div
              onClick={toggleToolBar}
              className={`${isToolBarOn ? "bg-green-400 dark:bg-lime-600" : "dark:bg-donutool-middle bg-gray-100"} ml-auto flex h-7 w-12 cursor-pointer items-center rounded-2xl transition-all duration-300`}
            >
              <div
                className={`${
                  isToolBarOn ? "translate-x-4.5" : "translate-x-0"
                } mx-1 h-5.5 w-5.5 rounded-full bg-white transition-transform duration-300`}
              ></div>
            </div>
          </>
        }
        title="다크 테마"
        width={95}
        height={5}
      />
      <DndContext onDragEnd={handleDragEnd}>
        <Card
          children={
            <>
              <VirtualToolBar size={250} />
              <div className="absolute top-27 left-113 z-10 h-0.5 w-20 bg-neutral-500"></div>
              <div className="absolute top-24 left-135 z-10 font-semibold text-neutral-500">
                뒤로 가기
              </div>
              <div className="absolute top-43 left-119 z-10 h-0.5 w-20 bg-neutral-500"></div>
              <div className="absolute top-40 left-141 z-10 font-semibold text-neutral-500">
                앞으로 가기
              </div>
              <div className="absolute top-59 left-113 z-10 h-0.5 w-20 bg-neutral-500"></div>
              <div className="absolute top-56 left-135 z-10 font-semibold text-neutral-500">
                새 탭
              </div>
              <div className="absolute top-72 left-80 z-10 h-7 w-0.5 rotate-45 transform bg-neutral-500"></div>
              <div className="absolute top-[310.3px] left-[231.8px] z-10 h-0.5 w-20 bg-neutral-500"></div>
              <div className="absolute top-74.5 left-37 z-10 font-semibold text-neutral-500">
                다음 탭 가기
              </div>
              <div className="absolute top-59 left-44 z-10 h-0.5 w-20 bg-neutral-500"></div>
              <div className="absolute top-56 left-23 z-10 font-semibold text-neutral-500">
                이전 탭 가기
              </div>
            </>
          }
          title=""
          width={95}
          height={40}
        />
        <Card
          children={<ButtonsInList size={250} />}
          title=""
          width={95}
          height={30}
        />
      </DndContext>
    </>
  );
}
