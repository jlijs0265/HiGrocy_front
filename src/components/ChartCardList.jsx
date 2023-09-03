import React from "react";
import "./ChartCard.css";
import ChartCard from "./ChartCard";
import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import GuageChart from "./GaugeChart";
import LineChart from "./LineChart";

const ChartCardList = () => {
  const propStyle = "chart-canvas";
  const chartType = "BarChart"; // 차트 타입을 문자열로 지정
  const chartType1 = () => {
    <BarChart />;
  };

  const Bar = () => {
    return <BarChart />;
  };
  const Area = () => {
    return <AreaChart />;
  };
  const Line = () => {
    return <LineChart />;
  };
  const Gauge = () => {
    return <GuageChart />;
  };
  return (
    <section className="chart-card-list">
      <ChartCard chartType={Bar()} />
      <ChartCard chartType={Area()} />
      <ChartCard chartType={Line()} />
    </section>
  );
};

export default ChartCardList;
