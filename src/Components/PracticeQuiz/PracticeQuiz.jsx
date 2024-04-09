import React from 'react'
import Style from './PracticeQuiz.module.css'
import { Link } from 'react-router-dom'
import { useMediaQuery } from "react-responsive";

export default function PracticeQuiz() {
   const isScreenSmall = useMediaQuery({ minWidth: 0, maxWidth: 768 });
   const lessonData = [
      { bgColor: 'bg-color text-white', textColor: 'darkblue font-xs', bgStyle: { backgroundColor: '#E5DACA' } },
      { bgColor: 'darkblue', textColor: 'font-xs', bgStyle: { backgroundColor: '#E2F0FF' } },
      { bgColor: 'darkblue', textColor: 'font-xs', bgStyle: { backgroundColor: '#FAD0CE' } },
   ];

   const lessonItems = [
      { bgColor: '#E2F0FF', text: 'Lesson 01: Introduction about XD', duration: 30 },
      { bgColor: '#E5DACA', text: 'Lesson 02: React Basics', duration: 45 },
      { bgColor: '#FAD0CE', text: 'Lesson 02: React Basics', duration: 45 },
   ];

   const repeatedLessons = Array.from({ length: 12 }).map((_, index) => ({
      ...lessonItems[index % lessonItems.length], // Cycle through lesson data
   }));

   const LessonComponent = ({ bgColor, text, duration }) => (
      <div className={`col-md-12 p-0`}>
         <div className={`darkblue p-2 rounded-3`} style={{ backgroundColor: bgColor }}>
            <div className="d-flex align-items-center justify-content-between">
               <div className="d-flex font-xs align-items-center my-1">
                  <i className="fa-solid fa-book-open me-2"></i>
                  <p>{text}</p>
               </div>
               <p className="font-xs">{duration} min</p>
            </div>
         </div>
      </div>
   );

   return <>
      <div className="row mb-5">
         <div style={{ width: isScreenSmall ? '40px' : '' }} className="col-md-2 bg-color d-flex align-items-center justify-content-center text-white p-2">

            <i class="fa-solid fa-arrow-left-long fs-5"></i>

         </div>
      </div>

      <div className="row">
         <h5 className="fw-bold m-0">Change Simplification</h5>
         <div className="row gy-2 m-0">
            {lessonData.map((lesson, index) => (
               <div key={index} className="col-md-12 p-0">
                  <div className={`${lesson.bgColor} p-2 rounded-3`} style={lesson.bgStyle}>
                     <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex font-xs align-items-center my-1">
                           <i className="fa-solid fa-book-open me-2"></i>
                           <p>Lessson 01 : Introduction about XD</p>
                        </div>
                        <p className={lesson.textColor}>30 min</p>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>

      <div className="row my-5">
         <h5 className="fw-bold m-0">Practice Quiz</h5>
         <div className="row gy-2 m-0">
            {repeatedLessons.map((lesson, index) => (
               <LessonComponent key={index} {...lesson} />
            ))}
         </div>
      </div>

      <div className="row my-5">
         <h5 className="fw-bold m-0">Practice Quiz</h5>
         <div className="row gy-2 m-0">
            {repeatedLessons.map((lesson, index) => (
               <LessonComponent key={index} {...lesson} />
            ))}
         </div>
      </div>
   </>
}


