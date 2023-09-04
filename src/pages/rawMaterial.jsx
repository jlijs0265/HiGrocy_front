import Table from "../components/Table";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import GeneralForm from "../components/GeneralForm";
import { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import GeneralCard from "../components/GeneralCard";
import useGeneralTrigger from "../hooks/generalTrigger";


const RawMaterial = () => {

    const tableCol = ['코드', '자재분류', '자재명', '재생가능여부', '단위', '기준수량', '원산지'];
    const selectOptions = [
        { value: 'option1', label: '품명' },
        { value: 'option2', label: '코드' },
    ]

    const selectOptions2 = [
        { value: 'option1', label: '여' },
        { value: 'option2', label: '부' },
    ]

    const { useStateRegister } = useGeneralTrigger();

    return (
        <div>
            <div className='container-scroller'>
                <div className='container-fluid page-body-wrapper'>
                    <div className='main-panel'>
                        <div className='content-wrapper'>
                            <div className='row h-100'>
                                <GeneralCard size={6}>
                                    <h4 className='card-title text-start mb-4'>원부자재 목록</h4>
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
                                    <Table tableCol={tableCol} colNum={tableCol.length}/>
                                    <Pagination />
                                </GeneralCard>
                                <div className='col-md-6 stretch-card'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <h4 className='card-title text-start mb-4' id='raw-title'>등록 페이지</h4>

                                            <Form className='p-2' action='/raw_material/insert' method='post' id='rawForm'>
                                                <GeneralForm inputType={'input'} label={'원부자재코드'} disabled={'disabled'} readOnly={'readOnly'} />
                                                <GeneralForm inputType={'select'} label={'자재분류'} options={selectOptions} />
                                                <GeneralForm inputType={'input'} label={'자재명'} />
                                                <GeneralForm inputType={'select'} label={'재생가능여부'} options={selectOptions2} />
                                                <GeneralForm inputType={'input'} label={'단위'} />
                                                <GeneralForm inputType={'input'} label={'기준수량'} />
                                                <GeneralForm inputType={'input'} label={'원산지'} />
                                            </Form>
                                            <button className='btn btn-primary me-2' hidden={useStateRegister() ? '' : 'hidden'} id='registerBtn'>등록</button>
                                            <button className='btn btn-success me-2' hidden={useStateRegister() ? 'hidden' : ''} id='updateBtn'>수정</button>
                                            <button className='btn btn-danger me-2' hidden={useStateRegister() ? 'hidden' : ''} id='deleteBtn'>삭제</button>
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

export default RawMaterial;