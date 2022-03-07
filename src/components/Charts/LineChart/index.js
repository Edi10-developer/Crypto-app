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

        gradient: {
          backgroundColor: {
            axis: "y",
            colors: {
              10000: "rgba(0, 255, 95, .01)",
              20000: "rgba(0, 255, 95, .0025)",
              30000: "rgba(0, 255, 95, .05)",
              40000: "rgba(0, 255, 95, .1)",
              50000: "rgba(0, 255, 95, .2)",
              60000: "rgba(0, 255, 95, .4)",
              70000: "rgba(0, 255, 95, .8)",
            },
          },
        },
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
          display: false,
          beginAtZero: true,
          maxTicksLimit: 5,
        },
      },
    },
  };

  const divStyle = {
    height: "200px",
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default LineChart;
