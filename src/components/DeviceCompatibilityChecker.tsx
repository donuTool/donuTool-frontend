import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function DeviceCompatibilityChecker() {
  const { t } = useTranslation();
  const [isDeviceMobile, setIsDeviceMobile] = useState(false);
  const [isAspectRatioIncompatible, setIsAspectRatioIncompatible] =
    useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(
        navigator.userAgent,
      );
      setIsDeviceMobile(isMobile);
    };

    checkIfMobile();
  }, []);

  useEffect(() => {
    const checkAspectRatio = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const aspectRatio = width / height;

      const isIncompatible = aspectRatio < 1.2 || aspectRatio > 2.5;
      setIsAspectRatioIncompatible(isIncompatible);
    };

    checkAspectRatio();
    window.addEventListener("resize", checkAspectRatio);

    return () => {
      window.removeEventListener("resize", checkAspectRatio);
    };
  }, []);

  return (
    <>
      {isDeviceMobile ? (
        <div className="absolute z-100 flex h-full w-full items-center justify-center bg-white/50 px-4 text-center text-sm whitespace-pre-line text-neutral-600 backdrop-blur-lg sm:text-base md:text-lg">
          {t("alertForMobile")}
        </div>
      ) : isAspectRatioIncompatible ? (
        <div className="absolute z-100 flex h-full w-full items-center justify-center bg-white/50 px-4 text-center text-xs whitespace-pre-line text-neutral-600 backdrop-blur-lg sm:text-sm md:text-base">
          {t("alertForAspectRatio")}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
