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
  const getLabels = (labelsArray) => {
    let labels = labelsArray.map((array) =>
      new Date(array[0]).toLocaleString(undefined, {
        month: "short",
        day: "numeric",
      })
    );
    return labels;
  };

  const getPrices = (arr) => arr.map((arr) => console.log(arr[1]));

  const chartDatasss = (canvas) => {
    const ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 0, 0, 350);
    gradientFill.addColorStop(0, "rgba(33, 114, 229, 1)");
    gradientFill.addColorStop(1, "rgba(0, 0, 0, 1)");
    return {
      labels: props.coinTimestamp,
      datasets: [
        {
          data: props.coinTotalVolumes,
          tension: 0.4,
          borderColor: "rgba(33, 114, 229, 1)",
          fill: true,
          backgroundColor: gradientFill,
        },
      ],
    };
  };

  const chartData = {
    labels: props.coinTimestamp,

    datasets: [
      {
        label: "",
        data: props.coinTotalVolumes,
        backgroundColor: "#2172E6",
      },
    ],
  };
  return (
    <Bar
      data={chartData}
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
              beginAtZero: true,
              maxTicksLimit: 5,
            },
          },
        },
      }}
    />
  );
}
