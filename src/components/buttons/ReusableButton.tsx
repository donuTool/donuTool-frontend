type ReusableButtonProps = {
  name: string;
  onClick: () => void;
};

export default function ReusableButton({ name, onClick }: ReusableButtonProps) {
  return (
    <div
      className="dark:bg-donutool-button dark:text-donutool-text cursor-pointer rounded-[0.5vw] bg-gray-400 px-[1vw] py-[0.2vw] text-neutral-100 shadow-md transition duration-300"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {name}
    </div>
  );
}
