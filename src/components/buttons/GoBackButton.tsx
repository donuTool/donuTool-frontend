import { useNavigate } from "react-router-dom";
import GoBackIcon from "@/assets/chevron-left.svg?react";

export default function GoBackButton() {
  const navigate = useNavigate();

  const goBackToMainPage = () => {
    navigate("/help");
  };

  return (
    <button
      onClick={goBackToMainPage}
      className="dark:bg-donutool-middle dark:text-donutool-text absolute top-3 left-3 flex cursor-pointer items-center justify-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-neutral-600 shadow transition duration-300 hover:shadow-md"
    >
      <GoBackIcon />
    </button>
  );
}
