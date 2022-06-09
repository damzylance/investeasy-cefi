import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Otpbox from "./Otpbox";
import "./auth.css";
import "./otpbox.css";
import envelope from "./images/opened-envelopea-1@2x.png";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const errorLength = Object.keys(errors).length;
  const navigate = useNavigate();

  return (
    <div className="authContainer">
      <div className="bannerWrapper">
        <img src="" alt="" />
        <h1>Hello</h1>
        <h3>Create your account</h3>
      </div>
      <div className="formWrapper">
        <h2>Sign Up</h2>
        <div className="input-fields">
          <form
            action=""
            method="post"
            onSubmit={handleSubmit((data) => {
              if (errorLength < 1) {
                //post data

                navigate("/register/otp");
              }
            })}
          >
            <div className="input-block">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                {...register("firstName", {
                  required: "This field is required",
                })}
                placeholder="First Name"
              />
              <p className="errorMessage">{errors.firstName?.message}</p>
            </div>
            <div className="input-block">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                {...register("lastName", {
                  required: "This field is required",
                })}
                placeholder="Last Name"
              />
              <p className="errorMessage">{errors.lastName?.message}</p>
            </div>
            <div className="input-block">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                {...register("email", {
                  required: "Provide valid email address",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please provide valid email address",
                  },
                })}
                id="email"
                placeholder="Enter email address"
              />
              <p className="errorMessage">{errors.email?.message}</p>
            </div>
            <div className="input-block">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                {...register("phone", {
                  required: "Please provide valid phone number",
                  pattern: {
                    value: /^\+?[1-9][0-9]{7,14}$/,
                    message: "Please provide valid phone number",
                  },
                })}
                id="phone"
                placeholder="+234XXX"
              />
              <p className="errorMessage">{errors.phone?.message}</p>
            </div>
            <div className="input-block">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Please provide a valid password",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                    message:
                      "Password must have at least one uppercase letter, and number and a special character",
                  },
                })}
                id="password"
                placeholder="*****"
              />
              <p className="errorMessage">{errors.password?.message}</p>
            </div>
            <div className="btn-container">
              <button type="submit">Continue</button>
            </div>
          </form>

          <div className="have-account">
            Already registered? <Link to="/login">Signin</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
