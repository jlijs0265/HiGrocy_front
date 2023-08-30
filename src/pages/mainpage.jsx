import AreaChart from "../components/AreaChart";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import "../components/Card.css";

const Mainpage = () => {
  return (
    // <div className="container d-flex flex-wrap align-items-center">
    <div className="card-body d-flex">
      <div className="m-2 card-main">
        <LineChart />
      </div>
      <div className="m-2 card-main">
        <BarChart />
      </div>
      <div className="m-2 card-main">
        <AreaChart />
      </div>
    </div>
    // </div>
  );
};

export default Mainpage;
