import { DropdownButton, Form, InputGroup } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import GeneralCard from "../components/GeneralCard";
import useGeneralTrigger from "../hooks/generalTrigger";

const Storage = () => {
  const tableCol = ["창고코드", "창고명", "창고 위치", "담당자"];
  const { useStateRegister, toggle } = useGeneralTrigger();


  // const trClick = (e) => {
  //   e.stopPropagation();
  //   console.log(e.target.closest("tr"));
  //   console.log(e.target.innerText);
  //   setRegister(false);
  //   setModify(true);
  // };

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
                      <h4 className="card-title text-start mb-4">창고 관리</h4>
                      <Table
                        tableCol={tableCol}
                        colNum={tableCol.length}
                      />
                    </GeneralCard>
                <div className="col-md-6 stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title text-start mb-4">창고 등록</h4>
                      <Form className="p-2" id="processForm">
                        <Form.Group className="mb-3">
                          <Form.Label className="text-start mt-2">
                            창고 코드
                          </Form.Label>
                          <Form.Control
                            type="text"
                            disabled
                            readOnly
                            placeholder="창고 코드"
                          />
                          <Form.Label className="text-start mt-2">
                            창고명
                          </Form.Label>
                          <Form.Control type="text" placeholder="창고명" />
                          <Form.Label className="text-start mt-2">
                            창고 위치
                          </Form.Label>
                          <Form.Control type="text" placeholder="창고 위치" />
                          <Form.Label className="text-start mt-2">
                            담당자
                          </Form.Label>
                          <Form.Control type="text" placeholder="담당자명" />
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

export default Storage;
