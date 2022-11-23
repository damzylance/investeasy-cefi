import React from "react";
import Header from "../Globalcomponents/Header/Header";
import { BsChevronLeft } from "react-icons/bs";
import "./transaction.css";

function Transaction() {
  const transaction = {
    coinName: "Binance Coin",
    coinTicker: "BNB",
    type: "Borrow",
    transactionId: 0,
    unit: 0.1,
    amount: 100000,
    initialPayment: 10000,
    paymentMethod: "Naira wallet",
    paymentPlan: "1 Month",
    dateBorrowed: "June 2",
    timeStamp: "10:58am",
    dueDate: "July 2",
  };
  return (
    <section className="dashContainer">
      <Header />
      <div className="dashWrapper">
        <div className="transactionDetailsTitle">
          <BsChevronLeft size={"20px"} />
          <h1 className="TransactionTitle">{transaction.type}</h1>
        </div>
        <div className="TransactionDetails">
          <h2>
            {transaction.coinName}({transaction.coinTicker})
          </h2>
          <div className="detialsWrapper">
            <div className="detailItem">
              <div className="detailLabel"> Unit</div>
              <div className="detailValue">{transaction.unit}</div>
            </div>
            <div className="detailItem">
              <div className="detailLabel"> Amount</div>
              <div className="detailValue">{transaction.amount}</div>
            </div>
            <div className="detailItem">
              <div className="detailLabel"> Initial Payment</div>
              <div className="detailValue">{transaction.initialPayment}</div>
            </div>
            <div className="detailItem">
              <div className="detailLabel"> Payment Method</div>
              <div className="detailValue">{transaction.paymentMethod}</div>
            </div>
            <div className="detailItem">
              <div className="detailLabel"> Payment Plan</div>
              <div className="detailValue">{transaction.paymentPlan}</div>
            </div>
            <div className="detailItem">
              <div className="detailLabel"> Date</div>
              <div className="detailValue">{transaction.dateBorrowed}</div>
            </div>
            <div className="detailItem">
              <div className="detailLabel"> Time Stamp</div>
              <div className="detailValue">{transaction.timeStamp}</div>
            </div>
            <div className="detailItem">
              <div className="detailLabel"> Due Date</div>
              <div className="detailValue">{transaction.dueDate}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Transaction;
