export default function Card({
  children,
  title,
  width,
  height,
}: {
  children: React.ReactNode;
  title: string;
  width: number;
  height: number;
}) {
  return (
    <div
      className={`dark:bg-donutool-middle relative flex w-[${width ? width : 100}%] h-[${height ? height : 100}%] items-center justify-center rounded-2xl bg-gray-200 px-5 py-10 transition duration-300`}
    >
      <div className="dark:text-donutool-bright absolute top-3 left-5 text-lg font-semibold text-neutral-600 transition duration-300">
        {title}
      </div>
      {children}
    </div>
  );
}
