type PageNavButtonProps = {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  top: string;
  active: boolean;
  onClick: () => void;
};

export default function PageNavButton({
  name,
  icon: Icon,
  top,
  active,
  onClick,
}: PageNavButtonProps) {
  return (
    <button
      className={`${active ? "dark:bg-donutool-dark dark:text-donutool-text bg-gray-400 text-neutral-100" : "dark:bg-donutool-button dark:text-donutool-text bg-gray-100 text-neutral-600"} ${top} group absolute -right-14 cursor-pointer rounded-full p-2 text-[1vw] font-semibold shadow-md transition-all duration-300`}
      onClick={onClick}
    >
      <div
        className={`${active ? "dark:bg-donutool-dark bg-gray-400" : "dark:bg-donutool-button bg-gray-100"} absolute top-0 bottom-0 left-0 flex w-10 items-center justify-center overflow-hidden rounded-full whitespace-nowrap opacity-0 transition-all duration-300 group-hover:w-40 group-hover:opacity-100`}
        style={{ zIndex: 0 }}
      >
        {name}
      </div>
      <Icon
        className={`${active ? "dark:stroke-donutool-text stroke-neutral-100" : "dark:stroke-donutool-text stroke-neutral-600"}relative z-10 h-6 w-6 transition-all duration-300`}
      />
    </button>
  );
}
