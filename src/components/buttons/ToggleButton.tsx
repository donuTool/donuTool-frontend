export default function ToggleButton({
  onClick,
  state,
  disabled = false,
}: {
  onClick: () => void;
  state: boolean;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={state}
      disabled={disabled}
      onClick={onClick}
      className={`${state ? "bg-green-400 dark:bg-lime-600" : "dark:bg-donutool-button bg-gray-100"} ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"} mr-[1vw] ml-auto flex h-7 w-16 items-center rounded-2xl transition-all duration-300`}
    >
      <div
        className={`${
          state ? "translate-x-5.5" : "translate-x-0"
        } mx-1 h-5.5 w-8.5 rounded-full bg-white transition-transform duration-300`}
      ></div>
    </button>
  );
}
