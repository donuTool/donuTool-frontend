import React from "react";
import { useUserStore } from "@/stores/useUserStore";
import { useButtonStore } from "@/stores/useButtonStore";
import donuToolBar from "@/assets/donuToolBar.png";
import DroppableArea from "@/utils/DroppableArea";
import DraggableButton from "@/utils/DraggableButton";
import ButtonIndicator from "@/components/ButtonIndicator";

export default function VirtualToolBar({ size }: { size: number }) {
  const buttonsSetting = useUserStore((state) => state.buttonsSetting);
  const buttons = useButtonStore((state) => state.buttons);
  const scale = size / 150;

  return (
    <div className="relative">
      <img
        src={donuToolBar}
        draggable={false}
        className={`h-[${size}px] w-[${size}px] brightness-[1.15]`}
      />
      {(buttonsSetting.length > 0 ? buttonsSetting : buttons)
        .filter((button) => button.status === "IN_TOOLBAR")
        .map((button) => (
          <React.Fragment key={button.id}>
            <DroppableArea
              key={button.id}
              id={button.id}
              style={{
                position: "absolute",
                top: `${(button.top ?? 0) * scale}px`,
                left: `${(button.left ?? 0) * scale}px`,
                width: `${33.3 * scale}px`,
                height: `${33.3 * scale}px`,
                zIndex: 999,
              }}
            >
              <DraggableButton button={button} scale={scale} />
            </DroppableArea>
          </React.Fragment>
        ))}
      {(buttonsSetting.length > 0 ? buttonsSetting : buttons)
        .filter((button) => button.status === "IN_TOOLBAR")
        .map((button, index) => (
          <React.Fragment key={button.id}>
            <ButtonIndicator
              id={button.id}
              top={(button.top ?? 0) * scale + 26}
              left={(button.left ?? 0) * scale + 60}
              index={index}
            />
          </React.Fragment>
        ))}
    </div>
  );
}
