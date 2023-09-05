import { DropdownButton, Form, InputGroup } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import GeneralCard from "../components/GeneralCard";
import useGeneralTrigger from "../hooks/generalTrigger";

const Account = () => {
  const tableCol = ["거래처코드", "거래처명", "거래처번호"];
  const { useStateRegister, toggle } = useGeneralTrigger();

  return (
    <div>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper">
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <GeneralCard size={6}>
                      <div className="col-md-12 mb-4">
                        <SearchBar></SearchBar>
                      </div>
                      <h4 className="card-title text-start mb-4">거래처 관리</h4>
                      <Table
                        tableCol={tableCol}
                        colNum={tableCol.length}
                      />
                    </GeneralCard>
                <div className="col-md-6 stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title text-start mb-4">거래처 등록</h4>
                      <Form className="p-2" id="processForm">
                        <Form.Group className="mb-3">
                          <Form.Label className="text-start mt-2">
                            거래처 코드
                          </Form.Label>
                          <Form.Control
                            type="text"
                            disabled
                            readOnly
                            placeholder="거래처 코드"
                          />
                          <Form.Label className="text-start mt-2">
                            거래처명
                          </Form.Label>
                          <Form.Control type="text" placeholder="거래처명" />
                          <Form.Label className="text-start mt-2">
                            거래처번호
                          </Form.Label>
                          <Form.Control type="text" placeholder="거래처번호" />
                          
                        </Form.Group>
                      </Form>
                      <button className='btn btn-primary me-2' hidden={useStateRegister() ? '' : 'hidden'} id='registerBtn'>등록</button>
                      <button className='btn btn-success me-2' hidden={useStateRegister() ? 'hidden' : ''} id='updateBtn'>수정</button>
                      <button className='btn btn-danger me-2' hidden={useStateRegister() ? 'hidden' : ''} id='deleteBtn'>삭제</button>
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
};

export default Account;