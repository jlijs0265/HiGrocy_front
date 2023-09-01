import { useEffect, useRef, useState } from "react";

const tableCol = ['거래처코드','거래처명','거래처번호'];
const buttonText = ['등록', '수정', '삭제'];
const [formSelect, setFormSelect] = useState(true);
const [outSelect, setOutSelect] = useState(false);

const trClick = (e) => {
    console.log(e.target.closest('tr'));
    console.log(e.target.innerText);
    setFormSelect(false);
}

const account = () => {
    return(
        <div>
            <div className='container-scroller'>
                <div className='container-fluid page-body-wrapper'>
                    <div className='main-panel'>
                        <div className='content-wrapper'>
                            <div className='row'>
                                <div className='col-md-6 stretch-card'>
                                    <div className='card'>
                                        <div className='card-body list-body'>
                                            <Table tableCol={tableCol} colNum={tableCol.length} trClick={trClick} />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 stretch-card'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <h4 className='card-title text-start mb-4'>등록 페이지</h4>
                                            <Form className='p-2' id='processForm'>
                                                <Form.Group className="mb-3">
                                                    <Form.Label className="text-start mt-2">거래처 코드</Form.Label>
                                                    <Form.Control type="text" disabled readOnly placeholder="거래처 코드" />
                                                    <Form.Label className="text-start mt-2">거래명</Form.Label>
                                                    <Form.Control type="text"  placeholder="거래명"/>
                                                    <Form.Label className="text-start mt-2">거래처번호</Form.Label>
                                                    <Form.Control type="text" placeholder="거래처번호" />                                               
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
                                            <button className='btn btn-success me-2' style={{ visibility: 'visible' }} >수정</button>
                                            <button className='btn btn-danger me-2' style={{ visibility: 'visible' }} >삭제</button>
                                            <button className='btn btn-success me-2' style={{ visibility: 'secondary' }} >입력</button>
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

export default account;