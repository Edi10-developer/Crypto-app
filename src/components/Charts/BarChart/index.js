import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart(props) {
  const chartData = {
    labels: props.coinTimestamp,
    datasets: [
      {
        label: "BTC Volumes",
        data: props.coinTotalVolumes,
        backgroundColor: "rgba(33, 114, 229, 1)",
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
      decimation: {
        enabled: true,
        algorithm: "min-max",
      },
    },
    responsive: true,
    maintainAspectRatio: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      x: {
        ticks: {
          align: "start",
          source: "auto",

          autoSkip: false,
          maxTicksLimit: 7,
          font: {
            size: 7,
          },
          maxRotation: 49,
          minRotation: 49,
        },
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
          beginAtZero: false,
          maxTicksLimit: 5,
        },
      },
    },
  };
  return <Bar data={chartData} options={chartOptions} />;
}
