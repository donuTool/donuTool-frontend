import { useButtonStore } from "@/stores/useButtonStore";
import donuToolBar from "@/assets/donuToolBar.png";
import DroppableArea from "@/utils/DroppableArea";
import DraggableButton from "@/utils/DraggableButton";

export default function VirtualToolBar({ size }: { size: number }) {
  const buttons = useButtonStore((state) => state.buttons);
  const scale = size / 150;

  return (
    <div className="relative">
      <img
        src={donuToolBar}
        draggable={false}
        className={`h-[${size}px] w-[${size}px] brightness-[1.15]`}
      />
      {buttons
        .filter((button) => button.status === "IN_TOOLBAR")
        .map((button) => (
          <DroppableArea
            key={button.id}
            id={button.id}
            style={{
              position: "absolute",
              top: `${(button.top ?? 0) * scale}px`,
              left: `${(button.left ?? 0) * scale}px`,
              width: `${33.3 * scale}px`,
              height: `${33.3 * scale}px`,
            }}
          >
            <DraggableButton button={button} scale={scale} />
          </DroppableArea>
        ))}
    </div>
  );
}
