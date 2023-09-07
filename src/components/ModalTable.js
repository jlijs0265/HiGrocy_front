import { PropTypes } from "prop-types";
import useGeneralTrigger from "../hooks/generalTrigger";
import useModal from "../hooks/modal";

const ModalTable = ({ tableCol, inputList, useForm }) => {
  const { modify } = useGeneralTrigger();
  const { useModalSelector, updateModal} = useModal();

 
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
            return (<tr key={rowIndex} className="rawitem cursor-point" 
              onClick={(e) => { e.stopPropagation(); modify(); updateModal(row, useForm) }}>
              {inputList.map((key, index) => {
                return(<td key={index}>{row[key]}</td>);
              })
              }
            </tr>)
            })}
        </tbody>
      </table>
    </div>
  );
};


export default ModalTable;
