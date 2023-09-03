import React from "react";
import "./ChartCard.css";
const ChartCard = ({ chartType }) => {
  const propStyle = "chart-canvas";

  // chartType에 따라서 해당 차트 컴포넌트를 선택
  return (
    <article className="chart-card">
      <header className="chart-card-header">
        <h2>안녕하세요</h2>
      </header>
      {chartType}
      <div className="tags">
        <a href="#">Link1</a>
        <a href="#">Link2</a>
      </div>
    </article>
  );
};

export default ChartCard;
