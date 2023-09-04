import Form from 'react-bootstrap/Form';
import { PropTypes } from "prop-types";

const GeneralForm = ({ inputType, label, options, disabled, readOnly, name, value, onChange}) => {
  if (inputType === 'input') {
    return <Form.Group className="mb-3">
      <Form.Label className="text-start">{label}</Form.Label>
      <Form.Control type="text" disabled={disabled} readOnly={readOnly} placeholder={label} name={name} value={value} onChange={onChange}/>
    </Form.Group>
  } else if (inputType === 'select') {                              
    return <Form.Group className="mb-3">
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
  inputType : PropTypes.string,
  label : PropTypes.string,
  disabled : PropTypes.string,
  readOnly : PropTypes.string,
}

export default GeneralForm;
