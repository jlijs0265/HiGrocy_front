import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import useGeneralTrigger from '../hooks/generalTrigger';
import ModalTable from './ModalTable';
import GeneralCard from './GeneralCard';
import GeneralForm from './GeneralForm';
import ReduxModalForm from './ReduxModalForm';

const MechineListModal = () => {
    const tableCol = ['기계코드', '기계종류명', '온실가스사용량', '에너지사용량'];
    const { toggle, useStateRegister, register } = useGeneralTrigger();
    const modalTableCol = ['machine_code', 'type', 'gas_emissions', 'energy_usage'];
    const FormId = 'ProductMechineForm';


    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>기계 종류 목록</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='row'>
                    <GeneralCard size={6}>
                        <InputGroup className="mb-3 p-2">
                            <DropdownButton
                                variant="outline-secondary"
                                title="검색"
                                id="input-group-dropdown-1">
                                <Dropdown.Item href="#">기계코드</Dropdown.Item>
                                <Dropdown.Item href="#">기계종류명</Dropdown.Item>
                            </DropdownButton>
                            <Form.Control aria-label="Text inputwith dropdown button" />
                        </InputGroup>
                        <div className="table-responsive">
                            <ModalTable tableCol={tableCol} inputList={modalTableCol} useForm={FormId} />
                        </div>
                    </GeneralCard>
                    <GeneralCard size={6} useResiger={false}>
                        <h4 className='card-title text-start mb-4' id='raw-title'>생산 기계등록 페이지</h4>
                        <ReduxModalForm formId={FormId} url={'pm'}>
                            <GeneralForm inputType={'input'} label={'기계코드'} name={'machine_code'} disabled={'disabled'} readOnly={'readOnly'} />
                            <GeneralForm inputType={'input'} label={'기계종류명'} name={'type'} />
                            <GeneralForm inputType={'input'} label={'온실가스사용량'} name={'gas_emissions'} />
                            <GeneralForm inputType={'input'} label={'에너지사용량'} name={'energy_usage'} />
                            
                        </ReduxModalForm>
                        <button className='btn btn-primary me-2' hidden={useStateRegister() ? 'hidden' : ''} id='deleteBtn'
                                onClick={() => {
                                    document.querySelector('#ProductMechineDetailForm').querySelector('input[name = machine_code]').value = document.querySelector('#' + FormId).querySelector('input[name=machine_code]').value;
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

export default MechineListModal;