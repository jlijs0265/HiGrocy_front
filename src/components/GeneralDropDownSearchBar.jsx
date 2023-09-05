import { Dropdown, DropdownButton, Form, InputGroup } from "react-bootstrap";
import { PropTypes } from "prop-types";

/*
  DropDown Component 
  prop = 
  {
    options : List로 dropdown에 들어갈 속성 받음
  }
*/

const GeneralDropDownSearchBar = ({options}) =>{
    return (
        <InputGroup className="mb-3 p-2">
              <DropdownButton
                variant="outline-secondary"
                title="검색"
                id="input-group-dropdown-1"
              >
                {options.map((opt, index) => (<Dropdown.Item href="#" key={index}>{opt}</Dropdown.Item>))}
              </DropdownButton>
              <Form.Control aria-label="Text input with dropdown button" />
        </InputGroup>

    );

}

GeneralDropDownSearchBar.prototype = {
    option : PropTypes.array
}

export default GeneralDropDownSearchBar;