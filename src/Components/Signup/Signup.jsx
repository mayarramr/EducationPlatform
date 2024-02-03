import React, { useState } from "react";
import Style from "./Signup.module.css";
import signupImg from "../../Assets/img6.jpg";
import ggl from "../../Assets/gglicn.png";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "react-responsive";

export default function Signup() {
  const isScreenSmall = useMediaQuery({ maxWidth: 576 });
  let navigate = useNavigate();

  function navigateToLogin() {
    navigate("/");
  }

  return (
    <>
      <Helmet>
        <title>Sign Up</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container pt-5">
        <div className="row py-5">
          <div className="col-md-6">
            <img src={signupImg} className="w-100 h-100 rounded-2" alt="" />
          </div>
          <div className="col-md-6">
            <div>
              <h5 className="fw-bold text-center ">
                Welcome to USAM, let's create an account now
              </h5>
              <div className="d-flex justify-content-center align-items-center">
                <h6 className="text-color m-0">Or Connect With</h6>
                <div className="d-flex align-items-top">
                  <div>
                    <i
                      className={`${Style.blue} fa-brands fa-facebook mx-3`}
                    ></i>
                  </div>

                  <div style={{ width: "15px", height: "15px" }} className="">
                    <img src={ggl} className="w-100 mb-1 " />
                  </div>
                </div>
              </div>

              <div className={`${isScreenSmall ? "px-2" : "mt-5 px-5"}`}>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label fs-5 fw-bold"
                >
                  Username
                </label>
                <input
                  type="text"
                  className="w-100 py-2 gray-border rounded-5 px-3"
                  id="exampleFormControlInput1"
                  placeholder="Enter your username"
                />
              </div>

              <div className={`${isScreenSmall ? "px-2 my-3" : "mt-5 px-5"}`}>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label fs-5 fw-bold"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="w-100 py-2 gray-border rounded-5 px-3"
                  id="exampleFormControlInput1"
                  placeholder="Enter your password"
                />
              </div>

              <div className={`${isScreenSmall ? "px-2 mb-4" : "mt-5 px-5"}`}>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label fs-5 fw-bold"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  className="w-100 py-2 gray-border rounded-5 px-3"
                  id="exampleFormControlInput1"
                  placeholder="Enter your email"
                />
              </div>

              <div className="d-flex justify-content-end pe-5">
                <button
                  onClick={() => navigateToLogin()}
                  className="btn bg-color rounded-5 text-white px-4 py-1"
                >
                  Continue
                </button>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-4 ">
                <h6 className="m-0 me-1 small-font fw-bold">
                  Already have an account ?{" "}
                </h6>
                <Link to={"/"} className="text-decoration-none">
                  <h6 className="text-color m-0 small-font fw-bold">
                    Login Now
                  </h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
