import { useUserStore } from "@/stores/useUserStore";
import { useButtonStore } from "@/stores/useButtonStore";

export default function ButtonIndicator() {
  const buttonsSetting = useUserStore((state) => state.buttonsSetting);
  const buttons = useButtonStore((state) => state.buttons);

  const buttonsData = buttonsSetting.length > 0 ? buttonsSetting : buttons;

  return (
    <>
      <div className="dark:bg-donutool-bright absolute top-27 left-113 z-10 h-0.5 w-20 bg-neutral-600 transition duration-300"></div>
      <div className="dark:text-donutool-bright absolute top-24 left-135 z-10 font-semibold text-neutral-600 transition duration-300">
        {buttonsData[0].id}
      </div>
      <div className="dark:bg-donutool-bright absolute top-43 left-119 z-10 h-0.5 w-20 bg-neutral-600 transition duration-300"></div>
      <div className="dark:text-donutool-bright absolute top-40 left-141 z-10 font-semibold text-neutral-600 transition duration-300">
        {buttonsData[1].id}
      </div>
      <div className="dark:bg-donutool-bright absolute top-60 left-113 z-10 h-0.5 w-20 bg-neutral-600 transition duration-300"></div>
      <div className="dark:text-donutool-bright absolute top-57 left-135 z-10 font-semibold text-neutral-600 transition duration-300">
        {buttonsData[2].id}
      </div>
      <div className="dark:bg-donutool-bright absolute top-72 left-80 z-10 h-7 w-0.5 rotate-45 transform bg-neutral-600 transition duration-300"></div>
      <div className="dark:bg-donutool-bright absolute top-[310.3px] left-[231.8px] z-10 h-0.5 w-20 bg-neutral-600 transition duration-300"></div>
      <div className="dark:text-donutool-bright absolute top-74.5 right-124 z-10 font-semibold text-neutral-600 transition duration-300">
        {buttonsData[3].id}
      </div>
      <div className="dark:bg-donutool-bright absolute top-60 left-44 z-10 h-0.5 w-20 bg-neutral-600 transition duration-300"></div>
      <div className="dark:text-donutool-bright absolute top-57 right-137 z-10 font-semibold text-neutral-600 transition duration-300">
        {buttonsData[4].id}
      </div>
    </>
  );
}
