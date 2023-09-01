import AreaChart from "../components/AreaChart";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import "../components/Card.css";
import { useState } from "react";

const Mainpage = () => {
  const [stateChart, setStateChart] = useState(true);
  const clickHandler = (e, stateChart) => {
    console.log(e.target);
    setStateChart((prevstateChart) => !prevstateChart);
  };

  return (
    // <div className="container d-flex flex-wrap align-items-center">
    <div>
      <div>
        <div className="d-flex">
          <div className="card-body chart-body d-flex">
            <div
              className="card card-main parent "
              style={{
                transform: stateChart
                  ? "rotate3d(3, -50, 0, 55deg)"
                  : "rotate3d(0, 0, 0, 0deg)",
                zIndex: "0",
              }}
              onClick={clickHandler}
            >
              <BarChart className="child" />
            </div>
            <div
              className="card-main parent"
              style={{
                transform: stateChart
                  ? "rotate3d(3, -50, 0, 55deg)"
                  : "rotate3d(0, 0, 0, 0deg)",
                zIndex: "1",
              }}
              onClick={clickHandler}
            >
              <AreaChart className="child" />
            </div>
            <div
              className="card-main parent"
              style={{
                transform: stateChart
                  ? "rotate3d(3, -50, 0, 55deg)"
                  : "rotate3d(0, 0, 0, 0deg)",
                zIndex: "2",
              }}
              onClick={clickHandler}
            >
              <LineChart className="child" />
            </div>
          </div>
          <div className="card-body d-flex m-3"></div>
        </div>
      </div>
      <div className="d-flex m-3">
        <div className="card-body d-flex m-3 card-square-sm"></div>
        <div className="card-body d-flex m-3 card-square-sm"></div>
        <div className="card-body d-flex m-3 card-square-sm"></div>
        <div className="card-body d-flex m-3 card-square-sm"></div>
      </div>
    </div>
  );
};

export default Mainpage;
