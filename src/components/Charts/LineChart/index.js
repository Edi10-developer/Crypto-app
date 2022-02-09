import React from "react";
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
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart(props) {
  return (
    <Line
      data={{
        labels: props.coinTimestamp,
        datasets: [
          {
            label: "BTC",
            data: props.coinPrice,
            borderColor: "rgba(0, 255, 95, 1)",
            backgroundColor: "#568E2B",
            pointBackgroundColor: "transparent",
            pointBorderColor: "transparent",
            tension: 0.4,
            drawOnChartArea: true,
            drawTicks: true,
          },
        ],
      }}
      options={{
        showLabelBackdrop: true,
        layout: {
          padding: {
            top: 100,
          },
        },

        plugins: {
          legend: {
            display: false,
          },
        },
        animation: {
          duration: 2000,
        },
        maintainAspectRatio: true,
        responsive: true,

        scales: {
          x: {
            grid: {
              color: "transparent",
            },
            ticks: {
              font: {
                size: 7,
              },
              maxRotation: 49,
              minRotation: 49,
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
