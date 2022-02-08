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
  const getLabels = (arr) => {
    let labels = arr.map((arr) =>
      new Date(arr[0]).toLocaleString(undefined, {
        month: "short",
        day: "numeric",
      })
    );
    return labels;
  };

  const getPrices = (arr) => arr.map((arr) => arr[1]);

  const chartData = (canvas) => {
    const ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 0, 0, 350);
    gradientFill.addColorStop(0, "rgba(33, 114, 229, 1)");
    gradientFill.addColorStop(1, "rgba(0, 0, 0, 1)");
    return {
      labels: getLabels(props.totalVolumes),
      datasets: [
        {
          data: getPrices(props.totalVolumes),
          tension: 0.4,
          borderColor: "rgba(33, 114, 229, 1)",
          fill: true,
          backgroundColor: gradientFill,
        },
      ],
    };
  };
  return (
    <Bar
      data={{
        labels: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ],
        datasets: [
          {
            label: "",
            data: props.totalVolumes,
            backgroundColor: "rgb(26, 44, 73)",
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            display: false,
          },
          decimation: {
            enabled: true,
            algorithm: "min-max",
          },
        },
        maintainAspectRatio: false,
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
              maxRotation: 0,
              autoSkip: true,
              maxTicksLimit: 7,
              font: {
                size: 9,
              },
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
              beginAtZero: true,
              maxTicksLimit: 5,
            },
          },
        },
      }}
    />
  );
}
