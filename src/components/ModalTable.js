import { PropTypes } from "prop-types";
import useGeneralTrigger from "../hooks/generalTrigger";
import useModal from "../hooks/modal";

const ModalTable = ({ tableCol, inputList, isListTable, useForm }) => {
  const { modify } = useGeneralTrigger();
  const { useModalSelector, removeModal, updateModal } = useModal();

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
          {useModalSelector().map((row, rowIndex) => {(
            <tr key={rowIndex} className="rawitem cursor-point" onClick={(e) => { e.stopPropagation(); modify(); (isListTable) ? removeModal(row.id) : updateModal(row, useForm) }}>
              {
                inputList.map((key, index) => (
                  <td key={index}>{row[key]}</td>
                ))
              }
            </tr>
          )})
            }
        </tbody>
      </table>
    </div>
  );
};

ModalTable.defaultProps = {
  rowNum: 5,
  colNum: 5,
  inputList: [],
  isListTable: false,
  useForm: 'rawForm',
};

export default ModalTable;
