export default function ToggleButton({
  onClick,
  state,
}: {
  onClick: () => void;
  state: boolean;
}) {
  return (
    <div
      onClick={onClick}
      className={`${state ? "bg-green-400 dark:bg-lime-600" : "dark:bg-donutool-button bg-gray-100"} ml-auto flex h-7 w-16 cursor-pointer items-center rounded-2xl transition-all duration-300`}
    >
      <div
        className={`${
          state ? "translate-x-5.5" : "translate-x-0"
        } mx-1 h-5.5 w-8.5 rounded-full bg-white transition-transform duration-300`}
      ></div>
    </div>
  );
}
