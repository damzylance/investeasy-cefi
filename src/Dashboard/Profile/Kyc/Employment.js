import React from "react";

function Employment() {
  return (
    <>
      <div className="kycInputBlock ">
        <label htmlFor="address">Nature of Business</label>
        <select placeholder="Select the nature of your business">
          <option value="admin">Admin</option>
          <option value="agriculture">Agriculture</option>
          <option value="crypto">Cryptocurrency</option>
          <option value="admin">Construction</option>
        </select>
      </div>
      <div className="kycInputBlock ">
        <label htmlFor="address">Employment Status</label>
        <select placeholder="Select the nature of your business">
          <option value="employed">Employed</option>
          <option value="selfemployed">Self employed</option>
          <option value="unemployed">Unemployed</option>
          <option value="retired">Retired</option>
          <option value="student">Student</option>
        </select>
      </div>
      <div className="kycInputBlock">
        <label htmlFor="address">Source of Income</label>
        <select>
          <option value="">Employment Income</option>
          <option value="">Investment</option>
          <option value="">Loan</option>
          <option value="">Retirement</option>
          <option value="">Others</option>
        </select>
      </div>
    </>
  );
}

export default Employment;
