import { Line } from "react-chartjs-2";

const SparkLine = (props) => {
  const getLabels = (labelsArray) => {
    let counter = 0;
    let labels = labelsArray.map(() => counter++);
    return labels;
  };

  const checkColor = (weekPercentageResult) => {
    if (weekPercentageResult > 0) {
      return "rgba(0, 255, 95, 1)";
    } else {
      return "rgba(255, 0, 7, 1)";
    }
  };
  const chartsData = {
    labels: getLabels(props.price),
    datasets: [
      {
        label: props.coinName,
        data: props.price,
        borderColor: checkColor(props.weekPercentageResult),
        backgroundColor: checkColor(props.weekPercentageResult),
        pointBackgroundColor: "transparent",
        pointBorderColor: "transparent",
        with: 35,
        tension: 0.5,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      //maintainAspectRatio: true,
      y: {
        display: false,
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 0.3,
          },
        },
      },
    },
  };

  return <Line data={chartsData} options={chartOptions} />;
};

export default SparkLine;
