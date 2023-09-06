import Table from "../components/Table";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import GeneralForm from "../components/GeneralForm";
import Pagination from "../components/Pagination";
import GeneralCard from "../components/GeneralCard";
import ReduxForm from "../components/ReduxForm";
import useProcess from "../hooks/process";
import { useState, useEffect } from "react";

const RawMaterial = () => {
    const tableCol = ['코드', '자재분류', '자재명', '재생가능여부', '단위', '기준수량', '원산지'];
    const selectOptions = [
        { value: '원자재', label: '원자재' },
        { value: '부자재', label: '부자재' },
    ]

    const selectOptions2 = [
        { value: '여', label: '여' },
        { value: '부', label: '부' },
    ]
    const {
        setProcess
    } = useProcess();

    useEffect(() => {
        setProcess('raw_material')
        .then(function (data) {
            // data 변수에는 서버에서 받은 데이터가 들어 있음
            
        })
        .catch(function (error) {
            // 에러 처리
            console.error("데이터를 가져오는 중 에러 발생:", error);
        });
    }, []);


    //GeneralForm 으로 지정한 name, Table에 데이터 순서와도 연관이 있음.
    const inputNmaeList = ['raw_materials_code', 'raw_type', 'name', 'renewability', 'unit', 'standard_quantity', 'origin'];

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
                                    <Table tableCol={tableCol} colNum={tableCol.length} inputList={inputNmaeList} />
                                    <Pagination />
                                </GeneralCard>
                                <div className='col-md-6 stretch-card'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <h4 className='card-title text-start mb-4' id='raw-title'>등록 페이지</h4>
                                            <ReduxForm formId={'rawForm'} url={'raw_material'}>
                                                <GeneralForm inputType={'input'} label={'원부자재코드'} disabled={'disabled'} readOnly={'readOnly'} name={'raw_materials_code'} />
                                                <GeneralForm inputType={'select'} label={'자재분류'} options={selectOptions} name={'raw_type'} />
                                                <GeneralForm inputType={'input'} label={'자재명'} name={'name'} />
                                                <GeneralForm inputType={'select'} label={'재생가능여부'} options={selectOptions2} name={'renewability'} />
                                                <GeneralForm inputType={'input'} label={'단위'} name={'unit'} />
                                                <GeneralForm inputType={'input'} label={'기준수량'} name={'standard_quantity'} />
                                                <GeneralForm inputType={'input'} label={'원산지'} name={'origin'} />
                                            </ReduxForm>
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
};

export default RawMaterial;
