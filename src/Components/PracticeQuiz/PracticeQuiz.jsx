import React from 'react'
import Style from './PracticeQuiz.module.css'
import { Link } from 'react-router-dom'
import { useMediaQuery } from "react-responsive";
import { useLanguage } from '../LanguageContext';

export default function PracticeQuiz() {
   const isScreenSmall = useMediaQuery({ minWidth: 0, maxWidth: 768 });
   const { language } = useLanguage();
   const lessonData = [
      { bgColor: 'bg-color text-white', textColor: 'darkblue font-xs', bgStyle: { backgroundColor: '#E5DACA' } },
      { bgColor: 'darkblue', textColor: 'font-xs', bgStyle: { backgroundColor: '#E2F0FF' } },
      { bgColor: 'darkblue', textColor: 'font-xs', bgStyle: { backgroundColor: '#FAD0CE' } },
   ];

   const lessonItems = [
      { bgColor: '#E2F0FF', text: language === 'en' ? 'Lesson 01: Introduction about XD' : 'الدرس 01: مقدمة حول XD', duration: 30 },
      { bgColor: '#E5DACA', text: language === 'en' ? 'Lesson 02: React Basics' : 'الدرس 02: أساسيات رياكت', duration: 45 },
      { bgColor: '#FAD0CE', text: language === 'en' ? 'Lesson 03: Advanced React Concepts' : 'الدرس 03: مفاهيم رياكت المتقدمة', duration: 45 },
   ];

   const repeatedLessons = Array.from({ length: 12 }).map((_, index) => ({
      ...lessonItems[index % lessonItems.length], // Cycle through lesson data
   }));

   const LessonComponent = ({ bgColor, text, duration, language }) => (
      <div className={`col-md-12 p-0`}>
         <div className={`darkblue p-2 rounded-3`} style={{ backgroundColor: bgColor }}>
            <div className="d-flex align-items-center justify-content-between">
               <div className="d-flex font-xs align-items-center my-1">
                  <i className="fa-solid fa-book-open me-2"></i>
                  <p>{text}</p>
               </div>
               <p className="font-xs">
                  {language === 'en' ? `${duration} min` : `دقيقة ${duration}`}
               </p>
            </div>
         </div>
      </div>
   );

   return (
      <>
         <div className="row mb-5">
            <div style={{ width: isScreenSmall ? '40px' : '' }} className="col-md-2 bg-color d-flex align-items-center justify-content-center text-white p-2">
               <i className="fa-solid fa-arrow-left-long fs-5"></i>
            </div>
         </div>

      <div className="row">
         <h5 className="fw-bold m-0">{language === 'en' ? 'Change Simplification' : 'تبسيط التغيير'}</h5>
         <div className="row gy-2 m-0">
            {lessonData.map((lesson, index) => (
              <Link to={'/quiz'} className="p-0">
               <div key={index} className="col-md-12 p-0">
                  <div className={`${lesson.bgColor} p-2 rounded-3`} style={lesson.bgStyle}>
                     <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex font-xs align-items-center my-1">
                           <i className="fa-solid fa-book-open me-2"></i>
                           <p>{language === 'en' ? 'Lesson 01: Introduction about XD' : 'الدرس 01: مقدمة حول XD'}</p>
                        </div>
                        <p className={lesson.textColor}>{language === 'en' ? '30 min' : '30 دقيقة'}</p>
                     </div>
                  </div>
               </div>
              </Link>
            ))}
         </div>
      </div>

      <div className="row my-5">
         <h5 className="fw-bold m-0">{language === 'en' ? 'Practice Quiz' : 'ممارسة الاختبار'}</h5>
         <div className="row gy-2 m-0">
            {repeatedLessons.map((lesson, index) => (
               <LessonComponent key={index} {...lesson} language={language}/>
            ))}
         </div>
      </div>

      <div className="row my-5">
         <h5 className="fw-bold m-0">{language === 'en' ? 'Practice Quiz' : 'ممارسة الاختبار'}</h5>
         <div className="row gy-2 m-0">
            {repeatedLessons.map((lesson, index) => (
               <LessonComponent key={index} {...lesson} language={language}/>
            ))}
         </div>
      </div>
   </>
   )
}


