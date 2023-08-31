import { useState } from "react";
import Table from "../components/Table";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { ToggleButton } from "react-bootstrap";


const OrderList = () => {
    const tableCol = ['코드', '기계명', '공장명', '위치'];

    //redux로 관리 할것
    const [bomTags, setBomTags] = useState([]);
    const [tigger, setTigger] = useState(2);

    const addBomTag = () => {

        setBomTags([...bomTags, '']);
    }

    const removeBomTag = (e) => {
        const key = e.target.dataset.key;
        console.log(key);
        console.log(bomTags[key]);

    }
    //axois 

    //

    return (

        <div>
            <div className="container mb-3">
                <ToggleButtonGroup type="radio" name="options" defaultValue={2} onChange={(e)=>{setTigger(e)}}>
                    <ToggleButton id="tbg-radio-1" value={1} variant="outline-secondary">
                        발주날짜별
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2} variant="outline-secondary">
                        품목별                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3} variant="outline-secondary">
                        거래처별
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>

            <div className='container-scroller'>
                <div className='container-fluid page-body-wrapper'>
                    <div className='main-panel'>
                        <div className='content-wrapper'>
                            <div className='row-md-12 stretch-card mb-3'>
                                <div className='card'>
                                    <div className='card-body list-body'>
                                        <h4 className='card-title text-start mb-4'>
                                            {tigger===2?"품목검색":tigger===1?"발주날짜별 검색":"거래처별 검색"}
                                        </h4>
                                        <InputGroup className="mb-3 p-2">
                                            <DropdownButton
                                                variant="outline-secondary"
                                                title="검색"
                                                id="input-group-dropdown-1">
                                                <Dropdown.Item href="#">기계명</Dropdown.Item>
                                                <Dropdown.Item href="#">공장명</Dropdown.Item>
                                                <Dropdown.Item href="#">위치</Dropdown.Item>
                                                <Dropdown.Item href="#">코드</Dropdown.Item>
                                            </DropdownButton>
                                            <Form.Control aria-label="Text input with dropdown button" />
                                        </InputGroup>
                                        <Table tableCol={tableCol} colNum={tableCol.length} />

                                    </div>
                                </div>
                            </div>
                            <div className='row-md-12 stretch-card'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <h4 className='card-title text-start mb-4' id='raw-title'>발주 현황</h4>
                                        <Table tableCol={tableCol} colNum={tableCol.length} />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderList;