import Card from "@/components/Card";

export default function DashboardPage() {
  return (
    <>
      <div className="dark:text-donutool-text mt-5 text-2xl font-bold text-neutral-600 transition duration-300">
        대시보드
      </div>
      <Card children={<div></div>} />
      <Card children={<div></div>} />
    </>
  );
}
