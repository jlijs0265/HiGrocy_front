import React from "react";
import "./ProfileCard.css";
function ProfileCard() {
  return (
    <div className="profile_banner d-flex content-justify-center p-2">
      <div className="profile_list">
        {/*
        //로그아웃 상태 시 활성화
         <img
          className="profile_banner_user"
          src="assets/images/unknown.svg"
          alt="profile_Card_Login_image"
          style={{ backgroundColor: "white" }}
        /> */}
        <img
          className="profile_banner_user"
          src="assets/images/avatar.svg"
          alt="profile_Card_Login_image"
        />
        <div>
          <div className="profile_bold">Jenny Wilson</div>

          {/*
          //로그아웃 상태 시 활성화
          <div className="profile_bold">Jhon Doe</div>
        */}
          <div className="profile_text">UI/UX Designer</div>
          {/* 
          //로그아웃 상태 시 활성화
          <div className="profile_text">Unknown User</div>
           */}
        </div>
      </div>
      <div className="content-justify-center">
        <img
          className="profile_banner_alarm m-2"
          // src="assets/images/alarm.svg"
          //메시지 수신 시 활성화
          src="assets/images/alarm_msg.svg"
          alt="profile_Card_Alarm_image"
          //로그아웃 상태 시 활성화
          // style={{ visibility: "hidden" }}
        />
        <img
          className="profile_banner_logout m-2"
          src="assets/images/logout.svg"
          alt="profile_Card_Logout_image"
        />
      </div>
    </div>
  );
}

export default ProfileCard;
