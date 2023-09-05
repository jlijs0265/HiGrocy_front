import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from './Table';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import Pagination from './Pagination';
import useGeneralTrigger from '../hooks/generalTrigger';

const AccountListModal = () => {
    const tableCol = ['거래처코드', '거래처명', '거래처번호'];
    const { toggle} = useGeneralTrigger();


    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>거래처 목록</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3 p-2">
                    <DropdownButton
                        variant="outline-secondary"
                        title="검색"
                        id="input-group-dropdown-1">
                        <Dropdown.Item href="#">거래처 코드</Dropdown.Item>
                        <Dropdown.Item href="#">거래처명</Dropdown.Item>
                    </DropdownButton>
                    <Form.Control aria-label="Text input with dropdown button" />
                </InputGroup>
                <div className="table-responsive">
                    <Table tableCol={tableCol} colNum={tableCol.length} />
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

export default AccountListModal;