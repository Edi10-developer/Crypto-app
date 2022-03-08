import React, { useState, useRef, useEffect } from "react";
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
import gradient from "chartjs-plugin-gradient";
import { Container } from "./styles";

ChartJS.register(
  gradient,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = (props) => {
  const chartData = {
    labels: props.coinTimestamp,
    datasets: [
      {
        label: "BTC Prices",
        data: props.coinPrice,
        borderColor: props.borderColor,
        fill: true,
        pointBackgroundColor: props.pointBackgroundColor,
        pointBorderColor: props.pointBorderColor,
        tension: props.tension,
        drawOnChartArea: true,
        drawTicks: true,
        fill: true,
        gradient: props.gradient,
      },
    ],
  };

  const chartOptions = {
    showLabelBackdrop: true,
    layout: {
      padding: {
        top: 60,
      },
    },

    plugins: {
      legend: {
        display: false,
      },
    },
    animation: {
      duration: 1500,
    },
    maintainAspectRatio: true,
    responsive: true,

    scales: {
      x: {
        grid: {
          color: "transparent",
        },
        ticks: {
          display: props.displayTicks,
          font: {
            size: 7,
          },
          maxRotation: 49,
          minRotation: 49,
        },
      },
      y: {
        grid: {
          color: "transparent",
        },
        ticks: {
          display: props.displayTicks,
          beginAtZero: true,
          maxTicksLimit: 5,
        },
      },
    },
  };

  return (
    <Container>
      <Line data={chartData} options={chartOptions} />
    </Container>
  );
};

export default LineChart;
