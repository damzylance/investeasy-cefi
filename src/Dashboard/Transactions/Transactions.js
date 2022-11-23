import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Globalcomponents/Header/Header";
import Transactioncard from "../Home/Transactioncard";
import "./transactions.css";

function Transactions() {
  const transactionList = [
    { type: "Borrow", value: 200 },
    { type: "Deposit", value: 10 },
    { type: "Withdrawal", value: 200 },
    { type: "Deposit", value: 10 },
    { type: "Borrow", value: 200 },
    { type: "Withdrawal", value: 10 },
    { type: "Borrow", value: 200 },
    { type: "Repayment", value: 10 },
    { type: "Repayment", value: 10 },
  ];

  const [transactions, setTransactions] = useState(
    transactionList.filter((transaction, index) => {
      return transaction.type === "Borrow";
    })
  );

  const onChangeTab = (e) => {
    const type = e.target.textContent;

    const parent = e.target.parentNode;

    // console.log(parent.children[4], parent.children.length);
    for (let index = 0; index < parent.children.length; index++) {
      const element = parent.children[index];
      if (element === e.target) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    }

    setTransactions(
      transactionList.filter((transaction) => {
        return transaction.type === type;
      })
    );
  };
  return (
    <section className="dashContainer">
      <Header />
      <div className="dashWrapper">
        <div className="tabsContainer">
          <ul className="transactionTypeList">
            <li className="transactionTab active" onClick={onChangeTab}>
              Borrow
            </li>
            <li className="transactionTab" onClick={onChangeTab}>
              Repayment
            </li>
            <li className="transactionTab" onClick={onChangeTab}>
              Deposit
            </li>
            <li className="transactionTab" onClick={onChangeTab}>
              Withdrawal
            </li>
            <li className="transactionTab" onClick={onChangeTab}>
              Swap
            </li>
          </ul>
        </div>
        <div className="transactionsListContainer">
          {transactions.map((transaction, index) => {
            return (
              <Link to={`${index}`}>
                <Transactioncard
                  key={index}
                  typeTitle={transaction.type}
                  transactionValue={5000}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Transactions;
