import Table from "../components/Table";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const RawMaterial = () => {

    const tableCol = ['코드', '자재분류', '자재명', '재생가능여부', '단위', '기준수량', '원산지'];

    return (
        <div>
            원자재 관리 페이지
            <div className='container-scroller'>
                <div className='container-fluid page-body-wrapper'>
                    <div className='main-panel'>

                        <div className='content-wrapper'>
                            <div className='row h-100'>
                                <div className='col-md-6 stretch-card'>
                                    <div className='card'>
                                        <div className='card-body list-body'>
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
                                            <Table tableCol={tableCol} colNum={tableCol.length} />

                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 stretch-card'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <h4 className='card-title text-start mb-4' id='raw-title'>등록 페이지</h4>

                                            <Form className='p-2' action='/raw_material/insert' method='post' id='rawForm'>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label className="text-start">원부자재코드</Form.Label>
                                                    <Form.Control type="text" disabled readOnly placeholder="원부자재코드" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label className="text-start">자재분류</Form.Label>
                                                <Form.Select aria-label="Default select example">
                                                    <option value="1">원자재</option>
                                                    <option value="2">부자재</option>
                                                </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label className="text-start">자재명</Form.Label>
                                                    <Form.Control type="text"placeholder="자재명" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label className="text-start">재생가능여부</Form.Label>
                                                <Form.Select aria-label="Default select example">
                                                    <option value="1">여</option>
                                                    <option value="2">부</option>
                                                </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label className="text-start">단위</Form.Label>
                                                    <Form.Control type="text"placeholder="단위" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label className="text-start">기준수량</Form.Label>
                                                    <Form.Control type="text"placeholder="기준수량" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label className="text-start">원산지</Form.Label>
                                                    <Form.Control type="text"placeholder="원산지" />
                                                </Form.Group>
                                            </Form>
                                            <button className='btn btn-primary me-2' id='registerBtn'>등록</button>
                                            <button className='btn btn-success me-2' id='updateBtn'>수정</button>
                                            <button className='btn btn-danger me-2' id='deleteBtn'>삭제</button>
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