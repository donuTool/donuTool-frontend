import Card from "@/components/Card";

export default function AccountPage() {
  return (
    <>
      <div className="dark:text-donutool-bright mt-5 text-2xl font-semibold text-neutral-600 transition duration-300">
        계정
      </div>
      <Card children={<div></div>} title="" width={95} height={20} />
      <div className="flex h-[20%] w-[95%] flex-row justify-center gap-[3%]">
        <Card children={<div></div>} title="" width={50} height={0} />
        <Card children={<div></div>} title="" width={50} height={0} />
      </div>
      <Card children={<div></div>} title="" width={95} height={30} />
      <div className="flex h-[15%] w-[95%] flex-row justify-center gap-[3%]">
        <Card children={<div></div>} title="" width={30} height={0} />
        <Card children={<div></div>} title="" width={40} height={0} />
        <Card children={<div></div>} title="" width={30} height={0} />
      </div>
    </>
  );
}
