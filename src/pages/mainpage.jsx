import AreaChart from "../components/AreaChart";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import "../components/Card.css";
import { useState } from "react";
import ChartCard from "../components/ChartCard";
import ChartCardList from "../components/ChartCardList";
import GuageChart from "../components/GaugeChart";

const Mainpage = () => {
  const [stateChart, setStateChart] = useState(true);
  const clickHandler = (e, stateChart) => {
    console.log(e.target);
    setStateChart((prevstateChart) => !prevstateChart);
  };
  const Gauge = () => {
    return <GuageChart />;
  };
  return (
    // <div className="container d-flex flex-wrap align-items-center">
    <div>
      <div>
        <div className="d-flex">
          <div className="card-body d-flex m-3">
            <ChartCardList />
          </div>
          <div className="card-body d-flex m-3 justify-content-center">
            <div className="chart-card-list">
              <ChartCard chartType={Gauge()} />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="card-body d-flex m-3 card-square"></div>
        <div className="card-body d-flex m-3 card-square"></div>
        <div className="card-body d-flex m-3 card-square"></div>
        <div className="card-body d-flex m-3 card-square"></div>
      </div>
    </div>
  );
};

export default Mainpage;
