import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useUserStore } from "@/stores/useUserStore";
import ReusableButton from "@/components/buttons/ReusableButton";
import CloseIcon from "@/assets/close.svg";
import ArrowLeftIcon from "@/assets/arrow-left.svg";

export default function AlertModal() {
  const { t } = useTranslation();
  const googleId = useUserStore((state) => state.googleId);
  const [shouldRender, setShouldRender] = useState(false);
  const [isVisible, setIsVisible] = useState(!googleId);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (googleId === undefined) return;

    if (!googleId) {
      setIsVisible(true);
      setIsCollapsed(false);
    } else {
      setIsVisible(false);
      setShouldRender(true);
    }
  }, [googleId]);

  const handleClose = () => {
    setIsCollapsed(true);
  };

  const handleShow = () => {
    setIsCollapsed(false);
  };

  if (shouldRender) return null;

  return (
    isVisible && (
      <>
        <div
          className={`dark:bg-donutool-middle dark:text-donutool-bright absolute right-[1vw] bottom-[1vw] flex transform flex-col items-center justify-center gap-[1vw] rounded-[1vw] bg-gray-200 px-[4vw] py-[2vw] text-center text-[1vw] font-medium whitespace-pre-line text-neutral-600 shadow-lg transition-all duration-500 ease-in-out ${
            isCollapsed
              ? "translate-x-full opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          <button
            onClick={handleClose}
            className="dark:text-donutool-bright absolute top-[0.5vw] right-[0.5vw] flex h-[2vw] w-[2vw] cursor-pointer items-center justify-center rounded-full bg-gray-300 text-neutral-600 transition duration-300 hover:bg-gray-400"
          >
            <img src={CloseIcon} alt="close" className="h-[1vw] w-[1vw]" />
          </button>

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
        <div
          className={`dark:bg-donutool-middle dark:text-donutool-bright absolute right-0 bottom-[5vw] flex h-[6vw] w-[2.5vw] transform cursor-pointer items-center justify-center rounded-l-[1vw] bg-gray-200 text-neutral-600 shadow-lg transition-all duration-500 ease-in-out ${
            isCollapsed
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
          onClick={handleShow}
        >
          <img src={ArrowLeftIcon} alt="show" className="h-[1.5vw] w-[1.5vw]" />
        </div>
      </>
    )
  );
}
