import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import "./auth.css";

function Signin() {
  const [values, setValues] = useState("");
  const [error, setErrors] = useState("");
  const handleInputChange = () => {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
              console.log(data);
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
                value={values.email}
                // onChange={handleInputChange}
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
                value={values.password}
                // onChange={handleInputChange}
              />
              <p className="errorMessage">{errors.password?.message}</p>
            </div>
            <div className="forgot">
              <Link to="/passwordreset">Forgot password?</Link>
            </div>
            <div className="btn-container">
              <button type="submit">Login</button>
            </div>
          </form>
          <div className="error">{error}</div>
          <div className="have-account">
            New to InvestEasy? <Link to="/register">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
