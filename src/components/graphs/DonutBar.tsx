import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

type DonutBarProps = {
  values: number[];
};

const colors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"];

export default function DonutBar({ values }: DonutBarProps) {
  const safeValues = values.slice(0, 5);

  const total = safeValues.reduce((a, b) => a + b, 0);

  const normalizedValues =
    total > 100
      ? safeValues.map((v) => Math.round((v * 100) / total))
      : safeValues;

  const data = {
    labels: normalizedValues.map((_, idx) => `항목 ${idx + 1}`),
    datasets: [
      {
        label: "횟수",
        data: normalizedValues,
        backgroundColor: colors.slice(0, normalizedValues.length),
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "50%",
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: "#e8e8e8",
        font: { weight: "bold" as const },
      },
      tooltip: {
        enabled: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="h-45 w-45 translate-y-4 saturate-50">
      <Doughnut data={data} options={options} />
    </div>
  );
}
