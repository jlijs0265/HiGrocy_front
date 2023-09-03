import Table from "../components/Table";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from "react";
import GeneralForm from "../components/GeneralForm";
import Pagination from "../components/Pagination";
import Modals from "../components/Modals";
import useGeneralForm from "../hooks/generalFrom";
import GeneralCard from "../components/GeneralCard";


const Product = () => {

    const tableCol = ['생산품코드', '생산품명'];
    const [bomTags, setBomTags] = useState([]);
    const { useStateSelector } = useGeneralForm();


    const addBomTag = () => {
        console.log('aa');
        setBomTags([...bomTags, bomTags.length + 1]);
    }


    const deleteBomBtnClick = (value) => {
        setBomTags(bomTags.filter(tag => tag !== value));
    }

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="container-scroller">
            <Modals showModal={showModal} toggleModal={toggleModal} />
            <div className="container-fluid page-body-wrapper">
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="row h-100">
                            <GeneralCard size={4}>
                                <h4 className="card-title">생산품 목록</h4>

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
                                <div className="table-responsive h-100 tableWarp">
                                    <Table tableCol={tableCol} colNum={tableCol.length} />
                                    <Pagination />
                                </div>
                            </GeneralCard>
                            <div className="col-md-8 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title" id="raw-title">생산품 등록</h4>
                                        <Form className='p-2'>
                                            <GeneralForm inputType={'input'} label={'생산품코드'} disabled={'disabled'} readOnly={'readOnly'} />
                                            <GeneralForm inputType={'input'} label={'생산품명'} />
                                            <Form.Group className="d-flex justify-content-between mb-2">
                                                <Form.Label className="text-start">BOM 등록</Form.Label>
                                                <button type="button" className="btn btn-sm btn-outline-success" onClick={addBomTag}>추가</button>
                                            </Form.Group>
                                            {bomTags.map((value, index) => (
                                                <div key={index} className="border p-2 mb-3 rounded">
                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                        <div className="d-flex justify-content-between mb-1">
                                                            <Form.Label className="text-start">원부자재코드</Form.Label>
                                                            <button className="btn btn-sm btn-outline-danger" onClick={(e) => {
                                                                e.preventDefault();
                                                                deleteBomBtnClick(value);
                                                            }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                                                </svg></button>
                                                        </div>
                                                        <Form.Control type="text" className="cursor-pointer disable-input" onClick={toggleModal} readOnly placeholder="원부자재코드" />
                                                        <Form.Label className="text-start">수량</Form.Label>
                                                        <Form.Control type="text" placeholder="수량" />
                                                    </Form.Group>
                                                </div>

                                            ))
                                            }
                                        </Form>
                                        <button className='btn btn-primary me-2' hidden={useStateSelector() ? '' : 'hidden'} id='registerBtn'>등록</button>
                                        <button className='btn btn-success me-2' hidden={useStateSelector() ? 'hidden' : ''} id='updateBtn'>수정</button>
                                        <button className='btn btn-danger me-2' hidden={useStateSelector() ? 'hidden' : ''} id='deleteBtn'>삭제</button>
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

export default Product;