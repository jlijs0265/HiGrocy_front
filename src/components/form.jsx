import Form from 'react-bootstrap/Form';
import { PropTypes } from "prop-types";

const Form = ({ inputType, label, options }) => {
  if (inputType === 'input') {
    return <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label className="text-start">{label}</Form.Label>
      <Form.Control type="text" placeholder={label} />
    </Form.Group>
  } else if (inputType === 'select') {
    return <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label className="text-start">{label}</Form.Label>
      <Form.Select aria-label="Default select example">
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </Form.Select>
    </Form.Group>
  }
};

Form.propTypes = {
  inputType : PropTypes.string.isRequired,
}

export default Form;
