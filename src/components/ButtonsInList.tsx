import { useUserStore } from "@/stores/useUserStore";
import { useButtonStore } from "@/stores/useButtonStore";
import DroppableArea from "@/utils/DroppableArea";
import DraggableButton from "@/utils/DraggableButton";

export default function ButtonsInList({ size }: { size: number }) {
  const buttonsSetting = useUserStore((state) => state.buttonsSetting);
  const buttons = useButtonStore((state) => state.buttons);
  const scale = size / 170;

  return (
    <div className="grid grid-cols-3 gap-x-5 gap-y-3">
      {(buttonsSetting.length > 0 ? buttonsSetting : buttons)
        .filter((button) => button.status === "IN_LIST")
        .map((button) => (
          <DroppableArea
            key={button.id}
            id={button.id}
            style={{
              width: `${33.3 * scale}px`,
              height: `${33.3 * scale}px`,
              zIndex: 990,
            }}
          >
            <DraggableButton button={button} scale={scale} />
          </DroppableArea>
        ))}
    </div>
  );
}
