import Card from "@/components/Card";
import VirtualToolBar from "@/components/VirtualToolBar";
import { useUserStore } from "@/stores/useUserStore";
import { useTranslation } from "react-i18next";

export default function DashboardPage() {
  const { t, i18n } = useTranslation();
  const { isLoggedIn, createdAt, buttonClickCounts } = useUserStore();
  const totalClicks = Object.values(buttonClickCounts).reduce(
    (sum, count) => sum + count,
    0,
  );
  const joinedAt = createdAt
    ? new Date(createdAt).toLocaleDateString(i18n.language)
    : null;

  return (
    <>
      <div className="dark:text-donutool-bright mt-5 text-2xl font-semibold text-neutral-600 transition duration-300">
        {t("dashboard")}
      </div>
      <div className="mb-[3%] flex h-full w-full flex-col items-center justify-between">
        <div className="flex h-[25%] w-[95%] flex-row justify-center gap-[2.5%]">
          <Card
            children={
              <div className="dark:text-donutool-bright ml-[1.5vw] flex w-full flex-col font-medium text-neutral-600 transition duration-300">
                <div>
                  {t("user")}: {isLoggedIn ? t("googleUser") : t("username")}
                </div>
                <div>
                  {t("joinedAt")}:{" "}
                  {isLoggedIn ? (joinedAt ?? "-") : t("infoForGuest")}
                </div>
                <div>
                  {t("totalClicks")}: {totalClicks.toLocaleString(i18n.language)}
                </div>
              </div>
            }
            title={isLoggedIn ? t("welcomeBack") : t("welcome", { name: t("username") })}
            width={70}
            height={0}
          />
          <Card
            children={
              <div
                className="pointer-events-none select-none"
                draggable={false}
              >
                <VirtualToolBar size={8} showIndicators={false} />
              </div>
            }
            title={t("buttonsSetting")}
            width={30}
            height={0}
          />
        </div>
        <div className="flex h-[20%] w-[95%] flex-row justify-center gap-[2.5%]">
          <Card children={<div></div>} title="" width={40} height={0} />
          <Card children={<div></div>} title="" width={60} height={0} />
        </div>
        <Card children={<div></div>} title="" width={95} height={20} />
        <div className="flex h-[30%] w-[95%] flex-row justify-center gap-[2.5%]">
          <Card children={<div></div>} title="" width={50} height={0} />
          <Card children={<div></div>} title="" width={25} height={0} />
          <Card children={<div></div>} title="" width={25} height={0} />
        </div>
      </div>
    </>
  );
}
