import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Card from "@/components/Card";
import PlayIcon from "@/assets/circle-play.svg?react";

export default function InstructionsPage() {
  const { t } = useTranslation();

  return (
    <>
      <div className="dark:text-donutool-bright mt-5 text-2xl font-semibold text-neutral-600 transition duration-300">
        {t("help")}
      </div>
      <div className="mb-[3%] flex h-full w-full flex-col items-center justify-between">
        <Card
          children={
            <div className="flex h-[95%] w-[100%] translate-y-4 flex-col items-center justify-center gap-4">
              <Link
                to="/help/question/1"
                className="dark:text-donutool-bright dark:bg-donutool-button flex h-[15%] w-[95%] items-center justify-start rounded-2xl bg-white px-5 font-semibold text-neutral-600 transition duration-300"
              >
                Q1. 문제가 발생했을 때 문의는 어떻게 하나요?
              </Link>
              <Link
                to="/help/question/2"
                className="dark:text-donutool-bright dark:bg-donutool-button flex h-[15%] w-[95%] items-center justify-start rounded-2xl bg-white px-5 font-semibold text-neutral-600 transition duration-300"
              >
                Q2. {t("comingSoon")}
              </Link>
              <Link
                to="/help/question/3"
                className="dark:text-donutool-bright dark:bg-donutool-button flex h-[15%] w-[95%] items-center justify-start rounded-2xl bg-white px-5 font-semibold text-neutral-600 transition duration-300"
              >
                Q3. {t("comingSoon")}
              </Link>
              <Link
                to="/help/question/4"
                className="dark:text-donutool-bright dark:bg-donutool-button flex h-[15%] w-[95%] items-center justify-start rounded-2xl bg-white px-5 font-semibold text-neutral-600 transition duration-300"
              >
                Q4. {t("comingSoon")}
              </Link>
            </div>
          }
          title={t("faq")}
          width={95}
          height={45}
        />
        <div className="flex h-[35%] w-[95%] flex-row justify-center gap-[2.5%]">
          <Card
            children={
              <div className="flex h-[85%] w-[55%] translate-x-20 items-center justify-center rounded-2xl bg-black">
                <PlayIcon className="h-12 w-12 cursor-pointer stroke-neutral-200" />
              </div>
            }
            title={t("quickStartGuide")}
            width={80}
            height={0}
          />
          <div className="flex h-full w-[20%] flex-col gap-[6%]">
            <Card
              children={
                <Link
                  to="/help/contact"
                  className="dark:bg-donutool-button dark:hover:bg-donutool-bg dark:text-donutool-bright flex h-10 w-22 translate-y-4 cursor-pointer items-center justify-center rounded-xl bg-white font-semibold text-neutral-600 transition duration-300 hover:bg-neutral-300 hover:text-white"
                >
                  {t("contact")}
                </Link>
              }
              title={t("contactUs")}
              width={100}
              height={47}
            />
            <Card
              children={
                <div className="dark:text-donutool-bright translate-y-3 font-semibold text-neutral-600 transition duration-300">
                  1.0.0
                </div>
              }
              title={t("version")}
              width={100}
              height={47}
            />
          </div>
        </div>
        <Card
          children={
            <div className="flex flex-row gap-7">
              <button
                className="flex cursor-pointer items-center justify-center rounded-2xl bg-neutral-400 p-[1vw] text-xs font-semibold text-neutral-100"
                onClick={() => {
                  window.open("https://github.com/donuTool", "_blank");
                }}
              >
                GitHub
              </button>
              <button
                className="flex cursor-pointer items-center justify-center rounded-2xl bg-neutral-400 p-[1vw] text-xs font-semibold text-neutral-100"
                onClick={() => {
                  alert(t("comingSoon"));
                }}
              >
                Discord
              </button>
              <button
                className="flex cursor-pointer items-center justify-center rounded-2xl bg-neutral-400 p-[1vw] text-xs font-semibold text-neutral-100"
                onClick={() => {
                  alert(t("comingSoon"));
                }}
              >
                YouTube
              </button>
              <button
                className="flex cursor-pointer items-center justify-center rounded-2xl bg-neutral-400 p-[1vw] text-xs font-semibold text-neutral-100"
                onClick={() => {
                  alert(t("comingSoon"));
                }}
              >
                Instagram
              </button>
            </div>
          }
          title={t("community")}
          width={95}
          height={15}
        />
      </div>
    </>
  );
}
