import React from "react";

import "./header.css";
import { AiFillCustomerService, AiFillBell } from "react-icons/ai";
import logo from "./images/investeasylogo.png";
function Header(props) {
  const alias = localStorage.getItem("alias");
  const email = localStorage.getItem("email");
  return (
    <div
      className="pageHeader"
      style={{ backgroundColor: props.backgroundColor, color: props.color }}
    >
      <div className="pageAvatarWrapper">
        <div className="pageAvatar">{alias}</div>
        <div className="pageAvatarText">{email}</div>
      </div>
      <div className="logoWrapper">
        <img src={logo} alt="" />
      </div>
      <div className="pageNotificationIcons">
        <AiFillCustomerService className="pageIcon" />
        <AiFillBell className="pageIcon" />
      </div>
    </div>
  );
}

export default Header;
