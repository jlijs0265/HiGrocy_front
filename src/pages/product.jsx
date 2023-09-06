import Table from "../components/Table";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import GeneralForm from "../components/GeneralForm";
import Pagination from "../components/Pagination";
import Modals from "../components/Modals";
import GeneralCard from "../components/GeneralCard";
import useGeneralTrigger from "../hooks/generalTrigger";
import useProcess from "../hooks/process";
import GeneralMainPanel from "../components/GeneralMainPanel";
import GeneralDropDownSearchBar from "../components/GeneralDropDownSearchBar";
import ReduxForm from "../components/ReduxForm";
import NavTemp from "../components/NavTemp";


const Product = () => {

    const tableCol = ['생산품코드', '생산품명', '이미지 파일'];
    const dropdownOption = ['품명', '코드'];

    const { toggle } = useGeneralTrigger();
    const {
        addList,
        removeList,
        useListSelector
    } = useProcess();


    return (
        <div className="container-scroller">
            <Modals />
            <NavTemp pageType={'item'} />

            <GeneralMainPanel>
                <div className="row h-100">
                    <GeneralCard size={4}>
                        <h4 className="card-title">생산품 목록</h4>
                        <GeneralDropDownSearchBar options={dropdownOption} />
                        <div className="table-responsive h-100 tableWarp">
                            <Table tableCol={tableCol} colNum={tableCol.length} />
                            <Pagination />
                        </div>
                    </GeneralCard>
                    <GeneralCard size={8} useResiger={false}>
                        <h4 className="card-title" >생산품 등록</h4>
                        <ReduxForm>
                            <GeneralForm inputType={'input'} label={'생산품코드'} disabled={'disabled'} readOnly={'readOnly'} />
                            <GeneralForm inputType={'input'} label={'생산품명'} />
                            <Form.Group controlId="formFileMultiple" className="mb-3">
                                <Form.Label>이미지 파일첨부</Form.Label>
                                <Form.Control type="file" multiple />
                            </Form.Group>
                            <Form.Group className="d-flex justify-content-between mb-2">
                                <Form.Label className="text-start">BOM 등록</Form.Label>
                                <button type="button" className="btn btn-sm btn-outline-success" onClick={addList}>추가</button>
                            </Form.Group>
                            {useListSelector().map((value, index) => (
                                <div key={index} className="border p-2 mb-3 rounded">
                                    <Form.Group className="mb-3">
                                        <div className="d-flex justify-content-between mb-1">
                                            <Form.Label className="text-start">원부자재코드</Form.Label>
                                            <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => removeList(value)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                            </svg></button>
                                        </div>
                                        <Form.Control type="text" className="cursor-pointer disable-input" onClick={() => { toggle("RawMaterailList") }} readOnly placeholder="원부자재코드" />
                                        <Form.Label className="text-start">수량</Form.Label>
                                        <Form.Control type="text" placeholder="수량" />
                                    </Form.Group>
                                </div>

                            ))
                            }
                        </ReduxForm>
                    </GeneralCard>
                </div>
            </GeneralMainPanel >
        </div>

    );
}

export default Product;