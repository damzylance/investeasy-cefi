import React from "react";
import { AiFillCalculator } from "react-icons/ai";
function Transactioncard(props) {
  return (
    <div className="transaction">
      <div className="transactionDetails">
        <div className="transactionType">
          <div
            className="typeIcon"
            style={{
              color:
                props.typeTitle === "Withdraw" && "Refund"
                  ? "rgb(211 109 109)"
                  : "#63a663",
            }}
          >
            {props.typeIcon}
            <AiFillCalculator />
          </div>
          <div className="typeDetails">
            <h2 className="typeTitle">{props.typeTitle}</h2>
            <p className="transactionDate">{props.Date} April 1, 10:00pm</p>
          </div>
        </div>
      </div>
      <div className="transactionValue">
        <h2
          className="valueTitle"
          style={{
            color:
              props.typeTitle === "Withdraw" && "Refund"
                ? "rgb(211 109 109)"
                : "#63a663",
          }}
        >
          {props.value}1.0 BNB
        </h2>
        <p className="nairaValue">N1,000,000{}</p>
      </div>
    </div>
  );
}

export default Transactioncard;
