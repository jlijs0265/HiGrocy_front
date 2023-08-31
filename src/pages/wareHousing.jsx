
import { DropdownButton, Form, InputGroup } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import { useEffect, useRef, useState } from "react";

const WareHousing = () => {
    
    const tableCol = ['창고코드','창고명','창고 위치','담당자'];
    const buttonText = ['등록', '수정', '삭제'];
    const [formSelect, setFormSelect] = useState(true);
    const [outSelect, setOutSelect] = useState(false);
    
    const trClick = (e) => {
        console.log(e.target.closest('tr'));
        console.log(e.target.innerText);
        setFormSelect(false);
    }

    return (
        <div>
            <div className='container-scroller'>
                <div className='container-fluid page-body-wrapper'>
                    <div className='main-panel'>
                        <div className='content-wrapper'>
                            <div className='row'>
                                <div className='col-md-6 stretch-card'>
                                    <div className='card'>
                                        <div className='card-body list-body'>
                                            <div className="col-md-12 mb-4">
                                            <SearchBar></SearchBar>
                                            </div>
                                            <h4 className='card-title text-start mb-4'>창고 관리</h4>
                                            <Table tableCol={tableCol} colNum={tableCol.length} trClick={trClick} />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 stretch-card'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <h4 className='card-title text-start mb-4'>창고 등록</h4>
                                            <Form className='p-2' id='processForm'>
                                                <Form.Group className="mb-3">
                                                    <Form.Label className="text-start mt-2">창고 코드</Form.Label>
                                                    <Form.Control type="text" disabled readOnly placeholder="창고 코드" />
                                                    <Form.Label className="text-start mt-2">창고명</Form.Label>
                                                    <Form.Control type="text"  placeholder="창고명"/>
                                                    <Form.Label className="text-start mt-2">창고 위치</Form.Label>
                                                    <Form.Control type="text" placeholder="창고 위치" />
                                                    <Form.Label className="text-start mt-2">담당자</Form.Label>
                                                    <Form.Control type="text"  placeholder="담당자명"/>
                                                </Form.Group>
                                            </Form>
                                            
                                            {formSelect ? 
                                        <button 
                                        className='btn btn-primary me-2'
                                        
                                        style={{ visibility: 'visible' }}
                                        >
                                            등록</button> 
                                            :
                                            <div>
                                            <button 
                                            className='btn btn-success me-2'
                                            
                                            style={{ visibility: 'visible' }}
                                            >수정</button>
                                            <button 
                                            className='btn btn-danger me-2' 
                                            
                                            style={{ visibility: 'visible' }}
                                            >삭제</button>
                                            </div>
                                        }
                                            
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

export default WareHousing;