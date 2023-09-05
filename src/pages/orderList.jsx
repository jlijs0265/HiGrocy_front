import { useState } from "react";
import Table from "../components/Table";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { ToggleButton } from "react-bootstrap";
import GeneralCard from "../components/GeneralCard";
import GeneralMainPanel from "../components/GeneralMainPanel";
import GeneralDropDownSearchBar from "../components/GeneralDropDownSearchBar";
import GeneralDateInput from "../components/GeneralDateInput";

/*
  /orderlist Page
   - TODO : 가져올 객체 key 값 domain확인하여 적기
*/


const OrderList = () => {
  
  const [tigger, setTigger] = useState(2);
  let uppertableCol = [];
  let lowTableCol = [];
  let dropdownOption = [];
  //TODO 가져올 객체 key 값 domain확인하여 적기
  let upperName = [];
  let lowName = [];

  switch(tigger){
    case 1:
      uppertableCol = ["발주번호", '발주일자','거래처','담당사원','공급가 합계','총 합계'];
      lowTableCol = ['품목 코드', '자재분류', '품목명', '재생가능여부', '단위', '기준수량', '원산지'];
      break;
    case 2:
      uppertableCol = ['품목 코드', '자재분류', '품목명', '재생가능여부', '단위', '기준수량', '원산지']; 
      lowTableCol = ['발주 번호',' 발주일자','거래처', '담당사원',' 배송예정일', '공급가 합계', '총 합계'];
      dropdownOption = ['품목명', '품목코드'];

      break;
    case 3:
      uppertableCol = ['발주 번호',' 발주일자','거래처', '담당사원',' 배송예정일', '공급가 합계', '총 합계']; 
      lowTableCol = ['품목 코드', '자재분류', '품목명', '재생가능여부', '단위', '기준수량', '원산지'];
      dropdownOption = ['거래처명', '담당사원'];

      break;
  }

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
            발주날짜별
          </ToggleButton>
          <ToggleButton id="tbg-radio-2" value={2} variant="outline-secondary">
            품목별{" "}
          </ToggleButton>
          <ToggleButton id="tbg-radio-3" value={3} variant="outline-secondary">
            거래처별
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <div className="container-scroller">
        <GeneralMainPanel>
          <GeneralCard size={12} useResiger={false}>
            <h4 className="card-title text-start mb-4">
              {tigger === 2
                ? "품목검색"
                : tigger === 1
                  ? "발주날짜별 검색"
                  : "거래처별 검색"}
            </h4>
            {tigger == 1?<GeneralDateInput/>:<GeneralDropDownSearchBar options ={dropdownOption}/>}
            <Table tableCol={uppertableCol} colNum={uppertableCol.length} />
          </GeneralCard>
          <GeneralCard size={12} useResiger={false}>
            <h4 className="card-title text-start mb-4" id="raw-title">
              발주 현황
            </h4>
            <Table tableCol={lowTableCol} colNum={lowTableCol.length} />
          </GeneralCard>
        </GeneralMainPanel>
      </div>
    </div>
  );
};

export default OrderList;
