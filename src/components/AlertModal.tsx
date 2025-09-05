import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ReusableButton from "@/components/buttons/ReusableButton";

export default function AlertModal() {
  const { t } = useTranslation();
  const [isModalClosed, setIsModalClosed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (isModalClosed) return null;

  return (
    <div
      className={`absolute z-50 flex h-full w-full cursor-pointer items-center justify-center bg-black/50 backdrop-blur-xs transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"} `}
      onClick={() => {
        setIsVisible(false);
        setTimeout(() => setIsModalClosed(true), 300);
      }}
    >
      <div
        className={`dark:bg-donutool-middle dark:text-donutool-bright flex transform flex-col items-center justify-center gap-[1vw] rounded-[1vw] bg-gray-200 px-[4vw] py-[2vw] text-center text-[1vw] font-medium whitespace-pre-line text-neutral-600 transition-transform duration-300 ${isVisible ? "scale-100" : "scale-95"} `}
      >
        {t("textInModal")}
        <ReusableButton
          name={t("goToExtensionStore")}
          onClick={() => {
            window.open(
              "https://chromewebstore.google.com/detail/donutool/heabnlejdfhggjiapbfmbhnfmhlknlaa",
              "_blank",
            );
          }}
        />
      </div>
    </div>
  );
}
