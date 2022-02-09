import { Line } from "react-chartjs-2";

const SparkLine = (props) => {
  const getLabels = (arr) => {
    let counter = 0;
    let labels = arr.map(() => counter++);
    return labels;
  };

  const chartData = (canvas) => {
    let borderColor = "";
    if (props.prices[0] > props.prices[props.prices.length - 1]) {
      borderColor = "rgba(254, 16, 64, 1)";
    } else {
      borderColor = "rgba(0, 255, 95, 1)";
    }
    return {
      labels: getLabels(props.prices),
      datasets: [
        {
          data: props.prices,
          tension: 0.4,
          borderColor: borderColor,
          fill: false,
        },
      ],
    };
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
          beginAtZero: true,
          maxTicksLimit: 5,
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
          beginAtZero: true,
          maxTicksLimit: 5,
        },
      },
    },
  };
  return (
    <>
      <Line data={chartData} options={options} width={115} height={70} />
    </>
  );
};

export default SparkLine;
