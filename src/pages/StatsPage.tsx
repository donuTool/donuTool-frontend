import { useTranslation } from "react-i18next";
import Card from "@/components/Card";
import DonutBar from "@/components/graphs/DonutBar";
import StickBars from "@/components/graphs/StickBar";
import TimeGraph from "@/components/graphs/TimeGraph";
import { useUserStore } from "@/stores/useUserStore";

export default function StatsPage() {
  const { t } = useTranslation();
  const { isDataErased, setIsDataErased } = useUserStore();

  return (
    <>
      <div className="dark:text-donutool-bright mt-5 text-2xl font-semibold text-neutral-600 transition duration-300">
        {t("stats")}
      </div>
      <div className="flex h-[30%] w-[95%] flex-row justify-center gap-[2.5%]">
        <Card
          children={
            <StickBars
              values={Array.from(
                { length: 3 },
                () => Math.floor(Math.random() * 100) + 1,
              )}
              names={["뒤로 가기", "새 탭", "화면 캡쳐"]}
              axis="y"
            />
          }
          title={t("topThreeButtons")}
          width={50}
          height={0}
        />
        <Card
          children={
            <DonutBar
              values={Array.from(
                { length: 5 },
                () => Math.floor(Math.random() * 100) + 1,
              )}
            />
          }
          title={t("recentUsedButtons")}
          width={50}
          height={0}
        />
      </div>
      <Card
        children={
          <TimeGraph
            values={Array.from(
              { length: 24 },
              () => Math.floor(Math.random() * 22) + 1,
            )}
            color="#FF6384"
          />
        }
        title={t("usedTimePerDay")}
        width={95}
        height={25}
      />
      <Card
        children={
          <StickBars
            values={Array.from(
              { length: 3 },
              () => Math.floor(Math.random() * 100) + 1,
            )}
            names={["네이버", "Google", "YouTube"]}
            axis="x"
          />
        }
        title={t("frequentlyVisitedWebsites")}
        width={95}
        height={25}
      />
      <div className="flex w-[95%] justify-end">
        <button
          className={`dark:bg-donutool-middle dark:text-donutool-text rounded-lg bg-gray-200 px-3.5 py-1 font-semibold text-neutral-600 transition duration-300 ${isDataErased ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
          onClick={() => {
            if (isDataErased) return;

            setIsDataErased(true);
          }}
        >
          {isDataErased ? t("dataErased") : t("eraseData")}
        </button>
      </div>
    </>
  );
}
