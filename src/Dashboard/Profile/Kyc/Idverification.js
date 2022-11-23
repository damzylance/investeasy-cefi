import React from "react";

function Idverification() {
  return (
    <>
      <div className="kycInputBlock ">
        <label htmlFor="idDocument">Select ID document to upload</label>
        <select name="idDocument" id="idDocument">
          <option value="passort">International Passport</option>
          <option value="license">Driver's License</option>
          <option value="idcard">Identity Card (PVC or NIN)</option>
        </select>
      </div>
      <div className="kycInputBlock ">
        <label htmlFor="firstname">Upload front of ID card</label>
        <input type="file" accept="" name="" style={{ paddingTop: 8 }} id="" />
      </div>
      <div className="kycInputBlock ">
        <label htmlFor="firstname">Upload back of ID card</label>
        <input type="file" accept="" name="" style={{ paddingTop: 8 }} id="" />
      </div>
    </>
  );
}

export default Idverification;
