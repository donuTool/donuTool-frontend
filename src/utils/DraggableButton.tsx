import { useDraggable } from "@dnd-kit/core";
import type { Button } from "@/stores/types";

export default function DraggableButton({
  button,
  scale,
}: {
  button: Button;
  scale: number;
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: button.id,
  });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
    top:
      button.status === "IN_TOOLBAR"
        ? `${(button.top ?? 0) * scale}px`
        : undefined,
    left:
      button.status === "IN_TOOLBAR"
        ? `${(button.top ?? 0) * scale}px`
        : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className={`flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-300 text-xs font-light text-neutral-600 shadow`}
    >
      <img
        className="h-[60%] w-[60%]"
        src={new URL(`../assets/${button.image}.svg`, import.meta.url).href}
        alt={button.image}
      />{" "}
    </div>
  );
}
