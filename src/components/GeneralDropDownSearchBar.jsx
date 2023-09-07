import { Dropdown, DropdownButton, Form, InputGroup } from "react-bootstrap";
import { PropTypes } from "prop-types";
import useProcess from "../hooks/process";

/*
  DropDown Component 
  prop = 
  {
    options : List로 dropdown에 들어갈 속성 받음
  }
*/

const GeneralDropDownSearchBar = ({ options, url}) => {
  const {setProcess} = useProcess()
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const searchInfo = { "searchType": document.querySelector('#input-group-dropdown-1'), "searchContent": document.querySelector('#searchInput').value }
      setProcess({url}, searchInfo);
    }
  }

  return (
    <InputGroup className="mb-3 p-2">
      <DropdownButton
        variant="outline-secondary"
        title="검색"
        id="input-group-dropdown-1"
      >
        {options.map((opt, index) => (<Dropdown.Item href="#" key={index}>{opt}</Dropdown.Item>))}
      </DropdownButton>
      <Form.Control aria-label="Text input with dropdown button" id = {'searchInput'} onKeyDown={handleKeyDown} />
    </InputGroup>

  );

}

GeneralDropDownSearchBar.prototype = {
  option: PropTypes.array
}

export default GeneralDropDownSearchBar;