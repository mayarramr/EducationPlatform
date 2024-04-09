import React from "react";
import Style from "./FifthSection.module.css";
import laptop from "../../Assets/img2.webp";
import man1 from "../../Assets/man1 (1).jpg";
import man2 from "../../Assets/man2.jpg";
import people from "../../Assets/img1.jpg";
import code from "../../Assets/img3.jpg";
import { useMediaQuery } from "react-responsive";

export default function FifthSection() {
  const isScreenSmall = useMediaQuery({ maxWidth: 576 });
  const courseData = [
    { imgSrc: laptop, lessons: '25x Lesson', title: 'Supervised Machine Learning: Regression and Classification', instructor: 'Wade Warren', role: 'Python Developer', stars: 4, category: 'Design' },
    { imgSrc: people, lessons: '16x Lesson', title: 'Programming for everyone: Getting started with Python', instructor: 'Brooklyn Simmons', role: 'Programmer', stars: 4, category: 'Design' },
    { imgSrc: code, lessons: '16x Lesson', title: 'Programming for everyone: Getting started with Python', instructor: 'Brooklyn Simmons', role: 'Programmer', stars: 4, category: 'Design' },
    { imgSrc: code, lessons: '16x Lesson', title: 'Programming for everyone: Getting started with Python', instructor: 'Brooklyn Simmons', role: 'Programmer', stars: 4, category: 'Design' },
  ];
  return (
    <>
      <div className="container">
        <div className="row justify-content-between mb-2 mx-3">
          <div className={`col-md-3 ${isScreenSmall ? "text-center mb-3" : ""}`}>
            <h4 className="fw-bold">
              Our <span className="text-color">Courses</span>
            </h4>
          </div>
          <div className="col-md-2 d-flex justify-content-end">
            <button className="btn bg-color text-white rounded-5 px-4">
              See All
            </button>
          </div>
        </div>

        <div className={`row mb-5 mt-2 mx-2 ${isScreenSmall ? 'justify-content-center' : 'flex-nowrap'}`}>
          {courseData.map((course, index) => (
            <div key={index} className={`col-md-3 p-0 ${isScreenSmall ? 'my-4' : ''}`}>
              <div className="mx-2 light-green rounded-4">
                <div>
                  <img src={course.imgSrc} className="w-100 rounded-top-4" alt="" />
                </div>
                <div className="row justify-content-between">
                  <div className="col-md-5 d-flex align-items-center">
                    <div className={`${Style.play}`}>
                      <i className="fa-solid fa-play"></i>
                    </div>
                    <p className="small-font fw-bold">{course.lessonCount}</p>
                  </div>
                  <div className="col-md-5 d-flex align-items-center justify-content-end pe-4 small-font">
                    {Array.from({ length: course.stars }).map((_, starIndex) => (
                      <i key={starIndex} className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                    ))}
                  </div>
                </div>
                <div className="border-bottom border-white border-2 pb-4">
                  <p className="fw-bold ps-3">{course.title}</p>
                </div>

                <div className="row pb-3">
                  <div className="align-items-center d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="my-2 ms-2" style={{ width: '50px', height: '50px' }}>
                        <img src={man2} className="w-100 rounded-pill" alt="" />
                      </div>
                      <div>
                        <p className="font-sm fw-bold ms-2">{course.instructor}</p>
                        <p className="font-sm ms-2 gray-text">{course.instructorRole}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-gold small-font fw-bold me-4">{course.category}</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button className="btn bg-color text-white rounded-5">Enroll Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
