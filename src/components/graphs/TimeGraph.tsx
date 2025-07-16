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
        label: "Value",
        data: values,
        fill: true,
        borderColor: color,
        backgroundColor: color,
        tension: 0.3,
        pointRadius: 0,
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
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="relative h-37 w-[98%] translate-y-4 saturate-50">
      <Line data={data} options={options} />
    </div>
  );
}
