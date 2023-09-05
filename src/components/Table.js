import { PropTypes } from "prop-types";
import useGeneralTrigger from "../hooks/generalTrigger";
import useProcess from "../hooks/process";

const Table = ({ tableCol, inputList, isListTable, useForm }) => {
  const { modify } = useGeneralTrigger();
  const { useProcessSelector, removeProcess, updateProcess } = useProcess();

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
          {useProcessSelector().map((row, rowIndex) => 
            (
              <tr key={rowIndex} className="rawitem cursor-point" onClick={(e) => { e.stopPropagation(); modify(); (isListTable) ? removeProcess(row.id) : updateProcess(row, useForm) }}>
                {
                  inputList.map((key, index) => (
                    <td key={index}>{row[key]}</td>
                  )
                  )
                }
              </tr>
            )
            )
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
  isListTable: false,
  useForm: 'rawForm',
};

export default Table;
