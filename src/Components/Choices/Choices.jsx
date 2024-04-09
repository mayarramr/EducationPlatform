import React from 'react'
import Style from './Choices.module.css'
import Img1 from '../../Assets/choice1.jpg'
import person1 from '../../Assets/img12.jpg'
import person2 from '../../Assets/man1 (1).jpg'
import person3 from '../../Assets/man2.jpg'
import Img2 from '../../Assets/choice2.webp'
import Img3 from '../../Assets/choice3.jpg'
import Img4 from '../../Assets/choice4.png'



const recommendedCourses = [
  {
    title: "AWS Certified Solution Architect",
    category: "Design",
    duration: "3 Month",
    imageUrl: Img1,
    instructor: "Sara",
    instructorImage: person1,
    description: "Master the skills to design, deploy, and manage highly scalable, reliable, and cost-effective cloud architectures on AWS.",
    originalPrice: 100,
    discountedPrice: 80,
  },
  {
    title: "The Complete JavaScript Developer Course 2023: From Zero to Expert!",
    category: "Development",
    duration: "6 Month",
    imageUrl: Img2,
    instructor: "Nour",
    instructorImage: person2,
    description: "Unlock a career in web development with this comprehensive JavaScript course, covering everything from the basics to advanced topics.",
    originalPrice: 150,
    discountedPrice: 120,
  },
  {
    title: "The Photography Masterclass: From Beginner to Professional",
    category: "Photography",
    duration: "4 Month",
    imageUrl: Img3,
    instructor: "Ahmed",
    instructorImage: person3,
    description: "Learn the art and science of photography, from capturing stunning images to mastering post-processing techniques.",
    originalPrice: 90,
    discountedPrice: 75,
  },
  {
    title: "The Actor's Toolkit: Mastering the Craft of Acting",
    category: "Acting",
    duration: "8 Month",
    imageUrl: Img4,
    instructor: "Salma",
    instructorImage: person1, 
    description: "Develop your acting skills and explore different techniques with this in-depth course for aspiring and experienced actors.",
    originalPrice: 200,
    discountedPrice: 160,
  },
];


export default function Choices() {
    return <>
          <div className="container pt-5 pb-3">
      <div className="d-flex align-items-center justify-content-between">
        <h3 className="fw-bold">
          Get <span className="text-color">Choice</span> of your Course
        </h3>
        <button className="btn fw-bold text-color font-sm">
          See All
        </button>
      </div>
      <div className="row pb-5 pt-3">
        {recommendedCourses.map((course) => (
          <div className="col-md-3" key={course.title}>
            <div className="bg-white rounded-4 p-3  shadowbox">
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
                  <del className="gray-text font-sm me-2"><em>{course.originalPrice}</em></del>
                  <h6 className="fw-bold text-color m-0">{course.discountedPrice}</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
}


