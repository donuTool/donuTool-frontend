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
}

export default function StickBars({ values }: StickBarsProps) {
  const data = {
    labels: ["뒤로 가기", "새 탭", "화면 캡쳐"],
    datasets: [
      {
        label: "값",
        data: values,
        backgroundColor: ["#60A5FA", "#34D399", "#FBBF24"],
        borderRadius: 4,
        barPercentage: 0.6,
      },
    ],
  };

  const options = {
    indexAxis: "y" as const,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: true,
        max: 100,
        grid: {
          display: false,
        },
      },
      y: {
        display: true,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="relative h-60 w-[98%] translate-y-3 py-6 saturate-50">
      <Bar data={data} options={options} />
    </div>
  );
}
