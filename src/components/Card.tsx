export default function Card({
  children,
  title,
  width,
}: {
  children: React.ReactNode;
  title: string;
  width: string;
}) {
  return (
    <div
      className={`dark:bg-donutool-middle relative flex ${width} items-center justify-center gap-10 rounded-2xl bg-gray-200 px-5 py-10 transition duration-300`}
    >
      <div className="dark:text-donutool-bright absolute top-2 left-4 text-lg font-semibold text-neutral-600 transition duration-300">
        {title}
      </div>
      {children}
    </div>
  );
}
