import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from './Table';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import Pagination from './Pagination';
import useGeneralTrigger from '../hooks/generalTrigger';
import useProcess from "../hooks/process";
import { useEffect } from 'react';

const RawMaterailListModal = () => {
    const { toggle} = useGeneralTrigger();
    const { setProcess } = useProcess();

    useEffect(() => {
        setProcess('raw_material')
        .then(function (data) {
            // data 변수에는 서버에서 받은 데이터가 들어 있음
            
        })
        .catch(function (error) {
            // 에러 처리
            console.error("데이터를 가져오는 중 에러 발생:", error);
        });
    } , []);

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

export default RawMaterailListModal;