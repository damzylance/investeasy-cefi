import React from "react";
import "./kyc.css";

function Legalname() {
  return (
    <>
      <div className="kycInputBlock ">
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          name="firstname"
          value={"Wasiu"}
          id="firstname"
          disabled
        />
      </div>
      <div className="kycInputBlock ">
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          name="lastname"
          value={"Adegoke"}
          id="lastname"
          disabled
        />
      </div>
    </>
  );
}

export default Legalname;
