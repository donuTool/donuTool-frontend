import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

type DonutBarProps = {
  values: number[];
  names: string[];
  label: string;
};

// 버튼 14개 모두 구분되도록 색을 준비한다
const colors = [
  "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40", "#8BC34A",
  "#E91E63", "#00BCD4", "#795548", "#607D8B", "#CDDC39", "#3F51B5", "#009688",
];

export default function DonutBar({ values, names, label }: DonutBarProps) {
  const total = values.reduce((a, b) => a + b, 0);

  const data = {
    labels: names,
    datasets: [
      {
        label,
        data: values,
        backgroundColor: values.map((_, index) => colors[index % colors.length]),
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
      // 조각에는 비율(%)을, 툴팁에는 실제 횟수를 보여준다. 5% 미만은 글자를 숨긴다
      datalabels: {
        color: "#e8e8e8",
        font: { weight: "bold" as const },
        formatter: (value: number) => {
          const percent = total > 0 ? Math.round((value * 100) / total) : 0;
          return percent >= 5 ? `${percent}%` : "";
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="h-[70%] w-[70%] translate-y-4 saturate-50">
      <Doughnut data={data} options={options} />
    </div>
  );
}
