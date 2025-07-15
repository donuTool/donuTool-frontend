import Card from "@/components/Card";

export default function InstructionsPage() {
  return (
    <>
      <div className="dark:text-donutool-bright mt-5 text-2xl font-semibold text-neutral-600 transition duration-300">
        도움말
      </div>
      <Card children={<div></div>} title="" width={95} height={20} />
      <div className="flex h-[20%] w-[95%] flex-row justify-center gap-[3%]">
        <Card children={<div></div>} title="" width={40} height={0} />
        <Card children={<div></div>} title="" width={30} height={0} />
        <Card children={<div></div>} title="" width={20} height={0} />
        <Card children={<div></div>} title="" width={10} height={0} />
      </div>{" "}
      <div className="flex h-[25%] w-[95%] flex-row justify-center gap-[3%]">
        <Card children={<div></div>} title="" width={10} height={0} />
        <Card children={<div></div>} title="" width={20} height={0} />
        <Card children={<div></div>} title="" width={30} height={0} />
        <Card children={<div></div>} title="" width={40} height={0} />
      </div>
      <div className="flex h-[20%] w-[95%] flex-row justify-center gap-[3%]">
        <Card children={<div></div>} title="" width={50} height={0} />
        <Card children={<div></div>} title="" width={50} height={0} />
      </div>
    </>
  );
}
