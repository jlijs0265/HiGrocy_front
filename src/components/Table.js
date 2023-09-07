import { PropTypes, object } from "prop-types";
import useGeneralTrigger from "../hooks/generalTrigger";
import useProcess from "../hooks/process";

<<<<<<< HEAD
const Table = ({tableCol, inputList, isListTable, useForm }) => {

=======
const Table = ({ tableCol, inputList, isListTable, useForm, flag }) => {
>>>>>>> e11a6a0021aa0fafc55f59fe27a9a074be940b96
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
          {useProcessSelector().map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="rawitem cursor-point"
              onClick={(e) => {
                e.stopPropagation();
                modify();
                isListTable
                  ? removeProcess(row.id)
                  : flag
                  ? console.log("이거아님")
                  : updateProcess(row, useForm);
              }}
            >
              {inputList.map((key, index) => {
                if (key.includes(".")) {
                  let okey = key.split(".");
                  return <td key={index}>{row[okey[0]][okey[1]]}</td>;
                } else {
                  return <td key={index}>{row[key]}</td>;
                }
              })}
            </tr>
          ))}
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
  useForm: "rawForm",
  flag: false,
};

export default Table;
