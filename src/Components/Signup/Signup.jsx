import React, { useState } from "react";
import Style from "./Signup.module.css";
import signupImg from "../../Assets/img6.jpg";
import ggl from "../../Assets/gglicn.png";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "react-responsive";

import { useLanguage } from '../LanguageContext';

export default function Signup() {
  const isScreenSmall = useMediaQuery({ maxWidth: 576 });
  let navigate = useNavigate();

  const { language } = useLanguage();

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
                {language === "en" ? "Welcome to USAM, let's create an account now" : "مرحباّ بكم في متصتنا، دعنا ننشئ حسابا الآن"}
              </h5>
              <div className="d-flex justify-content-center align-items-center">
                {language === 'en' ? (
                  <>
                    <h6 className="text-color m-0">Or Connect With</h6>
                    <div className="d-flex align-items-top">
                      <div>
                        <i className={`${Style.blue} fa-brands fa-facebook mx-3`}></i>
                      </div>
                      <div style={{ width: '15px', height: '15px' }} className="">
                        <img src={ggl} className="w-100 mb-1 " />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="d-flex align-items-top">
                      <div style={{ width: '15px', height: '15px' }} className="">
                        <img src={ggl} className="w-100 mb-1 " />
                      </div>
                      <div>
                        <i className={`${Style.blue} fa-brands fa-facebook mx-3`}></i>
                      </div>
                    </div>
                    <h6 className="text-color m-0">أو قم بالاشتراك بالاتصال بواسطة</h6>
                  </>
                )}
              </div>

              <div className={`${isScreenSmall ? "px-2" : "mt-5 px-5"}`}>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label fs-5 fw-bold"
                >
                  {language === "en" ? "Username" : "اسم المستخدم"}
                </label>
                <input
                  type="text"
                  className="w-100 py-2 gray-border rounded-5 px-3"
                  id="exampleFormControlInput1"
                  placeholder={language === "en" ? "Enter your username" : "أدخل اسم المستخدم الخاص بك"}
                />
              </div>

              <div className={`${isScreenSmall ? "px-2 my-3" : "mt-5 px-5"}`}>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label fs-5 fw-bold"
                >
                  {language === "en" ? "Password" : "كلمة المرور" }
                </label>
                <input
                  type="password"
                  className="w-100 py-2 gray-border rounded-5 px-3"
                  id="exampleFormControlInput1"
                  placeholder={language === "en" ? "Enter your password" : "أدخل كلمة المرور الخاصة بك"}
                />
              </div>

              <div className={`${isScreenSmall ? "px-2 mb-4" : "mt-5 px-5"}`}>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label fs-5 fw-bold"
                >
                  {language ==="en" ? "E-mail" : "الايميل" }
                </label>
                <input
                  type="email"
                  className="w-100 py-2 gray-border rounded-5 px-3"
                  id="exampleFormControlInput1"
                  placeholder={language === "en" ? "Enter your email" : "أدخل بريدك الإلكتروني"}
                />
              </div>

              <div className="d-flex justify-content-end pe-5">
                <button
                  onClick={() => navigateToLogin()}
                  className="btn bg-color rounded-5 text-white px-4 py-1"
                >
                  {language === "en" ? "Continue" : "استمر"}
                </button>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-4">
                {language === 'en' ? (
                  <>
                    <h6 className="m-0 me-1 small-font fw-bold">
                      Already have an account?{' '}
                    </h6>
                    <Link to={'/login'} className="text-decoration-none">
                      <h6 className="text-color m-0 small-font fw-bold">
                        Login Now
                      </h6>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to={'/login'} className="text-decoration-none">
                      <h6 className="text-color m-0 small-font fw-bold">
                        قم بتسجيل الدخول الآن
                      </h6>
                    </Link>
                    <h6 className="m-0 me-1 small-font fw-bold">
                      هل لديك حساب؟{' '}
                    </h6>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
