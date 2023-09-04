import { PropTypes } from "prop-types";
import useGeneralTrigger from "../hooks/generalTrigger";

const Table = ({ rowNum, colNum, tableCol, ref }) => {
  const {modify} = useGeneralTrigger();

  return (
    <div className="table-responsive container">
      <table className="table table-bordered border-secondary rawTable">
        <thead>
          <tr>
            {tableCol.map((value, index) => {
              return <th key={index}>{value}</th>;
            })}
          </tr>
        </thead>
        <tbody className="rawbody" ref={ref}>
          <tr className="rawitem cursor-point" onClick={(e) =>{e.stopPropagation(); modify();}}>
            {Array(colNum)
              .fill(1)
              .map((value, index) => value + index)
              .map((colNum) => {
                return <td key={colNum}>{colNum}</td>;
              })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Table.defaultProps = {
  rowNum: 5,
  colNum: 5,
};

export default Table;
