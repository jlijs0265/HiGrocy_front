import { useEffect, useState } from "react";
import Table from "../components/Table";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import GeneralCard from "../components/GeneralCard";
import Pagination from "../components/Pagination";
import useGeneralForm from "../hooks/generalFrom";

const ProductMechine = () => {
    const tableCol = ['코드', '기계명', '공장명', '위치'];
    const {useStateSelector} = useGeneralForm();

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
    console.log()


    //axois 

    //

    return (
        <div>
            <div className='container-scroller'>
                <div className='container-fluid page-body-wrapper'>
                    <div className='main-panel'>
                        <div className='content-wrapper'>
                            <div className='row'>
                                <GeneralCard size={6}>
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
                                    <Pagination></Pagination>
                                </GeneralCard>
                                <GeneralCard size={6} useResiger={false}>
                                    <h4 className='card-title text-start mb-4' id='raw-title'>생산 기계등록 페이지</h4>
                                    <Form className='p-2' id='processForm'>
                                        <Form.Group className="mb-3" controlId="process.key">
                                            <Form.Label className="text-start">생산품코드</Form.Label>
                                            <Form.Control className="mb-3" type="text" disabled readOnly placeholder="생산품코드" />
                                            <Form.Label className="text-start">공장명</Form.Label>
                                            <Form.Control className="mb-3" type="text" disabled readOnly placeholder="공장명" />
                                            <Form.Label className="text-start">위치</Form.Label>
                                            <Form.Control className="mb-3" type="text" disabled readOnly placeholder="위치" />
                                            <Form.Label className="text-start">기계코드</Form.Label>
                                            <Form.Control className="mb-3" type="text" disabled readOnly placeholder="기계코드" />
                                            <Form.Label className="text-start">기계명</Form.Label>
                                            <Form.Control className="mb-3" type="text" disabled readOnly placeholder="기계명" />
                                        </Form.Group>
                                    </Form>
                                    <button className='btn btn-primary me-2'  hidden={useStateSelector() ? '' : 'hidden'} id='registerBtn'>등록</button>
                                    <button className='btn btn-success me-2' hidden={useStateSelector() ? 'hidden' : ''} id='updateBtn'>수정</button>
                                    <button className='btn btn-danger me-2' hidden={useStateSelector() ? 'hidden' : ''} id='deleteBtn'>삭제</button>
                                </GeneralCard>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default ProductMechine;