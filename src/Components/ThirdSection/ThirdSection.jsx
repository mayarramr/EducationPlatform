import React from "react";
import Style from "./ThirdSection.module.css";
import leftimg from "../../Assets/img10.png";
import rightimg from "../../Assets/img4.jpg";
import { useMediaQuery } from "react-responsive";

export default function ThirdSection() {
  const isScreenSmall = useMediaQuery({ maxWidth: 576 });

  return (
    <>
      <div className="row justify-content-center my-5">
        <div className="col-md-6 text-center">
          <h3 className="fw-bold">
            What is <span className="text-color">USAM?</span>
          </h3>
          <p className="gray-text">
            USAM is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>
      </div>

      <div
        className={`row justify-content-center mb-5 ${
          isScreenSmall ? "mx-2 px-1" : "mx-5 px-5"
        }`}
      >
        <div className="col-md-4 p-0">
          <div className="position-relative">
            <img src={leftimg} className="w-100 rounded-4" alt="" />
            <div className={`${Style.layer} rounded-4 `}>
              <div className="top-50 position-absolute start-50 translate-middle text-center">
                <p className="fs-5 fw-bold text-white">FOR INSTRUCTORS</p>
                <button className="btn btn-sm py-2 rounded-4 small-font px-4 border border-2 text-white my-3">
                  Start a class today
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`col-md-4 p-0 ${isScreenSmall ? "mt-3" : "offset-1"}`}>
          <div className="position-relative">
            <img src={rightimg} className="w-100 rounded-4" alt="" />
            <div className={`${Style.layer} rounded-4 `}>
              <div className="top-50 position-absolute start-50 translate-middle text-center">
                <p className="fs-5 fw-bold text-white">FOR STUDENTS</p>
                <button
                  className={`${Style.bgColor} small-font btn  px-4 py-2 rounded-4 text-white my-3`}
                >
                  Enter access code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
