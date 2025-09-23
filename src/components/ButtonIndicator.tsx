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
        className="dark:bg-donutool-bright absolute z-10 h-[0.1vw] w-[4vw] bg-neutral-600 transition duration-300"
        style={{
          top: index !== 3 ? `${top + 2.5}vw` : `${top + 3.6}vw`,
          left:
            index < 3
              ? `${left + 5.5}vw`
              : index === 4
                ? `${-left + 25.5}vw`
                : `${-left + 35}vw`,
        }}
      ></div>
      <div
        className="dark:text-donutool-bright absolute z-10 w-full text-[1.1vw] font-semibold text-neutral-600 transition duration-300"
        style={{
          top: index !== 3 ? `${top + 1.7}vw` : `${top + 2.7}vw`,
          left:
            index < 3
              ? `${left + 10}vw`
              : index === 4
                ? `${-(left - 18)}vw`
                : `${-left + 27.5}vw`,
        }}
      >
        {t(`buttonsLabels.${id}`)}
      </div>
    </>
  );
}
