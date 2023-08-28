import AreaChart from "../components/AreaChart";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";

const Mainpage = () => {
    return (
        <div className="contain-fluid page-body-wrapper">
            <div className="">
                <LineChart />
            </div>
            <div className="">
                <AreaChart />
            </div>
            <div className="">
                <BarChart />
            </div>
        </div>
    );
}

export default Mainpage;