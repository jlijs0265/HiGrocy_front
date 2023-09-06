import { useState } from "react";
import Table from "../components/Table";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import GeneralCard from "../components/GeneralCard";
import useGeneralTrigger from "../hooks/generalTrigger";
import Pagination from "../components/Pagination";
import useProcess from "../hooks/process";

const Process = () => {
  const tableCol = ["코드", "생산품명", "프로세스 보기"];
  const { useStateRegister } = useGeneralTrigger();
  const {
    addProcess,
    removeProcess,
    useProcessSelector
  } = useProcess();


  return (
    <div>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper">
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <GeneralCard size={6}>
                  <h4 className="card-title text-start mb-4">
                    생산품 목록
                  </h4>
                  <InputGroup className="mb-3 p-2">
                    <DropdownButton
                      variant="outline-secondary"
                      title="검색"
                      id="input-group-dropdown-1"
                    >
                      <Dropdown.Item href="#">품명</Dropdown.Item>
                      <Dropdown.Item href="#">코드</Dropdown.Item>
                    </DropdownButton>
                    <Form.Control aria-label="Text input with dropdown button" />
                  </InputGroup>
                  <Table tableCol={tableCol} colNum={tableCol.length} />
                  <Pagination />
                </GeneralCard>
                <GeneralCard size={6} useResiger={false}>
                  <h4 className="card-title text-start mb-4" id="raw-title">
                    생산품 프로세스
                  </h4>
                  <Form className="p-2" id="processForm">
                    <Form.Group className="mb-3">
                      <Form.Label className="text-start">
                        생산품코드
                      </Form.Label>
                      <Form.Control
                        type="text"
                        disabled
                        readOnly
                        placeholder="생산품코드"
                      />
                      <Form.Label className="text-start">
                        생산품명
                      </Form.Label>
                      <Form.Control
                        type="text"
                        disabled
                        readOnly
                        placeholder="생산품명"
                      />
                    </Form.Group>
                    <Form.Group className="d-flex justify-content-between mb-2">
                      <Form.Label className="text-start">
                        프로세스 등록
                      </Form.Label>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-success"
                        onClick={addProcess}
                      >
                        추가
                      </button>
                    </Form.Group>
                    {/* {useListSelector().map((value, index) => (
                      <div key={index} className="border p-2 mb-3 rounded">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <div className="d-flex justify-content-between mb-1">
                            <Form.Label className="text-start">
                              기계코드
                            </Form.Label>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => removeList(value)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-dash"
                                viewBox="0 0 16 16"
                              >
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                              </svg>
                            </button>
                          </div>
                          <Form.Control
                            type="text"
                            disabled
                            readOnly
                            placeholder="기계코드"
                          />
                          <Form.Label className="text-start">
                            순서
                          </Form.Label>
                          <Form.Control type="text" placeholder="순서" />
                          <Form.Label className="text-start">
                            시간
                          </Form.Label>
                          <Form.Control type="text" placeholder="시간" />
                        </Form.Group>
                      </div>
                    ))
                    } */}
                  </Form>
                  <button className='btn btn-primary me-2' hidden={useStateRegister() ? '' : 'hidden'} id='registerBtn'>등록</button>
                  <button className='btn btn-success me-2' hidden={useStateRegister() ? 'hidden' : ''} id='updateBtn'>수정</button>
                  <button className='btn btn-danger me-2' hidden={useStateRegister() ? 'hidden' : ''} id='deleteBtn'>삭제</button>
                </GeneralCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
