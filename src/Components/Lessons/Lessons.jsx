import React from "react";
import Style from "./Lessons.module.css";
import library1 from "../../Assets/libraryImg1.jpg";
import libraryImg3 from "../../Assets/IibraryImg3.png";
import libraryImg4 from "../../Assets/libraryImg4 (2).jpeg";
import img12 from "../../Assets/img12.jpg";

const lessons = [
  {
    imgSrc: libraryImg3,
    title: "AWS Certified Solution Architect",
    progress: 75,
    lessonNumber: 5,
    totalLessons: 7,
    profileImgSrc: img12,
    profileName: "Lina",
  },
  {
    imgSrc: libraryImg4,
    title: "AWS Certified Solution Architect",
    progress: 75,
    lessonNumber: 5,
    totalLessons: 7,
    profileImgSrc: img12,
    profileName: "Lina",
  },
  {
    imgSrc: library1,
    title: "AWS Certified Solution Architect",
    progress: 75,
    lessonNumber: 5,
    totalLessons: 7,
    profileImgSrc: img12,
    profileName: "Lina",
  },
];

export default function Lessons() {
  return (
    <>
      <div className="mt-5 pt-5">
        <div className="bg-greenlight">
          <div className="container py-4">
            <div className="d-flex align-items-center justify-content-between">
              <h3 className="fw-bold">Welcome Lina, ready for your next lesson</h3>
              <button className="btn fw-bold text-color font-sm">View History</button>
            </div>
            <div className="row">
              {lessons.map((lesson) => (
                <div key={lesson.imgSrc} className="col-md-4">
                  <div className="bg-white rounded-4 p-3 my-4">
                    <div>
                      <img src={lesson.imgSrc} className="w-100 rounded-3" alt="" />
                    </div>
                    <p className="fw-bold mt-2">{lesson.title}</p>
                    <div className="d-flex w-50 align-items-center">
                      <img
                        src={lesson.profileImgSrc}
                        className="w-25 rounded-pill my-3"
                        alt=""
                      />
                      <p className="fw-bold ms-3 font-sm">{lesson.profileName}</p>
                    </div>
                    <div className="progress" style={{ height: "10px" }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={lesson.progress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: `${lesson.progress}%`, backgroundColor: "#008772" }}
                      ></div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <p className="small-font gray-text mt-1 fw-bold">
                        Lesson {lesson.lessonNumber} of {lesson.totalLessons}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-end">
              <div
                className="rounded-1 mx-3 p-2 d-flex align-items-center justify-content-center"
                style={{ backgroundColor: "#94d3ca" }}
              >
                <i className="m-1 font-sm text-white fa-solid fa-angle-left"></i>
              </div>
              <div className="rounded-1 bg-color p-2 d-flex align-items-center justify-content-center">
                <i className="m-1 font-sm text-white fa-solid fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
