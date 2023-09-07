import { PropTypes } from "prop-types";
import useGeneralTrigger from "../hooks/generalTrigger";
import useModal from "../hooks/modal";

const ModalTable = ({ tableCol, inputList, useForm, flag }) => {
  const { modify } = useGeneralTrigger();
  const { useModalSelector, updateModal } = useModal();

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
          {useModalSelector().map((row, rowIndex) => {
            return (
              <tr
                key={rowIndex}
                className="rawitem cursor-point"
                onClick={(e) => {
                  e.stopPropagation();
                  modify();
                  flag ? console.log("이것도아님") : updateModal(row, useForm);
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
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

ModalTable.defaultProps = {
  flag: false,
};

export default ModalTable;
