import React from "react";

function Verifyphone(props) {
  return (
    <>
      <div className="kycInputBlock">
        <label for="number">Phone Number</label>
        <div className="phoneContainer">
          <div>
            <select name="countrycode" id="">
              <option value="+234">+234</option>
            </select>
          </div>
          <input type="number" placeholder="8012348284" />
        </div>
      </div>
    </>
  );
}

export default Verifyphone;
