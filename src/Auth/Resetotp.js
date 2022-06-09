import React from "react";
import Otpbox from "./Otpbox";
import unlocked from "./images/unlocked@2x.png";

function Resetotp() {
  return (
    <div className="authContainer">
      <Otpbox logo={unlocked} />
    </div>
  );
}

export default Resetotp;
