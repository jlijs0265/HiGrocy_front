import Table from "../components/Table";
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import Modals from "../components/Modals";
import GeneralForm from "../components/GeneralForm";
import moment from "moment/moment";

const ProductRequest = () => {

    const requestDate = moment().format('YYYY-MM-DD HH:mm');
    
    const [showModal, setShowModal] = useState(false);
    const [inputs, setInputs] = useState({
        code: '',
        name: '',
        count: '',
        price: '',
        supply: '',
        vat: '',
        total: '',
    });
    const [inputList, setInputList] = useState([]);

    const { code, name, count, price, supply, vat, total } = inputs; // 비구조화 할당을 통해 값 추출...?

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onReset = (e) => {
        e.preventDefault();
        setInputs({
            code: '',
            name: '',
            count: '',
            price: '',
            supply: '',
            vat: '',
            total: '',
        })
    };

    const [listValue, setListValue] = useState('');
    const toggleModal = (value) => {
        setListValue(value);
        setShowModal(!showModal);
    };

    useEffect(() => {
        console.log(inputs);
    }, [inputs]);

    const clickAddBtn = (e) => {
        e.preventDefault();
        setInputList(inputList => [...inputList, inputs]);
        setInputs({
            code: '',
            name: '',
            count: '',
            price: '',
            supply: '',
            vat: '',
            total: '',
        })
    };

    useEffect(() => {
        console.log(inputList);
    }, [inputList]);

    const tableCol = ['품목코드', '품명', '수량', '단가', '공급가액', '부가세', '합계금액'];
    return (
        <div>
            <Modals showModal={showModal} toggleModal={toggleModal} innerModal={listValue} />
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper">
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="page-header">
                                <h3 className="page-title p-3">생산요청서</h3>
                            </div>
                            <div className="row h-100">
                                <div className="col-md-5 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body list-body">
                                            <h4 className="card-title pb-3">품목 선택</h4>
                                            <Form className='p-2' action='/raw_material/insert' method='post' id='rawForm'>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label className="text-start">품목코드</Form.Label>
                                                    <Form.Control type="text" className="cursor-pointer disable-input" onClick={() => {toggleModal('ProductList')}} readOnly placeholder="품목코드" name="code" value={code} />
                                                </Form.Group>
                                                <GeneralForm inputType={'input'} label={'품명'} disabled={'disabled'} readOnly={'readOnly'} name={'name'} value={name} onChange={onChange} />
                                                <GeneralForm inputType={'input'} label={'수량'} name={'count'} value={count} onChange={onChange} />
                                                <GeneralForm inputType={'input'} label={'단기'} disabled={'disabled'} readOnly={'readOnly'} name={'price'} value={price} onChange={onChange} />
                                                <GeneralForm inputType={'input'} label={'공급가액'} disabled={'disabled'} readOnly={'readOnly'} name={'supply'} value={supply} onChange={onChange} />
                                                <GeneralForm inputType={'input'} label={'부가세'} disabled={'disabled'} readOnly={'readOnly'} name={'vat'} value={vat} onChange={onChange} />
                                                <GeneralForm inputType={'input'} label={'합계금액'} disabled={'disabled'} readOnly={'readOnly'} name={'total'} value={total} onChange={onChange} />
                                                <div className="d-flex justify-content-end">
                                                    <button className="btn btn-outline-secondary me-3" onClick={onReset}>모두 지우기</button>
                                                    <button className="btn btn-outline-success" onClick={clickAddBtn}>추가</button>
                                                </div>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title" id="raw-title">생산요청서 작성</h4>
                                            <div className="table-responsive pt-3">
                                                <table className="table table-bordered ">
                                                    <thead>
                                                        <tr>
                                                            <th className="col-3 table-active"> 생산요청코드</th>
                                                            <th>생산요청코드</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="table-active">생산요청일</td>
                                                            <td id="today">{requestDate}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="table-active">창고</td>
                                                            <td className="cursor-pointer bg-secondary bg-opacity-10" onClick={() => {toggleModal('StorageList')}}></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="table-active">사원</td>
                                                            <td id="employee"></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="table-active">총 합계금액</td>
                                                            <td id="totalPlus">0</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="pt-5">
                                                <h4 className="card-title" id="raw-title">품목 내역</h4>
                                                <div className="border border-secondary rounded p-3 table-responsive mb-4" id="bomForm">
                                                    <Table tableCol={tableCol} colNum={tableCol.length} inputList={inputList}/>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end">
                                                <button type="button" className="btn btn-primary" id="registerBtn">등록</button>
                                            </div>

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

export default ProductRequest;