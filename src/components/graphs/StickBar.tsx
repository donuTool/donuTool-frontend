import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface StickBarsProps {
  values: number[];
  names: string[];
  axis: "x" | "y";
}

export default function StickBars({ values, names, axis }: StickBarsProps) {
  const data = {
    labels: names,
    datasets: [
      {
        label: "횟수",
        data: values,
        backgroundColor: ["#60A5FA", "#34D399", "#FBBF24"],
        borderRadius: 4,
        barPercentage: 0.6,
      },
    ],
  };

  const options = {
    indexAxis: axis,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: true,
        max: 100,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            weight: "bold" as const,
          },
        },
      },
      y: {
        display: true,
        max: 100,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            weight: "bold" as const,
          },
        },
      },
    },
    plugins: {
      legend: { display: false },
      datalabels: {
        color: "#e8e8e8",
        font: { weight: "bold" as const },
        anchor: "start" as const,
        align: "start" as const,
        offset: -20,
      },
      tooltip: { enabled: true },
    },
  };

  return (
    <div
      className={`relative ${options.indexAxis === "y" ? "h-60 w-[98%] translate-y-3" : "h-50 w-[98%] translate-y-4"} py-6 saturate-50`}
    >
      <Bar data={data} options={options} />
    </div>
  );
}
