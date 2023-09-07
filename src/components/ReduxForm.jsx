import { Form } from "react-bootstrap";
import useGeneralTrigger from "../hooks/generalTrigger";
import useProcess from "../hooks/process";
import { PropTypes } from "prop-types";
/*
    Redux로 관리하는 customHook인 useProcess를 사용하는 Form
    prop = {
        formId : form contorl에 사용할 id String,
        url : backend단에서 컨트롤러에 사용할 url
    }
*/

const ReduxForm = ({ children, formId, url }) => {
  const { addProcess, removeProcess, changeProcess } = useProcess();
  const { useStateRegister, register } = useGeneralTrigger();

  return (
    <>
      <Form className="p-2" id={formId}>
        <input type="hidden" id="id"></input>
        {children}
      </Form>
      <button
        className="btn btn-primary me-2"
        hidden={useStateRegister() ? "" : "hidden"}
        id="registerBtn"
        onClick={() => addProcess(document.querySelector("#" + formId), url)}
      >
        등록
      </button>
      <button
        className="btn btn-success me-2"
        hidden={useStateRegister() ? "hidden" : ""}
        id="updateBtn"
        onClick={() => {changeProcess(document.querySelector("#" + formId), url); register();}}
      >
        수정
      </button>
      <button
        className="btn btn-danger me-2"
        hidden={useStateRegister() ? "hidden" : ""}
        id="deleteBtn"
        onClick={() => {
          removeProcess(document.querySelector("#" + formId), url);
          document.querySelector("#" + formId).reset();
          register();
        }}
      >
        삭제
      </button>
    </>
  );
};

ReduxForm.defaultProps = {
  formId: "rawForm",
  url: "raw_material",
};

ReduxForm.prototype = {
  formId: PropTypes.string,
  url: PropTypes.string,
};

export default ReduxForm;
