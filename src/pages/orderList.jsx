import { useState } from "react";
import Table from "../components/Table";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const OrderList = () => {
    const tableCol = ['코드', '기계명', '공장명', '위치'];

    //redux로 관리 할것
    const [bomTags, setBomTags] = useState([]);
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
            <div className="row" id="trigger">
                <div classNamess="col-2" id="pr_code">
                    <p>발주날짜별</p>
                </div>
                <div classNameass="col-2" id="item_code">
                    <p>품목별</p>
                </div>
                <div classNames="col-2" id="account_code">
                    <p>거래처별</p>
                </div>
            </div>

            <div className='container-scroller'>
                <div className='container-fluid page-body-wrapper'>
                    <div className='main-panel'>
                        <div className='content-wrapper'>
                            <div className='row'>
                                <div className='col-md-12 stretch-card'>
                                    <div className='card'>
                                        <div className='card-body list-body'>
                                            <h4 className='card-title text-start mb-4'>생산 기계</h4>
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
                                <div className='col-md-12 stretch-card'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <h4 className='card-title text-start mb-4' id='raw-title'>생산 기계등록 페이지</h4>
                                            <Table tableCol={tableCol} colNum={tableCol.length} />

                                        </div>
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