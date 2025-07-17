import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface TimeGraphProps {
  values: number[];
  color: string;
}

export default function TimeGraph({ values, color }: TimeGraphProps) {
  const data = {
    labels: values.map((_, idx) => `${idx + 1}시`),
    datasets: [
      {
        label: "시간",
        data: values,
        fill: "start",
        borderColor: color,
        backgroundColor: color,
        tension: 0.3,
        pointRadius: 3,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: true,
        title: {
          display: false,
          text: "시간",
        },
        grid: {
          display: false,
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 12,
          font: {
            weight: "bold" as const,
          },
        },
      },
      y: {
        display: true,
        title: {
          display: false,
          text: "사용량",
        },
        min: 0,
        max: 24,
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
      legend: {
        display: false,
      },
      datalabels: {
        color: "#666666",
        font: { weight: "bold" as const },
        align: "top" as const,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="relative h-37 w-[98%] translate-y-4 saturate-50">
      <Line data={data} options={options} />
    </div>
  );
}
