import React from "react";

import "./header.css";
import { AiFillCustomerService, AiFillBell } from "react-icons/ai";
import logo from "./images/investeasylogo.png";
function Header() {
  return (
    <div className="pageHeader">
      <div className="pageAvatarWrapper">
        <div className="pageAvatar">WA</div>
        <div className="pageAvatarText">Damzylance</div>
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
