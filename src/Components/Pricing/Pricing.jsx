import React from "react";
import { useMediaQuery } from "react-responsive";
import { Helmet } from "react-helmet";
import Payment from "../Payment/Payment";
import { useNavigate } from "react-router-dom";
import Style from "./Pricing.module.css";

const pricingData = [
  {
    type: "Like a pussy",
    price: "$500",
    period: "/YEAR",
    features: [
      "Components-driven system",
      "Sales-boosting landing pages",
      "Awesome Feather icon pack",
    ],
    buttonLabel: "Subscribe Now",
    checkIconColor: "#000000",
  },
  {
    type: "Individual",
    price: "$24",
    period: "/MONTH",
    shadow: 'shadowbox',
    features: [
      "Components-driven system",
      "Sales-boosting landing pages",
      "Awesome Feather icon pack",
      "Themed into 3 different styles",
      "Will help to learn Figma",
    ],
    buttonLabel: "Regular license",
    checkIconColor: "#FFFFFF",
  },
  {
    type: "Corporate",
    price: "$12",
    period: "/EDITOR",
    features: [
      "Components-driven system",
      "Sales-boosting landing pages",
      "Awesome Feather icon pack",
      "Themed into 3 different styles",
    ],
    buttonLabel: "Extended license",
    checkIconColor: "#000000",
  },
];

export default function Pricing() {
  const navigate = useNavigate();
  const navigateToPayment = () => {
    navigate("/payment");
  };
  const isScreenSmall = useMediaQuery({ maxWidth: 576 });

  return (
    <>
      <Helmet>
        <title>Subscription</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container pt-5">
        <div className="pt-4 font-sm">
          <p>
            Enter Your Data{" "}
            <span className="text-color">
              <i className="fa-solid text-color fa-angles-right px-3"></i>{" "}
              Choose Your Subscription
            </span>
          </p>
        </div>
        <div className="row text-center py-4">
          <h3 className="fw-bold">
            Choose your subscription with{" "}
            <span className="text-color">affordable price</span>
          </h3>
          <h4>And enjoy all courses</h4>
        </div>

        <div className={`${isScreenSmall ? "container" : ""}`}>
          <div className="row justify-content-center ">
            {pricingData.map((item, index) => (
              <div
                key={index}
                className={`col-md-3 py-3 position-relative ${item.shadow} rounded-4 ${isScreenSmall ? "mb-4" : ""
                  }`}
              >
                <div className="d-flex align-items-center">
                  <i
                    className={`${Style.user} mx-2 fa-solid fa-${item.type === "Corporate" ? "users" : "user"
                      }`}
                  ></i>
                  <p className="fw-bold text-color">{item.type}</p>
                </div>
                <h1 className="fw-bold">
                  {item.price} <span className="font-sm">{item.period}</span>
                </h1>
                {item.features.map((feature, fIndex) => (
                  <div key={fIndex} className="d-flex align-items-center my-3">
                    <div
                      className={`${item.type === "Corporate"
                        ? "bg-success-subtle"
                        : "bg-gold"
                        } rounded-pill d-flex align-items-center justify-content-center`}
                      style={{ width: "30px", height: "30px" }}
                    >
                      <i
                        className={`font-sm fa-solid fa-check ${item.type === "Corporate" ? "" : "text-white"
                          }`}
                        style={{ color: item.checkIconColor }}
                      ></i>
                    </div>
                    <p className="ms-2 font-sm">{feature}</p>
                  </div>
                ))}
                <div
                  className={`w-100 my-3 ${isScreenSmall
                    ? "mt-3"
                    : "ms-5"
                    }`}
                >
                  <button
                    className="mb-3 px-5 btn border border-1 border-black rounded-4 text-color fw-bold font-sm"
                  >
                    {item.buttonLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row justify-content-end mb-3">
        <div className="col-md-3 d-flex justify-content-center">
          <button
            onClick={navigateToPayment}
            className="btn bg-color text-white rounded-5 px-4"
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
