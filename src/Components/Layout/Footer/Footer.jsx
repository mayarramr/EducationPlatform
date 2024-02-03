import React from "react";
import Style from "./Footer.module.css";
import logo from "../../../Assets/footerlogo.png";
import { useMediaQuery } from "react-responsive";

export default function Footer() {
  const isScreenSmall = useMediaQuery({ minWidth: 0, maxWidth: 768 });

  return (
    <>
      <div className="bg-black py-4">
        <div className="container">
          <div className="row text-center">
            <div className="d-flex align-items-center justify-content-center mb-4">
              <img
                src={logo}
                className={`${Style.customSize} rounded-pill`}
                alt="footerLogo"
              />
              <div className="border-start ps-3 py-2 text-white mx-2 border-opacity-75 border-white">
                <h6
                  style={{ wordWrap: "break-word", overflowWrap: "break-word" }}
                  className="font-sm fw-bold"
                >
                  Your Best
                  <br />
                  Platform
                </h6>
              </div>
            </div>
            <div>
              <h6 className="my-4 fw-bold gray-text font-sm">
                Subscribe to get our new Newsletter
              </h6>
            </div>
            <div className={`row justify-content-center pb-4 px-2`}>
            <div>
            <input
                type="email"
                className="bg-transparent border-main py-2 gray-border rounded-5 px-3"
                placeholder="Your Email"
              />
              <button
                className={`${Style.buttonStyle} ${isScreenSmall ? "w-25 " : "px-4"} btn bg-color rounded-5 text-white ms-2 small-font py-2`}
              >
                Subscribe
              </button>
            </div>
            </div>

            <div className="d-flex gray-text justify-content-center">
              <h6 className={`${Style.whitetext} m-0 font-sm`}>Careers</h6>
              <div className="border-start border-end px-2 mx-2">
                <h6 className={`${Style.whitetext} m-0 font-sm`}>
                  Privacy Policy
                </h6>
              </div>
              <h6 className={`${Style.whitetext} m-0 font-sm`}>
                Terms & Conditions
              </h6>
            </div>

            <div className="gray-text mt-3">
              <h6 className={`${Style.whitetext} font-sm`}>
                {" "}
                © 2023 Class Technologies Inc.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
