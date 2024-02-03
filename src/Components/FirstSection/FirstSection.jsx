import React from "react";
import Style from "./FirstSection.module.css";
import home from "../../Assets/img7.png";
import active from "../../Assets/img9.webp";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function FirstSection() {
  const isScreenSmall = useMediaQuery({ maxWidth: 576 });

  return (
    <>
      <div className={`${Style.section}`}>
        <div className={`${Style.content}`}>
          <div className="row justify-content-between">
            <div className="col-md-5 flex-column d-flex justify-content-center align-items-center">
              <div
                className={`d-flex align-items-center ${
                  isScreenSmall ? "" : "ms-5"
                }`}
              >
                <h4
                  className={` text-white fw-bold ${
                    isScreenSmall ? "fs-1 mt-5 text-center" : "fs-1 ps-5"
                  }`}
                >
                  <span className={`${Style.goldfont}`}>Studying</span> Online
                  is now much easier
                </h4>
              </div>
              <p
                className={`text-white fs-6  no-bold ${
                  isScreenSmall
                    ? "mx-3 px-0 mt-0 text-center"
                    : "mx-5 px-5 mt-4"
                }`}
              >
                USAM is an interesting platform that will teach you in more an
                interactive way
              </p>
              <div className="ps-5 ms-5 w-100">
                <Link
                  to={"/pricing"}
                  className={`btn ms-5 bg-green py-2 px-4  text-white rounded-5 ${
                    isScreenSmall ? "my-3" : "my-5"
                  }`}
                >
                  Subscribe
                </Link>
              </div>
            </div>

            <div className="col-md-5">
              <div
                className={`w-100 position-relative  ${
                  isScreenSmall ? "d-flex justify-content-center" : ""
                }`}
              >
                <img src={home} className="w-50" alt="" />
                <div
                  className={`row position-absolute top-0 ${
                    isScreenSmall ? "end-0 mt-5" : "start-50 translate-middle-x"
                  }`}
                >
                  <div className="mt-4">
                    <div
                      className={`${Style.boxOne} px-3 py-2 rounded-4 d-flex align-items-center`}
                    >
                      <div
                        className="bg-color d-flex align-items-center justify-content-center rounded-2 me-2"
                        style={{ width: "35px", height: "35px" }}
                      >
                        <i className="text-white fa-solid fa-pen-to-square"></i>
                      </div>
                      <div className="gray-text">
                        <p className="font-sm">Heyyy</p>
                        <p className="font-sm">Track your last progress</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`row position-absolute  ${
                    isScreenSmall
                      ? "start-0 mb-5"
                      : "bottom-50 mb-5 start-0 translate-middle-x"
                  }`}
                >
                  <div className=" pb-5 pe-5">
                    <div
                      className={`${Style.boxOne} px-3 py-2 rounded-4 d-flex align-items-center`}
                    >
                      <div
                        className="bg-color d-flex align-items-center justify-content-center rounded-2 me-2"
                        style={{ width: "35px", height: "35px" }}
                      >
                        <i className=" text-white fa-solid fa-calendar-days"></i>
                      </div>
                      <div className="gray-text">
                        <p className="font-sm">250K</p>
                        <p className="font-sm">Assisted Student</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`row position-absolute  ${
                    isScreenSmall
                      ? "top-50 start-0 ms-2"
                      : "top-50 start-50 translate-middle-x"
                  }`}
                >
                  <div
                    className={`${Style.boxOne} px-3 py-2 rounded-4 d-flex align-items-center`}
                  >
                    <div
                      className="bg-gold d-flex align-items-center justify-content-center rounded-2 me-2"
                      style={{ width: "35px", height: "35px" }}
                    >
                      <i className="text-white fa-solid fa-envelope"></i>
                    </div>
                    <div className="gray-text">
                      <p className="font-sm">Congratulations</p>
                      <p className="font-sm">Your admission completed</p>
                    </div>
                  </div>
                </div>

                <div
                  className={`row position-absolute bottom-0 ${
                    isScreenSmall ? "end-0" : "mb-5 start-0 translate-middle-x"
                  }`}
                >
                  <div className="">
                    <div className={`${Style.boxOne} px-3 py-2 rounded-4`}>
                      <div className="d-flex">
                        <div
                          className=" d-flex align-items-center justify-content-center rounded-2 me-2"
                          style={{ width: "35px", height: "35px" }}
                        >
                          <div className="position-relative">
                            <img src={active} className="w-100" alt="" />
                            <div
                              className={`${Style.active} position-absolute rounded-5 border border-1 border-white bottom-0 end-0 p-1`}
                            ></div>
                          </div>
                        </div>
                        <div className="gray-text">
                          <p className="font-sm">User Experience Class</p>
                          <p className="font-sm">Today at 12.PM</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button className="btn bg-gold text-white rounded-5 py-1 px-4 my-1 small-font">
                          Join Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
