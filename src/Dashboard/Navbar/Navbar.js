import React from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import {
  AiFillHome,
  AiFillWallet,
  AiFillSetting,
  AiFillFileText,
  AiOutlineLogout,
} from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

function Navbar() {
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);
  const splitLocation = pathname.split("/");
  console.log(splitLocation);

  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="primaryNav">
          <li className={splitLocation[2] === "home" ? "active" : "notAcive"}>
            <Link to="/dashboard/home">
              <div className="linkWrapper">
                <div className="linkIcon">
                  <AiFillHome />
                </div>
                <div className="linkText">Home</div>
              </div>
            </Link>
          </li>
          <li className={splitLocation[2] === "borrow" ? "active" : "notAcive"}>
            <Link to="/dashboard/borrow">
              <div className="linkWrapper">
                <div className="linkIcon">
                  <AiFillWallet />
                </div>
                <div className="linkText">Borrow</div>
              </div>
            </Link>
          </li>
          <li className={splitLocation[2] === "wallet" ? "active" : "notAcive"}>
            <Link to="/dashboard/wallet">
              <div className="linkWrapper">
                <div className="linkIcon">
                  <AiFillWallet />
                </div>
                <div className="linkText">Wallet</div>
              </div>
            </Link>
          </li>
          <li className={splitLocation[2] === "transactions" ? "active" : ""}>
            <Link to="/dashboard/transactions">
              <div className="linkWrapper">
                <div className="linkIcon">
                  <AiFillFileText />
                </div>
                <div className="linkText">Tranactions</div>
              </div>
            </Link>
          </li>
          <li className={splitLocation[2] === "profile" ? "active" : ""}>
            <Link to="/dashboard/profile">
              <div className="linkWrapper">
                <div className="linkIcon">
                  <FaUserAlt />
                </div>
                <div className="linkText">Profile</div>
              </div>
            </Link>
          </li>
          <li className={splitLocation[2] === "settings" ? "active" : ""}>
            <Link to="/dashboard/settings">
              <div className="linkWrapper">
                <div className="linkIcon">
                  <AiFillSetting />
                </div>
                <div className="linkText">Settings</div>
              </div>
            </Link>
          </li>
        </div>
        <div className="logout">
          <li>
            <Link to="/dashboard/wallet">
              <div className="linkWrapper">
                <div className="linkIcon">
                  <AiOutlineLogout />
                </div>
                <div className="linkText">Logout</div>
              </div>
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
