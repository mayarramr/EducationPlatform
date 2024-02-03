import React from "react";
import Style from "./Favorites.module.css";

export default function Favorites() {
  return (
    <>
      <div className="container py-5">
        <h4 className="fw-bold">
          Choose <span className="text-color">favourite</span> course from top
          category
        </h4>
        <div className="row mt-5">
          <div className="col-md-3 text-center d-flex justify-content-center">
            <div className="flex-column d-flex shadowbox align-items-center w-75 py-4 px-3 rounded-3">
              <div
                className="w-25 rounded-3 mb-3"
                style={{ backgroundColor: "#C8EBEB" }}
              >
                <i
                  className="fa-solid my-3 fa-paintbrush"
                  style={{ color: "#48BABC" }}
                ></i>
              </div>
              <h5 className="fw-bold">Design</h5>
              <p className="small-font gray-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
                velit necessitatibus dignissimos accusantium, sapiente quis.
              </p>
            </div>
          </div>
          <div className="col-md-3 text-center d-flex justify-content-center ">
            <div className="flex-column d-flex shadowbox align-items-center w-75 py-4 px-3 rounded-3">
              <div
                className="w-25  rounded-3 mb-3"
                style={{ backgroundColor: "#CED5FA" }}
              >
                <i
                  className="fa-solid my-3 fa-display"
                  style={{ color: "#5E74EE" }}
                ></i>
              </div>
              <h5 className="fw-bold">Development</h5>
              <p className="small-font gray-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
                velit necessitatibus dignissimos accusantium, sapiente quis.
              </p>
            </div>
          </div>
          <div className="col-md-3 text-center d-flex justify-content-center ">
            <div className="flex-column d-flex shadowbox align-items-center w-75 py-4 px-3 rounded-3">
              <div
                className="w-25 rounded-3 mb-3"
                style={{ backgroundColor: "#E2F0FF" }}
              >
                <i
                  className="fa-solid my-3 fa-layer-group"
                  style={{ color: "#9FCDFF" }}
                ></i>
              </div>
              <h5 className="fw-bold">Development</h5>
              <p className="small-font gray-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
                velit necessitatibus dignissimos accusantium, sapiente quis.
              </p>
            </div>
          </div>
          <div className="col-md-3 text-center d-flex justify-content-center ">
            <div className="flex-column d-flex shadowbox align-items-center w-75 py-4 px-3 rounded-3">
              <div
                className="w-25 rounded-3 mb-3"
                style={{ backgroundColor: "#C8EBEB" }}
              >
                <i
                  className="fa-solid my-3 fa-briefcase"
                  style={{ color: "#48BABC" }}
                ></i>
              </div>
              <h5 className="fw-bold">Business</h5>
              <p className="small-font gray-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
                velit necessitatibus dignissimos accusantium, sapiente quis.
              </p>
            </div>
          </div>
        </div>

        
        <div className="row mt-5">
          <div className="col-md-3 text-center d-flex justify-content-center">
            <div className="flex-column d-flex shadowbox align-items-center w-75 py-4 px-3 rounded-3">
              <div
                className="w-25 rounded-3 mb-3"
                style={{ backgroundColor: "#FCDDB4" }}
              >
                <i
                  className="fa-solid my-3 fa-chart-simple"
                  style={{ color: "#F48E0D" }}
                ></i>
              </div>
              <h5 className="fw-bold">Marketing</h5>
              <p className="small-font gray-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
                velit necessitatibus dignissimos accusantium, sapiente quis.
              </p>
            </div>
          </div>
          <div className="col-md-3 text-center d-flex justify-content-center ">
            <div className="flex-column d-flex shadowbox align-items-center w-75 py-4 px-3 rounded-3">
              <div
                className="w-25  rounded-3 mb-3"
                style={{ backgroundColor: "#FAD0CE" }}
              >
                <i
                  className="fa-solid my-3 fa-book"
                  style={{ color: "#EE665D" }}
                ></i>
              </div>
              <h5 className="fw-bold">Photography</h5>
              <p className="small-font gray-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
                velit necessitatibus dignissimos accusantium, sapiente quis.
              </p>
            </div>
          </div>
          <div className="col-md-3 text-center d-flex justify-content-center ">
            <div className="flex-column d-flex shadowbox align-items-center w-75 py-4 px-3 rounded-3">
              <div
                className="w-25 rounded-3 mb-3"
                style={{ backgroundColor: "#BEBEC6" }}
              >
                <i
                  className="fa-solid my-3 fa-film"
                  style={{ color: "#4B4C62" }}
                ></i>
              </div>
              <h5 className="fw-bold">Acting</h5>
              <p className="small-font gray-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
                velit necessitatibus dignissimos accusantium, sapiente quis.
              </p>
            </div>
          </div>
          <div className="col-md-3 text-center d-flex justify-content-center ">
            <div className="flex-column d-flex shadowbox align-items-center w-75 py-4 px-3 rounded-3">
              <div
                className="w-25 rounded-3 mb-3"
                style={{ backgroundColor: "#C8EBEB" }}
              >
                <i
                  className="fa-solid my-3 fa-briefcase"
                  style={{ color: "#48BABC" }}
                ></i>
              </div>
              <h5 className="fw-bold">Business</h5>
              <p className="small-font gray-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
                velit necessitatibus dignissimos accusantium, sapiente quis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
