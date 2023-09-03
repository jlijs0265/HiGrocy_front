import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const GuageChart = (props) => {
  const [rating, setRating] = useState("Fair");
  useEffect(() => {
    console.log("Rating Value:", rating);
  }, [rating]);

  const data = {
    labels: ["Yes", "No"],
    datasets: [
      {
        label: "My First Dataset",
        data: [750, 100],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        borderWidth: 1, //outline width
        circumference: 180, //half dou
        rotation: 270, //rotate chart
        cutout: "90%", //chart bord ratio
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      Tooltip: {
        enabled: false,
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const gaugeText = {
    id: "gaugeText",
    afterDatasetsDraw: (chart, args, pluginOptions) => {
      const {
        ctx,
        data,
        chartArea: { top, bottom, left, right, width, height },
        scales: { r },
      } = chart;

      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;
      const score = data.datasets[0].data[0];
      // let rating;

      if (score < 600) {
        // rating = "Bad";
        setRating((prev) => "Bad");
      }
      if (score >= 600 && score <= 700) {
        // rating = "Fair";
        setRating((prev) => "Fair");
      }
      if (score > 700) {
        // rating = "Good";
        setRating((prev) => "Good");
      }
      if (score > 800) {
        // rating = "Very good";
        setRating((prev) => "Very Good");
      }

      ctx.fillRect(xCoor, yCoor, 150, 3);
      ctx.font = "15px sans-serif";
      ctx.fillStyle = "#666";
      ctx.textBaseLine = "top";

      ctx.font = "15px sans-serif";
      ctx.textAlign = "right";
      ctx.fillText("500", right - 60, yCoor);

      ctx.font = "15px sans-serif";
      ctx.textAlign = "left";
      ctx.fillText("300", left + 60, yCoor);

      ctx.font = "50px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(score, xCoor, yCoor);

      ctx.font = "30px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseLine = "bottom";

      ctx.fillText(rating, xCoor, yCoor - 60);
    },
  };

  return (
    <div className={props.propStyle}>
      <Doughnut options={options} data={data} plugins={[gaugeText]} />
    </div>
  );
};

export default GuageChart;
