import React from "react";
import "./currencycard.css";
import { BsChevronRight } from "react-icons/bs";
function Currencycard(props) {
  return (
    <div className="currencyCard">
      <div className="currencyDetails">
        <div className="currencyLogo">
          <img src={props.logo} alt="" />
        </div>
        <div className="coinLabel">
          <div className="coinTicker">
            <p>{props.ticker}</p>
          </div>
          <div className="coinName">
            <p>{props.label}</p>
          </div>
        </div>
      </div>

      <div className="coinBalance">
        <div className="coinUnit">
          <p>{props.unit}</p>
        </div>
        <div className="coinValue">
          <p>N{props.value}</p>
        </div>
      </div>
      <div className="BsChevronRight">
        <BsChevronRight size={20} style={{ fontWeight: 900 }} />
      </div>
    </div>
  );
}

export default Currencycard;
