import Card from "@/components/Card";
import DonutBar from "@/components/graphs/DonutBar";
import StickBars from "@/components/graphs/StickBar";
import TimeGraph from "@/components/graphs/TimeGraph";

export default function StatsPage() {
  return (
    <>
      <div className="dark:text-donutool-bright mt-5 text-2xl font-semibold text-neutral-600 transition duration-300">
        통계
      </div>
      <div className="flex h-[30%] w-[95%] flex-row justify-center gap-[2.5%]">
        <Card
          children={
            <StickBars
              values={Array.from(
                { length: 3 },
                () => Math.floor(Math.random() * 100) + 1,
              )}
            />
          }
          title="가장 많이 쓴 버튼 TOP 3"
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
          title="최근 7일 각 버튼 클릭 횟수"
          width={50}
          height={0}
        />
      </div>
      <Card
        children={
          <TimeGraph
            values={Array.from(
              { length: 24 },
              () => Math.floor(Math.random() * 24) + 1,
            )}
            color="#FF6384"
          />
        }
        title="하루 사용 시간"
        width={95}
        height={25}
      />
      <Card
        children={
          <TimeGraph
            values={Array.from(
              { length: 24 },
              () => Math.floor(Math.random() * 24) + 1,
            )}
            color="#36A2EB"
          />
        }
        title="전체 사용 시간"
        width={95}
        height={25}
      />
    </>
  );
}
