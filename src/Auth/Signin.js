import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./auth.css";

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const errorLength = Object.keys(errors).length;
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const [successMsg, setSuccessMsg] = useState("");
  const [resError, setResError] = useState(null);
  return (
    <div className="authContainer">
      <div className="bannerWrapper">
        <img src="" alt="" />
        <h1>Hello</h1>
        <h3>Welcome Back</h3>
      </div>
      <div className="formWrapper">
        <h2>Login</h2>
        <div className="input-fields">
          <form
            action=""
            method="post"
            onSubmit={handleSubmit((data) => {
              if (errorLength < 1) {
                axios
                  .post("http://127.0.0.1:8000/api/core/token/", data)
                  .then(function (response) {
                    const myToken = response.data.access;
                    const fullname = response.data.fullname;
                    let alias = fullname.split(" ");
                    const userAlias = alias.map((item) => {
                      return item[0];
                    });
                    alias = userAlias.join("");

                    const email = response.data.email;
                    // console.log(response.data.access, myToken);
                    localStorage.setItem("token", myToken);
                    localStorage.setItem("alias", alias);
                    localStorage.setItem("email", email);
                    navigate("/dashboard/home");
                  })
                  .catch(function (error) {
                    setResError(error.response.data.detail);
                  });
              }
            })}
          >
            <div className="input-block">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                {...register("email", {
                  required: "Email field is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please provide valid email address",
                  },
                })}
                id="email"
              />
              <p className="errorMessage">{errors.email?.message}</p>
            </div>
            <div className="input-block">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                    message:
                      "Password must have at least one uppercase letter, and number and a special character",
                  },
                  minLength: { value: 8, message: "Minumum length is 8" },
                })}
                id="password"

                // onChange={handleInputChange}
              />
              <p className="errorMessage">{errors.password?.message}</p>
            </div>
            <div className="errorMessage">{resError}</div>
            <div className="forgot">
              <Link to="/passwordreset">Forgot password?</Link>
            </div>
            <div className="btn-container">
              <button type="submit">Login</button>
            </div>
          </form>

          <div className="have-account">
            New to InvestEasy? <Link to="/register">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
