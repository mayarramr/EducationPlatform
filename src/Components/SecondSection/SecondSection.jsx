import React from "react";
import Style from "./SecondSection.module.css";
import { useMediaQuery } from "react-responsive";

export default function SecondSection() {
  const isScreenSmall = useMediaQuery({ maxWidth: 576 });
  return (
    <>
      <div className="row justify-content-center pt-3">
        <div className="col-md-5 px-5 text-center">
          <h3>
            Our <span className="text-color">Success</span>
          </h3>
          <p className="small-font px-3 pt-2">
            Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
            sollicitudin at nec nam et pharetra gravida. Adipiscing a quis
            ultrices eu ornare tristique vel nisl orci.
          </p>
        </div>
      </div>

      <div className="row justify-content-center py-5">
        <div className={`col-md-2 d-flex flex-column align-items-center`}>
          <h1
            className={`${Style.gradcolor} ${
              isScreenSmall ? "display-1" : "display-3"
            } m-0`}
          >
            15K+
          </h1>
          <div className="d-flex justify-content-center">
            <p className={`${isScreenSmall ? "fs-2 mb-4" : ""}`}>Students</p>
          </div>
        </div>
        <div className="col-md-2 d-flex flex-column align-items-center">
          <h1
            className={`${Style.gradcolor} ${
              isScreenSmall ? "display-1" : "display-3"
            } m-0`}
          >
            75%
          </h1>
          <div className="d-flex justify-content-center">
            <p className={`${isScreenSmall ? "fs-2 mb-4" : ""}`}>
              Total Success
            </p>
          </div>
        </div>
        <div className="col-md-2 d-flex flex-column align-items-center">
          <h1
            className={`${Style.gradcolor} ${
              isScreenSmall ? "display-1" : "display-3"
            } m-0`}
          >
            35
          </h1>
          <div className="d-flex justify-content-center">
            <p className={`${isScreenSmall ? "fs-2 mb-4" : ""}`}>
              Main Questions
            </p>
          </div>
        </div>
        <div className="col-md-2 d-flex flex-column align-items-center">
          <h1
            className={`${Style.gradcolor} ${
              isScreenSmall ? "display-1" : "display-3"
            } m-0`}
          >
            26
          </h1>
          <div className="d-flex justify-content-center">
            <p className={`${isScreenSmall ? "fs-2 mb-4" : ""}`}>
              Chief Experts
            </p>
          </div>
        </div>
        <div className="col-md-2 d-flex flex-column align-items-center">
          <h1
            className={`${Style.gradcolor} ${
              isScreenSmall ? "display-1" : "display-3"
            } m-0`}
          >
            12
          </h1>
          <div className="d-flex justify-content-center">
            <p className={`${isScreenSmall ? "fs-2" : ""}`}>
              Years of Experience
            </p>
          </div>
        </div>
      </div>

      <div
        className={`row justify-content-center ${isScreenSmall ? "" : "pb-5"}`}
      >
        <div className="col-md-5 text-center">
          <h3 className="fw-bold">
            All-In-One <span className="text-color">Cloud Software</span>
          </h3>
          <p className="font-sm gray-text">
            USAM is one powerful online software suite that combines all the
            tools needed to run a successful school or office.
          </p>
        </div>
      </div>

      <div className="row  m-5 justify-content-center">
        <div
          className={`${Style.shadowbox}  col-md-3 p-4 d-flex flex-column align-items-center rounded-3 text-center`}
        >
          <div
            className="rounded-5 bg-black d-flex align-items-center justify-content-center"
            style={{ width: "50px", height: "50px" }}
          >
            <i className="text-white fa-regular fa-newspaper fs-4"></i>
          </div>
          <div className="mt-5 px-3 text-color">
            <h5 className="fw-bold">Online Billing, Invoicing, & Contracts.</h5>
            <p className="font-sm gray-text mt-4">
              Simple and secure control of your organization's financial and
              legal transactions. Send customized invoices and contracts.
            </p>
          </div>
        </div>
        <div
          className={`${Style.shadowbox} ${
            isScreenSmall ? "my-5" : ""
          } mx-5 col-md-3 p-4 d-flex flex-column align-items-center rounded-3 text-center`}
        >
          <div
            className="rounded-5 bg-black d-flex align-items-center justify-content-center"
            style={{ width: "50px", height: "50px" }}
          >
            <i className=" text-white fa-solid fa-calendar-days fs-4"></i>
          </div>
          <div className="mt-5 px-3 text-color">
            <h5 className="fw-bold">Easy Schedualing & Attendance Tracking.</h5>
            <p className="font-sm gray-text mt-4">
              Schedule and reserve classrooms at one campus or multiple
              campuses. keep detailed records of student attendence.
            </p>
          </div>
        </div>
        <div
          className={`${Style.shadowbox} col-md-3 p-4 d-flex flex-column align-items-center rounded-3 text-center`}
        >
          <div
            className="rounded-5 bg-black d-flex align-items-center justify-content-center"
            style={{ width: "50px", height: "50px" }}
          >
            <i className="fa-solid fa-users text-white fs-4"></i>
          </div>
          <div className="mt-5 px-3 text-color">
            <h5 className="fw-bold mt-4">Customer Tracking.</h5>
            <p className="font-sm gray-text mt-4">
              Automate and track emails to individuals or groups. Skilline's
              built-in system helps organize your organization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
