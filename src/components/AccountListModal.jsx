import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from './Table';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import Pagination from './Pagination';
import useGeneralTrigger from '../hooks/generalTrigger';
import ModalTable from './ModalTable';
import ReduxModalForm from './ReduxModalForm';
import GeneralCard from './GeneralCard';
import GeneralForm from './GeneralForm';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useProcess from '../hooks/process';

const AccountListModal = () => {
    const tableCol = ['거래처코드', '거래처명', '거래처번호'];
    const { toggle, useStateRegister, register} = useGeneralTrigger();
    const modalTableCol = ['account_code', 'name', 'phone_number'];
    const FormId = 'OrderForm'
    const { setProcess } = useProcess();

    setProcess('account');


    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>거래처 목록</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='row'>
                    <GeneralCard size={6}>
                        <InputGroup className="mb-3 p-2">
                            <DropdownButton
                                variant="outline-secondary"
                                title="검색"
                                id="input-group-dropdown-1">
                                <Dropdown.Item href="#">거래처코드</Dropdown.Item>
                                
                                <Dropdown.Item href="#">거래처명</Dropdown.Item>
                            </DropdownButton>
                            <Form.Control aria-label="Text input with dropdown button" />
                        </InputGroup>
                        <div className="table-responsive">
                        
                            <Table 
                                tableCol={tableCol} 
                                inputList={modalTableCol} 
                                useForm={FormId} />
                            
                        </div>
                    </GeneralCard>
                    <GeneralCard size={6} useResiger={false}>
                        <h4 className='card-title text-start mb-4' id='raw-title'>거래처 등록 페이지</h4>
                        <ReduxModalForm formId={FormId} url={'account'}>
                            <GeneralForm inputType={'input'} label={'거래처코드'} name={'account_code'} disabled={'disabled'} readOnly={'readOnly'} />
                            <GeneralForm inputType={'input'} label={'거래처명'} name={'name'} />
                        </ReduxModalForm>
                        <button className='btn btn-primary me-2' hidden={useStateRegister() ? 'hidden' : ''} id='deleteBtn'
                                onClick={() => {
                                    document.querySelector('#OrderDetailForm').querySelector('input[name = code]').value = document.querySelector('#' + FormId).querySelector('input[name=account_code]').value;
                                    document.querySelector('#' + FormId).reset();
                                    register();
                                    toggle();
                                }}>선택</button>

                    </GeneralCard>    
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={toggle}>
                    닫기
                </Button>
            </Modal.Footer>
        </>
    );
}

export default AccountListModal;