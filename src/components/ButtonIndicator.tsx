import { useTranslation } from "react-i18next";

interface ButtonIndicatorProps {
  id: string;
  top: number;
  left: number;
  index: number;
}

export default function ButtonIndicator({
  id,
  top,
  left,
  index,
}: ButtonIndicatorProps) {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="dark:bg-donutool-bright absolute z-10 h-0.5 w-[4vw] bg-neutral-600 transition duration-300"
        style={{
          top: index !== 3 ? `${top}px` : `${top + 20}px`,
          left:
            index < 3
              ? `${left}px`
              : index === 4
                ? `${-left + 30}px`
                : `${-left + 158}px`,
        }}
      ></div>
      <div
        className="dark:text-donutool-bright absolute z-10 w-full font-semibold text-neutral-600 transition duration-300"
        style={{
          top: index !== 3 ? `${top - 12}px` : `${top + 8}px`,
          left:
            index < 3
              ? `${left + 85}px`
              : index === 4
                ? `${-(left + 85)}px`
                : `${-left + 42}px`,
        }}
      >
        {t(`buttonsLabels.${id}`)}
      </div>
    </>
  );
}
