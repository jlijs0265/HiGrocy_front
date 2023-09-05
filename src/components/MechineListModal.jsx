import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import Pagination from './Pagination';
import useGeneralTrigger from '../hooks/generalTrigger';
import ModalTable from './ModalTable';

const MechineListModal = () => {
    const tableCol = ['기계코드', '기계명', '온실가스사용량', '에너지사용량'];
    const { toggle} = useGeneralTrigger();
    const modalTableCol = ['machine_code','type', 'gas_emissions','energy_usage'];


    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>기계 종류 목록</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3 p-2">
                    <DropdownButton
                        variant="outline-secondary"
                        title="검색"
                        id="input-group-dropdown-1">
                        <Dropdown.Item href="#">기계코드</Dropdown.Item>
                        <Dropdown.Item href="#">기계명</Dropdown.Item>
                    </DropdownButton>
                    <Form.Control aria-label="Text inputwith dropdown button" />
                </InputGroup>
                <div className="table-responsive">
                    <ModalTable tableName={'modal'} tableCol={tableCol} colNum={tableCol.length} inputList={modalTableCol}/>
                </div>
                <Pagination />
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