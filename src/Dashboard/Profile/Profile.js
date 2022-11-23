import React from "react";
import Header from "../Globalcomponents/Header/Header";
import { Link } from "react-router-dom";
import { AiFillEdit, AiFillProfile, AiFillBank } from "react-icons/ai";
import { BsPeopleFill, BsFillPersonBadgeFill } from "react-icons/bs";
import "./profile.css";
function Profile() {
  return (
    <section className="dashContainer">
      <Header />
      <div className="dashWrapper">
        <h1 className="sectionHeader">Profile</h1>
        <div className="avatarWrapper">
          <div className="avatar">WA</div>
          <div className="avatarText">Damzylance</div>
        </div>
        <div className="menuContainer">
          <Link to="edit">
            <div className="menuItem">
              <AiFillEdit size={20} />
              <p> Edit Profile</p>
            </div>
          </Link>
          <Link to="kyc">
            <div className="menuItem">
              <BsFillPersonBadgeFill size={20} />
              <p> Complete KYC</p>
            </div>
          </Link>
          <Link to="bank">
            <div className="menuItem">
              <AiFillBank size={20} />
              <p> Bank Details</p>
            </div>
          </Link>
          <Link to="/d">
            <div className="menuItem">
              <BsPeopleFill size={20} />
              <p> Referrals </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Profile;
