import React from 'react'
import Style from './Quiz.module.css'
import quiz from '../../Assets/quiz.jpg'
import { useMediaQuery } from "react-responsive";
import { Helmet } from 'react-helmet';

export default function Quiz() {
    const isScreenSmall = useMediaQuery({ minWidth: 0, maxWidth: 768 });
    return <>
    <Helmet>
        <title>Quiz</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    <div className="container mt-5">
        {isScreenSmall ? 
        <>
        <div className={`fw-bold gray-text d-flex align-items-center justify-content-evenly small-font ${isScreenSmall ? "flex-wrap mx-4 pb-2 pt-4" : "py-5"}`}>
            <p>Course name</p>
            <i className="fa-solid fa-angles-right"></i>
            <p>Start Quiz</p>
            <i className="fa-solid fa-angles-right"></i>
            <p>Question 1</p>
            <i className="fa-solid fa-angles-right"></i>
            <p>Question 2</p>
            <i className="fa-solid fa-angles-right"></i>
            <p className="text-color">Question 3</p>
            <i className="fa-solid fa-angles-right"></i>
            <p>Question 4</p>
            <i className="fa-solid fa-angles-right"></i>
            <p>Question 5</p>
            <i className="fa-solid fa-angles-right"></i>
            <p>Question 6</p>
            <i className="fa-solid fa-angles-right"></i>
            <p>Finish Quiz</p>
            <div className="bg-color text-white rounded-pill d-flex align-items-center justify-content-center font-xs" style={{width:'15px' , height:'15px'}}>
            <i className="fa-solid fa-check"></i>
            </div>
        </div>
        <div className={`row ${isScreenSmall ? "mx-3" : ""}`}>
        <div className="col-md-5 d-flex justify-content-center">
            <img src={quiz} className={`${isScreenSmall ? "w-75" : "w-100"}`} alt="" />
        </div>
        <div className="col-md-7  p-0">
        <div className="font-sm fw-bold mb-5"> 
            <p className="gray-text">Question 3</p>
            <h3 className={`fw-bold ${isScreenSmall? "h6" : ""}`} >From these choices, what're from UX principles ?</h3>
        </div>

      <div className="row gy-2 mb-5">
      <div className={`col-md-12 p-0 ${isScreenSmall ? "w-100 small-font " : ""}`}>
      <div className="bg-color text-white p-3 fw-bold rounded-3 ">
            <p>User experience design, Testing, Accessibility and Typography</p>
        </div>
        <div className="my-2 gray-text border border-black p-3 fw-bold rounded-3">
            <p>User experience design, Testing, Accessibility and Typography</p>
        </div>
        <div className=" gray-text border border-black p-3 fw-bold rounded-3">
            <p>User experience design, Testing, Accessibility and Typography</p>
        </div>
        <div className="my-2 gray-text border border-black p-3 fw-bold rounded-3">
            <p>User experience design, Testing, Accessibility and Typography</p>
        </div>
      </div>
        <div className="d-flex mt-5 p-0 align-items-center justify-content-between">
            <button className="btn small-font d-flex align-items-center px-4 py-2 gary-text border rounded-5 px-3 fw-bold">
        <i className="fa-solid fa-arrow-left me-2"></i>
        <p>Back</p>
        </button>
            <button className="btn small-font d-flex align-items-center px-4 py-2 bg-color text-white border rounded-5 px-3 fw-bold">
            <p>Next</p>
        <i className="fa-solid fa-arrow-right ms-2"></i>
        </button>
        </div>
      </div>
        </div>
       
       </div>
        </>
        :
        <>
        <div className={`fw-bold gray-text py-5 d-flex align-items-center justify-content-evenly small-font ${isScreenSmall ? "flex-wrap mx-4" : ""}`}>
            <p>Course name</p>
            <i className="fa-solid fa-angles-right"></i>
            <p>Start Quiz</p>
            <i className="fa-solid fa-angles-right"></i>
            <p>Question 1</p>
            <i className="fa-solid fa-angles-right"></i>
            <p>Question 2</p>
            <i className="fa-solid fa-angles-right"></i>
            <p className="text-color">Question 3</p>
            <i className="fa-solid fa-angles-right"></i>
            <p>Question 4</p>
            <i className="fa-solid fa-angles-right"></i>
            <p>Question 5</p>
            <i className="fa-solid fa-angles-right"></i>
            <p>Question 6</p>
            <i className="fa-solid fa-angles-right"></i>
            <p>Finish Quiz</p>
            <div className="bg-color text-white rounded-pill d-flex align-items-center justify-content-center font-xs" style={{width:'15px' , height:'15px'}}>
            <i className="fa-solid fa-check"></i>
            </div>
        </div>

        <div className={`row ${isScreenSmall ? "mx-3" : ""}`}>
        <div className="col-md-7  p-0">
        <div className="font-sm fw-bold mb-5"> 
            <p className="gray-text">Question 3</p>
            <h3 className={`fw-bold ${isScreenSmall? "h6" : ""}`} >From these choices, what're from UX principles ?</h3>
        </div>

      <div className="row gy-2 mb-5">
      <div className={`col-md-12 p-0 ${isScreenSmall ? "w-100 small-font " : ""}`}>
      <div className="bg-color text-white p-3 fw-bold rounded-3 ">
            <p>User experience design, Testing, Accessibility and Typography</p>
        </div>
        <div className="my-2 gray-text border border-black p-3 fw-bold rounded-3">
            <p>User experience design, Testing, Accessibility and Typography</p>
        </div>
        <div className=" gray-text border border-black p-3 fw-bold rounded-3">
            <p>User experience design, Testing, Accessibility and Typography</p>
        </div>
        <div className="my-2 gray-text border border-black p-3 fw-bold rounded-3">
            <p>User experience design, Testing, Accessibility and Typography</p>
        </div>
      </div>
        <div className="d-flex mt-5 p-0 align-items-center justify-content-between">
            <button className="btn small-font d-flex align-items-center px-4 py-2 gary-text border rounded-5 px-3 fw-bold">
        <i className="fa-solid fa-arrow-left me-2"></i>
        <p>Back</p>
        </button>
            <button className="btn small-font d-flex align-items-center px-4 py-2 bg-color text-white border rounded-5 px-3 fw-bold">
            <p>Next</p>
        <i className="fa-solid fa-arrow-right ms-2"></i>
        </button>
        </div>
      </div>
        </div>
        <div className="col-md-5">
            <img src={quiz} className="w-100" alt="" />
        </div>
       </div>
        </>
        }
        

    

    </div>
    </>
}


