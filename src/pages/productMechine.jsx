import { useEffect, useState } from "react";
import Table from "../components/Table";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import GeneralCard from "../components/GeneralCard";
import Pagination from "../components/Pagination";
import useGeneralTrigger from "../hooks/generalTrigger";
import GeneralMainPanel from "../components/GeneralMainPanel";
import ReduxForm from "../components/ReduxForm";
import GeneralForm from "../components/GeneralForm";
import Modals from "../components/Modals";
import NavTemp from "../components/NavTemp";


const ProductMechine = () => {
    const tableCol = ['이력코드', '기계명', '공장명', '위치'];
    const PMDetailCol = ['pm_detail_code', 'machine_code', 'factory_name', 'location'];
    const { toggle } = useGeneralTrigger();

    return (
        <div>
            <Modals />
            <NavTemp pageType={'productRequest'} />

            <div className='container-scroller'>
                <GeneralMainPanel>
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
                            <Table tableCol={tableCol} colNum={tableCol.length} inputList={PMDetailCol}/>
                            <Pagination></Pagination>
                        </GeneralCard>
                        <GeneralCard size={6} useResiger={false}>
                            <h4 className='card-title text-start mb-4' id='raw-title'>생산 기계등록 페이지</h4>
                            <ReduxForm formId={'ProductMechineForm'} url={'pm'}>
                                <GeneralForm inputType={'input'} label={'생산기계내역코드'} disabled={'disabled'} readOnly={'readOnly'} name={'pm_detail_code'}/>
                                <GeneralForm inputType={'input'} label={'공장명'}  name={'factory_name'}/>
                                <GeneralForm inputType={'input'} label={'위치'} name={'location'}/>
                                <GeneralForm inputType={'input'} label={'기계코드'} name={'code'} readOnly={'readOnly'} onClick={() => {toggle('MechineList')}}/>
                                <GeneralForm inputType={'input'} label={'기계명'} name={'machine_code'}/>
                            </ReduxForm>
                        </GeneralCard>
                    </div>
                </GeneralMainPanel >
            </div>
        </div >
    );
}

export default ProductMechine;