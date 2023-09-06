import Table from "../components/Table";
import Form from 'react-bootstrap/Form';
import Modals from "../components/Modals";
import GeneralForm from "../components/GeneralForm";
import moment from "moment/moment";
import useProcess from "../hooks/process";
import useGeneralTrigger from "../hooks/generalTrigger";
import NavTemp from "../components/NavTemp";

const Order = () => {

    const requestDate = moment().format('YYYY-MM-DD HH:mm');
    const {
        addProcess,
        removeProcess,
        useProcessSelector
    } = useProcess();
    const { toggle } = useGeneralTrigger();

    const inputNameList = ['code', 'name', 'count', 'price', 'supply', 'vat', 'total'];

    const tableCol = ['품목코드', '품명', '수량', '단가', '공급가액', '부가세', '합계금액'];
    return (
        <div>
            <Modals />
            <NavTemp pageType={'order'} />
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper">
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="page-header">
                                <h3 className="page-title p-3">발주요청서</h3>
                            </div>
                            <div className="row h-100">
                                <div className="col-md-5 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body list-body">
                                            <h4 className="card-title pb-3">품목 선택</h4>
                                            <Form className='p-2' action='/raw_material/insert' method='post' id='rawForm'>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label className="text-start">품목코드</Form.Label>
                                                    <Form.Control type="text" className="cursor-pointer disable-input" name="code" onClick={() => {toggle('OrderList')}} readOnly placeholder="품목코드" />
                                                </Form.Group>
                                                <GeneralForm inputType={'input'} label={'품명'} disabled={'disabled'} readOnly={'readOnly'} name={'name'}/>
                                                <GeneralForm inputType={'input'} label={'수량'} name={'count'} />
                                                <GeneralForm inputType={'input'} label={'단가'} disabled={'disabled'} readOnly={'readOnly'}/>
                                                <GeneralForm inputType={'input'} label={'공급가액'} disabled={'disabled'} readOnly={'readOnly'} name={'supply'}/>
                                                <GeneralForm inputType={'input'} label={'부가세'} disabled={'disabled'} readOnly={'readOnly'} name={'vat'}/>
                                                <GeneralForm inputType={'input'} label={'합계금액'} disabled={'disabled'} readOnly={'readOnly'} name={'total'}/>
                                                <div className="d-flex justify-content-end">
                                                    <button type="button" className="btn btn-outline-secondary me-3" onClick={()=> {document.querySelector('#rawForm').reset();}}>모두 지우기</button>
                                                    <button type="button" className="btn btn-outline-success" onClick={() => {addProcess(document.querySelector('#rawForm'));}}>추가</button>
                                                </div>
                                            </Form>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title" id="raw-title">발주요청서 작성 </h4>
                                            <div className="table-responsive pt-3">
                                                <table className="table table-bordered ">
                                                    <thead>
                                                        <tr>
                                                            <th className="col-3 table-active">거래처코드</th>
                                                            <th>거래처코드</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        <tr>
                                                            <td className="table-active">거래처</td>
                                                            <td className="cursor-pointer bg-secondary bg-opacity-10" onClick={() => {toggle('AccountList')}}></td>
                                                        </tr>                      
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div className="pt-5">
                                                <h4 className="card-title" id="raw-title">품목 내역</h4>
                                                <div className="border border-secondary rounded p-3 table-responsive mb-4" id="bomForm">
                                                <Table tableCol={tableCol} colNum={tableCol.length} />
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-end">
                                                <button type="button" className="btn btn-primary" id="registerBtn">작성</button>
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

export default Order;