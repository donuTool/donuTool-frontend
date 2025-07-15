import Card from "@/components/Card";
import VirtualToolBar from "@/components/VirtualToolBar";

export default function DashboardPage() {
  const USER = "박재연";
  const LOGGEDINTIME = "21:34:04";
  const TIMEUSED = "00:05:31";

  return (
    <>
      <div className="dark:text-donutool-bright mt-5 text-2xl font-semibold text-neutral-600 transition duration-300">
        대시보드
      </div>
      <div className="flex h-[20%] w-[95%] flex-row justify-center gap-[3%]">
        <Card
          children={
            <div className="flex w-full flex-col">
              <div>사용자: {USER}</div>
              <div>로그인한 시간: {LOGGEDINTIME}</div>
              <div>사용시간: {TIMEUSED}</div>
            </div>
          }
          title={`${USER}님, 환영합니다!`}
          width={70}
          height={0}
        />
        <Card
          children={
            <>
              <VirtualToolBar />
            </>
          }
          title="버튼 세팅"
          width={30}
          height={0}
        />
      </div>
      <div className="flex h-[15%] w-[95%] flex-row justify-center gap-[3%]">
        <Card children={<div></div>} title="" width={40} height={0} />
        <Card children={<div></div>} title="" width={60} height={0} />
      </div>
      <Card children={<div></div>} title="" width={95} height={20} />
      <div className="flex h-[30%] w-[95%] flex-row justify-center gap-[3%]">
        <Card children={<div></div>} title="" width={50} height={0} />
        <Card children={<div></div>} title="" width={25} height={0} />
        <Card children={<div></div>} title="" width={25} height={0} />
      </div>
    </>
  );
}
