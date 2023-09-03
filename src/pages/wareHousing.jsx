import {
  DropdownButton,
  Form,
  InputGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import { useEffect, useRef, useState } from "react";
import Modals from "../components/Modals";
import Pagination from "../components/Pagination";

const WareHousing = () => {
  const tableCol = [
    "입출고 내역 코드",
    "품목코드",
    "창고코드",
    "입출고 현황",
    "입출고 날짜",
    "입출고 수량",
    "입출고 유형별 코드",
    "유통기한",
  ];
  const bomCol = [
    "품목코드",
    "품목명",
    "원부자재(원/부)",
    "재생여부(Y/N)",
    "재고 수량",
  ];
  const [register, setRegister] = useState(true);
  const [modify, setModify] = useState(false);

  const trClick = (e) => {
    e.stopPropagation();
    console.log(e.target.closest("tr"));
    console.log(e.target.innerText);
    setRegister(false);
    setModify(true);
  };
  const [tigger, setTigger] = useState(2);
  return (
    <div>
      <div className="container mb-3">
        <ToggleButtonGroup
          type="radio"
          name="options"
          defaultValue={2}
          onChange={(e) => {
            setTigger(e);
          }}
        >
          <ToggleButton id="tbg-radio-1" value={1} variant="outline-secondary">
            입/출고별 조회
          </ToggleButton>
          <ToggleButton id="tbg-radio-2" value={2} variant="outline-secondary">
            전체 조회{" "}
          </ToggleButton>
          <ToggleButton id="tbg-radio-3" value={3} variant="outline-secondary">
            생산별 조회
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper">
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-md-12 stretch-card">
                  <div className="card">
                    <div className="card-body list-body">
                      <div className="col-md-6 mb-4">
                        <SearchBar />
                      </div>
                      <h4 className="card-title text-start mb-4">
                        {tigger === 2
                          ? "전체 수불부 조회"
                          : tigger === 1
                          ? "입/출고별 조회"
                          : "생산별 조회"}
                      </h4>
                      <Table
                        tableCol={tableCol}
                        colNum={tableCol.length}
                        trClick={trClick}
                      />
                        <Pagination />
                    </div>
                    <div className="card-body list-body mt-4">
                      <h4 className="card-title text-start mb-4">재고 조회</h4>
                      <Table
                        tableCol={bomCol}
                        colNum={bomCol.length}
                        trClick={trClick}
                      />
                      <div className="d-flex justify-content-center">
                        <Pagination />
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
};

export default WareHousing;
