import { useDraggable } from "@dnd-kit/core";
import type { Button } from "@/stores/types";
import QuestionIcon from "@/assets/question-mark.svg?react";

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
      <QuestionIcon
        className={`block stroke-neutral-500`}
        style={{ width: `${20.8 * scale}px`, height: `${20.8 * scale}px` }}
      />
    </div>
  );
}
