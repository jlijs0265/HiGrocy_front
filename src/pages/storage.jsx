import { DropdownButton, Form, InputGroup } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import GeneralCard from "../components/GeneralCard";
import useGeneralTrigger from "../hooks/generalTrigger";
import useProcess from "../hooks/process";
import { useDispatch, useSelector } from "react-redux";
import GeneralForm from "../components/GeneralForm";
import NavTemp from "../components/NavTemp";
import ReduxForm from "../components/ReduxForm";

const Storage = () => {
  const tableCol = ["창고코드", "창고명", "창고 위치", "담당자", "적재량"];
  const { useStateRegister } = useGeneralTrigger();
  const { addProcess, removeProcess, useProcessSelector, setProcess } =
    useProcess();

  setProcess("storage/list");

  const inputNameList = [
    "storage_code",
    "name",
    "location",
    "manager",
    "max_loadage",
  ];

  return (
    <div>
      <div className="container-scroller">
        <NavTemp pageType={"stroage"} />

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
                    inputList={inputNameList}
                  />
                </GeneralCard>
                <div className="col-md-6 stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title text-start mb-4">창고 등록</h4>
                      {/* <Form
                        className="p-2"
                        id="storageForm"
                        method="post"
                        action="/storage"
                      >
                      </Form> */}
                      <ReduxForm url={"storage"}>
                        <GeneralForm
                          inputType={"input"}
                          pk={"pk"}
                          label={"창고 코드"}
                          disabled={"disabled"}
                          readOnly={"readOnly"}
                          name={"storage_code"}
                        />
                        <GeneralForm
                          inputType={"input"}
                          label={"창고명"}
                          name={"name"}
                        />
                        <GeneralForm
                          inputType={"input"}
                          label={"창고 위치"}
                          name={"location"}
                        />
                        <GeneralForm
                          inputType={"input"}
                          label={"담당자"}
                          name={"manager"}
                        />
                        <GeneralForm
                          inputType={"input"}
                          label={"적재량"}
                          name={"max_loadage"}
                        />
                      </ReduxForm>
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
