import { PropTypes } from "prop-types";
import useGeneralForm from "../hooks/generalFrom";

const Table = ({ rowNum, colNum, tableCol, trClick, ref, inputList }) => {

  const { modify } = useGeneralForm();
  // let input = {};
  // if(inputList.length === 0) {
  //   Array(colNum)
  //             .fill(1)
  //             .map((value, index) => value + index)
  //             .map((colNum) => {
  //               input[colNum] = colNum
  //             })
  //   console.log(input);
  //   inputList = [input];
  // }


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
