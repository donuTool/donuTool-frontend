import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function MessageForMobile() {
  const { t } = useTranslation();
  const [isDeviceMobile, setIsDeviceMobile] = useState(false);
  const [isWidthShort, setIsWidthShort] = useState(false);

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
    const checkIfWidthShort = () => {
      setIsWidthShort(window.innerWidth <= 1200);
    };
    checkIfWidthShort();
    window.addEventListener("resize", checkIfWidthShort);

    return () => {
      window.removeEventListener("resize", checkIfWidthShort);
    };
  }, []);

  return (
    <>
      {isDeviceMobile ? (
        <div className="absolute z-100 flex h-full w-full items-center justify-center bg-white/50 text-center text-[4vw] whitespace-pre-line text-neutral-600 backdrop-blur-lg">
          {t("alertForMobile")}
        </div>
      ) : isWidthShort ? (
        <div className="absolute z-100 flex h-full w-full items-center justify-center bg-white/50 text-center text-[2vw] whitespace-pre-line text-neutral-600 backdrop-blur-lg">
          {t("alertForWidthShort")}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
