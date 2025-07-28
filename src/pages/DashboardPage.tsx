import Card from "@/components/Card";
import VirtualToolBar from "@/components/VirtualToolBar";
import { useUserStore } from "@/stores/useUserStore";
import { useTranslation } from "react-i18next";

export default function DashboardPage() {
  const { t } = useTranslation();
  const USER = "박재연";
  const LOGGEDINTIME = "21:34:04";
  const TIMEUSED = "00:05:31";

  const googleId = useUserStore((state) => state.googleId);

  return (
    <>
      <div className="dark:text-donutool-bright mt-5 text-2xl font-semibold text-neutral-600 transition duration-300">
        {t("dashboard")}
      </div>
      <div className="flex h-[20%] w-[95%] flex-row justify-center gap-[2.5%]">
        <Card
          children={
            <div className="dark:text-donutool-bright flex w-full translate-x-1 flex-col font-medium text-neutral-600 transition duration-300">
              <div>
                {t("user")}: {googleId ? googleId : USER}
              </div>
              <div>
                {t("loggedInTime")}: {LOGGEDINTIME}
              </div>
              <div>
                {t("usedTime")}: {TIMEUSED}
              </div>
            </div>
          }
          title={t("welcome", { name: USER })}
          width={70}
          height={0}
        />
        <Card
          children={
            <>
              <VirtualToolBar size={150} />
            </>
          }
          title={t("buttonsSetting")}
          width={30}
          height={0}
        />
      </div>
      <div className="flex h-[15%] w-[95%] flex-row justify-center gap-[2.5%]">
        <Card children={<div></div>} title="" width={40} height={0} />
        <Card children={<div></div>} title="" width={60} height={0} />
      </div>
      <Card children={<div></div>} title="" width={95} height={20} />
      <div className="flex h-[30%] w-[95%] flex-row justify-center gap-[2.5%]">
        <Card children={<div></div>} title="" width={50} height={0} />
        <Card children={<div></div>} title="" width={25} height={0} />
        <Card children={<div></div>} title="" width={25} height={0} />
      </div>
    </>
  );
}
