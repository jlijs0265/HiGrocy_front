import React from "react";
import "./ProfileCard.css";
import { useState } from "react";

function ProfileCard({ isLogin }) {
  const [alarmStat, setAlarmStat] = useState(false);

  //추후 메시지 받으면 이 메서드 사용할 예정
  // const alarmHandler = (e) => {
  //   setAlarmStat(true);
  // };

  const vibration = (e) => {
    e.target.classList.add("vibration");
    setAlarmStat(true);
    console.log("shake~ shake~");
    setTimeout(() => {
      e.target.classList.remove("vibration");
    }, 400);
  };

  return (
    <div className="profile_banner d-flex content-justify-center p-2 m-3 col-4">
      <div className="profile_list">
        {isLogin ? (
          <img
            className="profile_banner_user"
            src="assets/images/avatar.svg"
            alt="profile_Card_Login_image"
          />
        ) : (
          <img
            className="profile_banner_user"
            src="assets/images/unknown.svg"
            alt="profile_Card_Login_image"
            style={{ backgroundColor: "white" }}
          />
        )}

        <div>
          {isLogin ? (
            <div className="profile_bold">Jenny Wilson</div>
          ) : (
            <div className="profile_bold">Anonymous</div>
          )}
          {isLogin ? (
            <div className="profile_text">UI/UX Designer</div>
          ) : (
            <div className="profile_text">Unknown User</div>
          )}
        </div>
      </div>
      <div className="content-justify-center">
        <img
          className="profile_banner_alarm m-2 item"
          src={
            alarmStat
              ? "assets/images/alarm_msg.svg"
              : "assets/images/alarm.svg"
          }
          onClick={vibration}
          alt="profile_Card_Alarm_image"
          //로그아웃 상태 시 활성화
          style={{ visibility: isLogin ? "visible" : "hidden" }}
          // style=
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

ProfileCard.defaultProps = {
  isLogin: true,
};
