import React, { useState } from "react";
import Header from "../../Globalcomponents/Header/Header";
import "./bankdetails.css";

function Bankdetails() {
  const [page, setPage] = useState(0);
  return (
    <section className="dashContainer">
      <Header />
      <div className="dashWrapper">
        <h1 className="">Banks</h1>
        {page === 0 && (
          <button
            style={{ width: 150 }}
            onClick={() => {
              setPage(1);
            }}
          >
            + Add Bank
          </button>
        )}

        {page === 0 && (
          <div className="bankCards">
            <div className="bankCard">
              <p className="bankName">Union Bank</p>
              <h3>Alfred Adeola Bello</h3>
              <p className="accountNumber">0168351065</p>
            </div>
          </div>
        )}
        {page === 1 && (
          <div className="addCard">
            <div className="kycInputBlock ">
              <label htmlFor="bankname">Bank Name</label>
              <select>
                <option value="Accessbank">Access Bank</option>
                <option value="Gtbank">Gurantee Trust Bank</option>
                <option value="uba">United Bank of Africa</option>
              </select>
            </div>
            <div className="kycInputBlock">
              <label htmlFor="accountname">Account Number</label>
              <input
                type="number"
                name="accountnumber"
                id="accountnumber"
                placeholder="Account Number"
              />
            </div>
            <div className="kycInputBlock">
              <label htmlFor="accountname">Account name</label>
              <input
                type="text"
                name="accountname"
                id="accountname"
                placeholder="Account name"
              />
            </div>
            <button style={{ width: 150 }}>Add Bank</button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Bankdetails;
