import React from "react";
import Otpbox from "./Otpbox";
import envelope from "./images/opened-envelopea-1@2x.png";

function Registerotp() {
  return (
    <div className="authContainer">
      <Otpbox logo={envelope} />
    </div>
  );
}

export default Registerotp;
