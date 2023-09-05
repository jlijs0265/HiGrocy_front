import React, { useState } from "react";
import "./SideBar.css";
import { Tooltip } from "react-tooltip";
const SideBar = () => {
  const [isActive, setIsActive] = useState(false);
  const handleButtonPress = () => {
    setIsActive(true);
  };
  const [tooltipName, setTooltipName] = useState();
  const handleButtonRelease = () => {
    setIsActive(false);
  };
  const handleMouseOver = (e) => {
    e.stopPropagation(); // 이벤트 버블링 방지

    const id = e.currentTarget.id; // 부모 요소의 id 가져오기
    console.log(id);
    setTooltipName(id);
  };

  const title = () => {
    if (!tooltipName) {
      return ""; // tooltipName이 없는 경우 빈 문자열 반환
    }
    // 툴팁 내용을 반환
    if (tooltipName === "mainButton") {
      return "메인 돌아가기";
    } else if (tooltipName === "distributionButton") {
      return "생산 관리";
    } else if (tooltipName === "orderButton") {
      return "발주 관리";
    } else if (tooltipName === "whButton") {
      return "재고 관리";
    } else if (tooltipName === "ecoButton") {
      return "환경 관리";
    } else if (tooltipName === "rawButton") {
      return "품목 관리";
    }
  };

  return (
    <div className="side_style d-flex p-2 justify-content-evenly">
      <Tooltip anchorSelect={`#${tooltipName}`} place="right">
        <div>{title(tooltipName)}</div>
      </Tooltip>
      <div
        id="mainButton"
        className={"btn_style"}
        onMouseOver={handleMouseOver}
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <img
          src="assets/images/higrocyLogo.svg"
          alt="HiGrocy Button Logo SVG Image"
        />
      </div>
      <div
        id="distributionButton"
        className={"btn_style"}
        onMouseOver={handleMouseOver}
        onClick={() => {
          window.location.href = "/pr";
        }}
      >
        <img
          src="assets/images/distribution.svg"
          alt="HiGrocy Button Logo SVG Image"
        />
      </div>

      <div
        id="orderButton"
        className={"btn_style"}
        onMouseOver={handleMouseOver}
        onClick={() => {
          window.location.href = "/order";
        }}
      >
        <img
          src="assets/images/order.svg"
          alt="HiGrocy Button Logo SVG Image"
        />
      </div>
      <div
        id="whButton"
        className={"btn_style"}
        onMouseOver={handleMouseOver}
        onClick={() => {
          window.location.href = "/wh";
        }}
      >
        <img src="assets/images/wh.svg" alt="HiGrocy Button Logo SVG Image" />
      </div>
      <div
        id="ecoButton"
        className={"btn_style"}
        onMouseOver={handleMouseOver}
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <img src="assets/images/eco.svg" alt="HiGrocy Button Logo SVG Image" />
      </div>
      <div
        id="rawButton"
        className={"btn_style"}
        onMouseOver={handleMouseOver}
        onClick={() => {
          window.location.href = "/raw_material";
        }}
      >
        <img
          src="assets/images/warehousing.svg"
          alt="HiGrocy Button Logo SVG Image"
        />
      </div>
    </div>
  );
};

export default SideBar;
