import React from "react";
import Style from "./Payment.module.css";
import paypal from "../../Assets/paypal.png";
import amex from "../../Assets/amex.png";
import visa from "../../Assets/visa.png";
import money from "../../Assets/money.png";
import payImg from "../../Assets/paymentimg.png";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Helmet } from "react-helmet";

export default function Payment() {
  const isScreenSmall = useMediaQuery({ minWidth: 0, maxWidth: 768 });
  const navigate = useNavigate();
  function navigateToLibrary() {
    navigate("/library");
  }
  return (
    <>
    <Helmet>
        <title>Payment</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container my-5">
        <div className="py-4 font-sm">
          <p>
            Enter Your Data
            <span>
              <i className="fa-solid text-color fa-angles-right px-3"></i>{" "}
              Choose Your Subscription
            </span>
            <span className="text-color">
              <i className="fa-solid text-color fa-angles-right px-3"></i> Pay
              fees
            </span>
          </p>
        </div>
        <div className="row justify-content-evenly align-items-center">
          <div className={`col-md-7 shadowbox rounded-4 ${isScreenSmall ? " pb-4" : "px-5 py-4"}`}>
            <div className="pb-4">
              <h3 className="fw-bold">Checkout</h3>
            </div>
            <div>
              <p className="fw-bold">Cart Type</p>
            </div>
            <div className="row my-3 px-3 ">
              <div className="col-md-9 d-flex">
                  <button className="col-md-2 border border-1 border-success-subtle rounded-3 bg-transparent d-flex justify-content-center align-items-center p-0">
                    <img src={paypal} className="w-100"  alt="" />
                  </button>
                  <button className="col-md-2 p-0 border-0 mx-3">
                    <img src={amex} className="w-100" alt="" />
                  </button>
                  <button className="col-md-2 px-1 border border-1 rounded-3 bg-transparent d-flex justify-content-center align-items-center p-0 ">
                    <img src={visa} className="w-100" alt="" />
                  </button>
                  <button className="col-md-2 mx-3 border border-1 rounded-3 bg-transparent d-flex justify-content-center align-items-center p-0">
                    <img src={money} className="w-100" alt="" />
                  </button>
                
              </div>
            </div>
            <div className="d-flex flex-column">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label font-sm fw-bold"
              >
                Name on card
              </label>
              <input
                type="text"
                className=" py-2 gray-border rounded-4 px-3"
                placeholder="Enter name on card"
              />
            </div>
            <div className="d-flex flex-column my-4">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label font-sm fw-bold"
              >
                Card Number
              </label>
              <input
                type="text"
                className=" py-2 gray-border rounded-4 px-3"
                placeholder="Enter card number"
              />
            </div>

            <div className="row">
              <div className="col-md-6">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label font-sm fw-bold"
                >
                  Expiration Date (MM/YY)
                </label>
                <input
                  type="text"
                  className="w-100 py-2 gray-border rounded-4 px-3"
                  placeholder="Enter card number"
                />
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label font-sm fw-bold"
                >
                  CVC
                </label>
                <input
                  type="text"
                  className="w-100 py-2 gray-border rounded-4 px-3"
                  placeholder="Enter card number"
                />
              </div>
            </div>
            <div className="d-flex pt-3">
              <input type="checkbox" />
              <p className="small-font ms-1">
                Save my information for faster checkout
              </p>
            </div>
          </div>

          <div className={`col-md-4 h-75 d-flex justify-content-center rounded-4 p-4 gray-bg ${isScreenSmall? "mt-5" : ""}`}>
            <div>
              <p className="pb-4 fw-bold">Summary</p>
              <div className="row py-2">
                <div className="col-md-4">
                  <img src={payImg} className="w-100 rounded-3" alt="" />
                </div>
                <div className="col-md-4 p-0 d-flex align-items-center">
                  <div>
                    <div className="d-flex align-items-center">
                      <i
                        className={`${Style.user} fa-solid fa-user small-font`}
                      ></i>
                      <p className="fw-bold text-color small-font ps-1">
                        Individual
                      </p>
                    </div>
                    <p className="small-font">Lorem, ipsum dolor.</p>
                    <h5 className="fw-bold m-0">
                      $24 <span className="small-font">/ MONTH</span>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between pt-4 pb-1 gray-text font-sm fw-bold border-dark-subtle border-bottom border-top border-1">
                <p>Subtotal</p>
                <p>$51.38</p>
              </div>
              <div className="d-flex justify-content-between py-2 gray-text font-sm fw-bold border-dark-subtle border-bottom border-1">
                <p>Copoun Discount</p>
                <p>0 %</p>
              </div>
              <div className="d-flex justify-content-between py-2 gray-text font-sm fw-bold border-dark-subtle border-bottom border-1">
                <p>Tax</p>
                <p>5</p>
              </div>
              <div className="d-flex justify-content-between py-2 font-sm fw-bold">
                <p>Total</p>
                <p>$56.38</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center pt-5">
            <div className="col-md-3 d-flex justify-content-center">
              <button
                onClick={() => navigateToLibrary()}
                className="btn btn-lg bg-color text-white w-75 rounded-4"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
