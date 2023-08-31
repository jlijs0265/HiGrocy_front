import React, { useState } from "react";
import "./SideBar.css";

const SideBar = () => {
  const [isActive, setIsActive] = useState(false);
  const handleButtonPress = () => {
    setIsActive(true);
  };

  const handleButtonRelease = () => {
    setIsActive(false);
  };
  return (
    <div className="side_style d-flex p-2 justify-content-evenly">
      <div className={"btn_style"} onClick={() => {window.location.href = "/"}}>
        <img
          src="assets/images/higrocyLogo.svg"
          alt="HiGrocy Button Logo SVG Image"
        />
      </div>
      <div className={"btn_style"} onClick={() => {window.location.href = "/pr"}}>
        <img
          src="assets/images/distribution.svg"
          alt="HiGrocy Button Logo SVG Image"
        />
      </div>
      <div className={"btn_style"} onClick={() => {window.location.href = "/order"}}>
        <img
          src="assets/images/order.svg"
          alt="HiGrocy Button Logo SVG Image"
        />
      </div>
      <div className={"btn_style"} onClick={() => {window.location.href = "/wh"}}>
        <img
          src="assets/images/wareHousing.svg"
          alt="HiGrocy Button Logo SVG Image"
        />
      </div>
      <div className={"btn_style"} onClick={() => {window.location.href = "/"}}>
        <img src="assets/images/eco.svg" alt="HiGrocy Button Logo SVG Image" />
      </div>
      <div className={"btn_style"}>
        <img
          src="assets/images/bricks.svg"
          alt="HiGrocy Button Logo SVG Image"
        />
      </div>
    </div>
  );
};

export default SideBar;
