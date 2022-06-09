import React from "react";
import { BsArrowLeftCircleFill, BsArrowReturnLeft } from "react-icons/bs";
import { MdArrowBackIos } from "react-icons/md";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Otpbox(props) {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(new Array(4).fill(""));
  console.log(otp);
  const { register } = useForm();
  const handleChange = (element, index) => {
    console.log(element.value);
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="otpBox">
      <div className="backIcon">
        <MdArrowBackIos onClick={() => navigate(-1)} />
      </div>
      <div className="otpInputWrapper">
        <div className="otpLogo">
          <img src={props.logo} alt="" />
        </div>
        <div className="otpText">
          <p className="otpTitle">
            Please enter OTP that was sent to
            {props.email}
          </p>
          <p className="otpDescription">{props.otpDescription}</p>
        </div>
        <div className="otpInput">
          {otp.map((data, index) => {
            return (
              <input
                className="otpField"
                type="number"
                name="otp"
                placeholder="_"
                maxLength="1"
                max="9"
                key={index}
                value={data}
                required
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            );
          })}
        </div>
        <div className="otpCounter">
          <button className="resend">Resend OTP in 00:59</button>
        </div>
        <div className="otpBotton">
          <button className="confirmOtp">Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default Otpbox;
