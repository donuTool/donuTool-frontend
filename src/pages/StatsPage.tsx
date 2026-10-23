import { useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "@/components/Card";
import DonutBar from "@/components/graphs/DonutBar";
import StickBars from "@/components/graphs/StickBar";
import { useUserStore } from "@/stores/useUserStore";

function EmptyMessage({ text }: { text: string }) {
  return (
    <div className="dark:text-donutool-bright translate-y-3 text-center text-sm font-medium whitespace-pre-line text-neutral-500 transition duration-300">
      {text}
    </div>
  );
}

export default function StatsPage() {
  const { t } = useTranslation();
  const { isLoaded, source, buttonClickCounts, resetStats } = useUserStore();
  const [isErasing, setIsErasing] = useState(false);

  const buttonsSorted = Object.entries(buttonClickCounts)
    .filter(([, count]) => count > 0)
    .sort((a, b) => b[1] - a[1]);
  const topThreeButtons = buttonsSorted.slice(0, 3);
  const hasData = buttonsSorted.length > 0;
  const canErase = hasData && source !== "none" && !isErasing;

  const eraseData = async () => {
    if (!canErase || !window.confirm(t("confirmEraseData"))) return;

    setIsErasing(true);
    try {
      await resetStats();
    } catch (error) {
      console.error("Failed to reset stats:", error);
      window.alert(t("eraseDataFailed"));
    } finally {
      setIsErasing(false);
    }
  };

  const emptyText = isLoaded ? t("noStatsYet") : "";

  return (
    <>
      <div className="dark:text-donutool-bright mt-5 text-2xl font-semibold text-neutral-600 transition duration-300">
        {t("stats")}
      </div>
      <div className="flex h-[85%] w-full flex-col items-center justify-between">
        <div className="flex h-[35%] w-[95%] flex-row justify-center gap-[2.5%]">
          <Card
            children={
              hasData ? (
                <StickBars
                  values={topThreeButtons.map(([, value]) => value)}
                  names={topThreeButtons.map(([key]) => t(`buttonsLabels.${key}`))}
                  label={t("clickCount")}
                  axis="y"
                />
              ) : (
                <EmptyMessage text={emptyText} />
              )
            }
            title={t("topThreeButtons")}
            width={50}
            height={0}
          />
          <Card
            children={
              hasData ? (
                <DonutBar
                  values={buttonsSorted.map(([, value]) => value)}
                  names={buttonsSorted.map(([key]) => t(`buttonsLabels.${key}`))}
                  label={t("clickCount")}
                />
              ) : (
                <EmptyMessage text={emptyText} />
              )
            }
            title={t("buttonClickShare")}
            width={50}
            height={0}
          />
        </div>
        {/* 아래 두 통계는 아직 수집하지 않는 데이터라 준비 중으로 표시한다 */}
        <Card
          children={<EmptyMessage text={t("statsComingSoon")} />}
          title={t("usedTimePerDay")}
          width={95}
          height={30}
        />
        <Card
          children={<EmptyMessage text={t("statsComingSoon")} />}
          title={t("frequentlyVisitedWebsites")}
          width={95}
          height={30}
        />
      </div>
      <div className="flex w-[95%] justify-end">
        <button
          className={`dark:bg-donutool-middle dark:text-donutool-text rounded-[0.8vw] bg-gray-200 px-[1vw] py-[0.2vw] font-semibold text-neutral-600 transition duration-300 ${canErase ? "cursor-pointer" : "cursor-not-allowed opacity-50"}`}
          disabled={!canErase}
          onClick={eraseData}
        >
          {isErasing ? t("erasingData") : t("eraseData")}
        </button>
      </div>
    </>
  );
}
