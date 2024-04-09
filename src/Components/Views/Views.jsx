import React from 'react';
import Style from './Views.module.css';
import Img1 from '../../Assets/view1.jpg';
import person1 from '../../Assets/img12.jpg';

const courses = [
  {
    title: "AWS Certified Solution Architect",
    category: "Design",
    duration: "3 Month",
    imageUrl: Img1,
    instructor: "Sara",
    instructorImage: person1,
    originalPrice: 100,
    discountedPrice: 80,
    description:
      "Learn the skills and knowledge to architect and deploy secure, scalable, and cost-effective solutions on AWS.",
  },
  // Add more course objects here following the same structure
];

export default function Views() {
  return (
    <>
      <div className="bg-greenlight">
        <div className="container py-5">
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="fw-bold">Students are viewing</h5>
            <button className="btn fw-bold text-color font-sm">
              See All
            </button>
          </div>
          <div className="row pb-5 pt-3">
            {courses.map((course) => {
              return [...Array(4)].map(() => (
                <div key={course.title + Math.random()} className="col-md-3">
                  <div className="bg-white rounded-4 p-3 my-4">
                    <div>
                      <img src={course.imageUrl} className="w-100 rounded-3" alt={course.title} />
                    </div>
                    <div className="d-flex justify-content-between my-3 gray-text">
                      <div className="d-flex align-items-center font-sm">
                        <i className="fa-solid fa-table-cells-large me-1"></i>
                        <p>{course.category}</p>
                      </div>
                      <div className="d-flex align-items-center font-sm">
                        <i className="fa-regular fa-clock me-1"></i>
                        <p>{course.duration}</p>
                      </div>
                    </div>
                    <h5 className="fw-bold">{course.title}</h5>
                    <p className="font-sm gray-text mt-4">{course.description}</p>
                    <div className="d-flex mt-3">
                      <div className="d-flex w-75 align-items-center">
                        <img src={course.instructorImage} className="w-25 rounded-pill" alt={course.instructor} />
                        <p className="font-sm fw-bold ms-2">{course.instructor}</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <del className="gray-text font-sm me-2"><em>{course.originalPrice}$</em></del>
                        <h6 className="fw-bold text-color m-0">{course.discountedPrice}$</h6>
                      </div>
                    </div>
                  </div>
                </div>
              ));
            })}
          </div>
        </div>
      </div>
    </>
  );
}
