import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from './Table';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';

const RawMaterailListModal = ({ toggleModal }) => {

    const tableCol = ['코드', '자재분류', '자재명', '단위', '원산지'];

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>원부자재 목록</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                <div className="table-responsive">
                    <Table tableCol={tableCol} colNum={tableCol.length} />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={toggleModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={toggleModal}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </>
    );
}

export default RawMaterailListModal;