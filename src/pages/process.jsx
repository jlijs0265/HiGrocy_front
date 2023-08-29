import { useState } from "react";
import Table from "../components/Table";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Process = () => {
    const tableCol = ['코드', '생산품명', '프로세스 보기'];

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
            <div className='container-scroller'>
                <div className='container-fluid page-body-wrapper'>
                    <div className='main-panel'>
                        <div className='content-wrapper'>
                            <div className='row'>
                                <div className='col-md-6 stretch-card'>
                                    <div className='card'>
                                        <div className='card-body list-body'>
                                            <h4 className='card-title text-start mb-4'>생산품 목록</h4>
                                            <InputGroup className="mb-3 p-2">
                                                <DropdownButton
                                                    variant="outline-secondary"
                                                    title="검색"
                                                    id="input-group-dropdown-1">
                                                    <Dropdown.Item href="#">품명</Dropdown.Item>
                                                    <Dropdown.Item href="#">코드</Dropdown.Item>
                                                </DropdownButton>
                                                <Form.Control aria-label="Text input with dropdown button" />
                                            </InputGroup>
                                            <Table tableCol={tableCol} colNum={tableCol.length} />

                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 stretch-card'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <h4 className='card-title text-start mb-4' id='raw-title'>생산품 프로세스</h4>
                                            <Form className='p-2' id='processForm'>
                                                <Form.Group className="mb-3" controlId="process.key">
                                                    <Form.Label className="text-start">생산품코드</Form.Label>
                                                    <Form.Control type="text" disabled readOnly placeholder="생산품코드" />
                                                    <Form.Label className="text-start">생산품명</Form.Label>
                                                    <Form.Control type="text" disabled readOnly placeholder="생산품명" />
                                                </Form.Group>
                                                <Form.Group className="d-flex justify-content-between mb-2">
                                                    <Form.Label className="text-start">프로세스 등록</Form.Label>
                                                    <button type="button" className="btn btn-sm btn-outline-success" onClick={addBomTag}>추가</button>
                                                </Form.Group>
                                                {bomTags.map((value, index) => (
                                                    <div key={index} className="border p-2 mb-3 rounded">
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <div className="d-flex justify-content-between mb-1">
                                                                <Form.Label className="text-start">기계코드</Form.Label>
                                                                <button type="button" className="btn btn-sm btn-outline-danger" data-key={index} onClick={removeBomTag}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                            <Form.Control type="text" disabled readOnly placeholder="기계코드" />
                                                            <Form.Label className="text-start">순서</Form.Label>
                                                            <Form.Control type="text" placeholder="순서" />
                                                            <Form.Label className="text-start">시간</Form.Label>
                                                            <Form.Control type="text" placeholder="시간" />
                                                        </Form.Group>
                                                    </div>))}
                                            </Form>
                                            <button className='btn btn-primary me-2' id='registerBtn'>등록</button>
                                            <button className='btn btn-success me-2' id='updateBtn'>수정</button>
                                            <button className='btn btn-danger me-2' id='deleteBtn'>삭제</button>
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

export default Process;