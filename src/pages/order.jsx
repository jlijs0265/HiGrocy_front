const Order = () => {

    const tableCol = ['품목코드', '품명', '수량', '단가', '공급가액', '부가세', '합계금액'];
    return (
        <div>
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper">
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="page-header">
                                <h3 className="page-title p-3"></h3>
                            </div>
                            <div className="row h-100">
                                <div className="col-md-5 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body list-body">
                                            <h4 className="card-title pb-3">품목 선택</h4>
                                            <Form className='p-2' action='/raw_material/insert' method='post' id='rawForm'>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label className="text-start">품목코드</Form.Label>
                                                    <Form.Control type="text" disabled readOnly placeholder="품목코드" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label className="text-start">품명</Form.Label>
                                                    <Form.Control type="text" disabled readOnly placeholder="품명" />
                                                </Form.Group>                                    
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label className="text-start">수량</Form.Label>
                                                    <Form.Control type="text"placeholder="수량" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label className="text-start">단가</Form.Label>
                                                    <Form.Control type="text" disabled readOnly placeholder="단가" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label className="text-start">공급가액</Form.Label>
                                                    <Form.Control type="text"placeholder="공급가액" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label className="text-start">부가세</Form.Label>
                                                    <Form.Control type="text"placeholder="부가세" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label className="text-start">합계금액</Form.Label>
                                                    <Form.Control type="text"placeholder="합계금액" />
                                                </Form.Group>
                                                <div className="d-flex justify-content-end">
                                                    <button className="btn btn-outline-success">추가</button>
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
                                                            <td id="account"></td>
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

export default Order;