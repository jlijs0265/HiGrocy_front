import { Button, Form } from "react-bootstrap";
import { PropTypes } from "prop-types";
/*
  시작일 ~ 끝나는 날짜 입력받는 Component
*/

const GeneralDateInput = () => {
  return (
    <div className="col-md-12 row mb-3">
      <div className="col-sm-4">
        <Form.Control type="date" id="start"></Form.Control>
      </div>
      <div className="col-sm-2">
        <div className="d-flex justify-content-center">
        <span> ~ </span>
        </div>
      </div>
      <div className="col-sm-4">
      <Form.Control type="date" id="end"></Form.Control>
      </div>
      <div className = "col-sm-2">
      <Button className="btn btn-secondary">검색</Button>
      </div>
    </div>

  );

}

GeneralDateInput.prototype = {
}

export default GeneralDateInput;