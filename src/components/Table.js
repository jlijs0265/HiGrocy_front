import { PropTypes } from "prop-types";
import useGeneralTrigger from "../hooks/generalTrigger";

const Table = ({ rowNum, colNum, tableCol, inputList }) => {
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
        <tbody className="rawbody">
          {inputList &&
            inputList.map((row, rowIndex) => (
              <tr key={rowIndex} className="rawitem cursor-point" onClick={(e) => { e.stopPropagation(); modify(); }}>
                {
                  Object.keys(row).map((key, index) => (
                    <td key={index}>{row[key]}</td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

Table.defaultProps = {
  rowNum: 5,
  colNum: 5,
  inputList: [],
};

export default Table;
