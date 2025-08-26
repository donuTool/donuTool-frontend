type ReusableButtonProps = {
  name: string;
  onClick: () => void;
};

export default function ReusableButton({ name, onClick }: ReusableButtonProps) {
  return (
    <div
      className="dark:bg-donutool-middle dark:text-donutool-text cursor-pointer rounded-lg bg-gray-400 px-[5%] py-[1%] text-neutral-100 shadow-md transition duration-300"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {name}
    </div>
  );
}
