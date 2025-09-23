import Card from "@/components/Card";
import { useTranslation } from "react-i18next";

export default function AccountPage() {
  const { t } = useTranslation();

  return (
    <>
      <div className="dark:text-donutool-bright mt-5 text-2xl font-semibold text-neutral-600 transition duration-300">
        {t("account")}
      </div>
      <div className="mb-[3%] flex h-full w-full flex-col items-center justify-between">
        <Card children={<div></div>} title="" width={95} height={25} />
        <div className="flex h-[20%] w-[95%] flex-row justify-center gap-[2.5%]">
          <Card children={<div></div>} title="" width={50} height={0} />
          <Card children={<div></div>} title="" width={50} height={0} />
        </div>
        <Card children={<div></div>} title="" width={95} height={30} />
        <div className="flex h-[20%] w-[95%] flex-row justify-center gap-[2.5%]">
          <Card children={<div></div>} title="" width={30} height={0} />
          <Card children={<div></div>} title="" width={40} height={0} />
          <Card children={<div></div>} title="" width={30} height={0} />
        </div>
      </div>
    </>
  );
}
