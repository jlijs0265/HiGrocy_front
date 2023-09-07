import Form from "react-bootstrap/Form";
import { PropTypes } from "prop-types";

const GeneralForm = ({
  pk,
  inputType,
  label,
  options,
  disabled,
  readOnly,
  name,
  value,
  onChange,
  onClick,
}) => {
  if (inputType === "input") {
    return (
      <Form.Group className="mb-3">
        <Form.Label className="text-start">{label}</Form.Label>
        <Form.Control
          id={pk}
          type="text"
          disabled={disabled}
          readOnly={readOnly}
          placeholder={label}
          name={name}
          value={value}
          onChange={onChange}
          onClick={onClick}
        />
      </Form.Group>
    );
  } else if (inputType === "select") {
    return (
      <Form.Group className="mb-3">
        <Form.Label className="text-start">{label}</Form.Label>
        <Form.Select aria-label="Default select example" name={name}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    );
  }
};

export default GeneralForm;
