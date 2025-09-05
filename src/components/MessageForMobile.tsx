import { useState, useEffect } from "react";

export default function MessageForMobile() {
  const [isDeviceMobile, setIsDeviceMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(
        navigator.userAgent,
      );
      setIsDeviceMobile(isMobile);
    };

    checkIfMobile();
  }, []);

  return (
    <>
      {isDeviceMobile ? (
        <div className="absolute z-100 flex h-full w-full items-center justify-center bg-white/50 text-center text-[1vw] whitespace-pre-line text-neutral-600 backdrop-blur-lg">
          {
            "현재 접속하신 모바일 환경에서는 지원되지 않는 사이트입니다!\n데스크톱을 이용해주세요."
          }
        </div>
      ) : (
        ""
      )}
    </>
  );
}
