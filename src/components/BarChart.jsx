import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const BarChart = (props) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [5, 6, 7, 1, 2, 3, 4, 19],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [10, 9, 5, 2, 4, 3, 6, 19],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  console.log(props.propStyle);

  return (
    <div className={props.propStyle}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;
