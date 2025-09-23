import React from "react";
import { useUserStore } from "@/stores/useUserStore";
import { useButtonStore } from "@/stores/useButtonStore";
import donuToolBar from "@/assets/donuToolBar.png";
import DroppableArea from "@/utils/DroppableArea";
import DraggableButton from "@/utils/DraggableButton";
import ButtonIndicator from "@/components/ButtonIndicator";

export default function VirtualToolBar({
  size,
  showIndicators,
}: {
  size: number;
  showIndicators: boolean;
}) {
  const buttonsSetting = useUserStore((state) => state.buttonsSetting);
  const buttons = useButtonStore((state) => state.buttons);
  const scale = size / 80;

  return (
    <div className="relative flex justify-center">
      <img
        src={donuToolBar}
        draggable={false}
        className={`h-[${size + 33}%] w-[${size + 33}%] brightness-[1.15]`}
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
                top: `${showIndicators ? (button.top ?? 0) * scale * 0.95 : (button.top ?? 0) * scale * 0.9}vw`,
                left: `${showIndicators ? (button.left ?? 0) * scale * 0.95 + 13 : (button.left ?? 0) * scale * 0.92}vw`,
                width: `${32 * scale}vw`,
                height: `${32 * scale}vw`,
                zIndex: 999,
              }}
            >
              <DraggableButton button={button} />
            </DroppableArea>
          </React.Fragment>
        ))}
      {showIndicators &&
        (buttonsSetting.length > 0 ? buttonsSetting : buttons)
          .filter((button) => button.status === "IN_TOOLBAR")
          .map((button, index) => (
            <React.Fragment key={button.id}>
              <ButtonIndicator
                id={button.id}
                top={(button.top ?? 0) * scale * 0.95}
                left={(button.left ?? 0) * scale * 0.95 + 13}
                index={index}
              />
            </React.Fragment>
          ))}
    </div>
  );
}
