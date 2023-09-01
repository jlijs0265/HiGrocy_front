import { DropdownButton, Form, InputGroup } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import { useEffect, useRef, useState } from "react";

const WareHousing = () => {
  const tableCol = [
    "입출고 내역 코드",
    "품목코드",
    "창고코드",
    "입출고 현황",
    "입출고 날짜",
    "재고 수량",
    "입출고 유형별 코드",
    "유통기한",
  ];
  const buttonText = ["등록", "수정", "삭제"];
  const [formSelect, setFormSelect] = useState(true);
  const [outSelect, setOutSelect] = useState(false);

  const trClick = (e) => {
    console.log(e.target.closest("tr"));
    console.log(e.target.innerText);
    setFormSelect(false);
  };

  return (
    <div>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper">
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-md-12 stretch-card">
                  <div className="card">
                    <div className="card-body list-body">
                      <div className="col-md-6 mb-4">
                        <SearchBar></SearchBar>
                      </div>
                      <h4 className="card-title text-start mb-4">재고 관리</h4>
                      <Table
                        tableCol={tableCol}
                        colNum={tableCol.length}
                        trClick={trClick}
                      />
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
