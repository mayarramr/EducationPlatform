import React from "react";
import Style from "./ThirdSection.module.css";
import leftimg from "../../Assets/img10.png";
import rightimg from "../../Assets/img4.jpg";
import { useMediaQuery } from "react-responsive";

import { useLanguage } from '../LanguageContext';

export default function ThirdSection() {
  const isScreenSmall = useMediaQuery({ maxWidth: 576 });

  const { language } = useLanguage();

  const sectionData = [
    { imgSrc: leftimg, title: language === "en" ? 'FOR INSTRUCTORS' : 'للمدرسين', buttonText: language === "en" ? 'Start a class today' : 'ابدأ التدريس اليوم', buttonClassName: 'btn btn-sm py-2 rounded-4 small-font px-4 border border-2 text-white my-3' },
    { imgSrc: rightimg, title: language === "en" ? 'FOR STUDENTS' : 'للطلاب', buttonText: language === "en" ? 'Enter access code' : 'أدخل رمز الوصول', buttonClassName: `${Style.bgColor} small-font btn px-4 py-2 rounded-4 text-white my-3` },
  ];
  return (
    <>
      <div className="row justify-content-center my-5">
        <div className="col-md-6 text-center">
          <h3 className="fw-bold">
            {language === "en" ? "What is" : ""}
            <span className="text-color"> {language === "en" ? "USAM?" : "?USAM"}</span>
            {language ==="en" ? "" : " ما هو "}
          </h3>
          <p className="gray-text">
          {language === "en" 
                ? "USAM is a platform that allows educators to create online class whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place."
                : "USAM هي عبارة عن منصة تسمح للمعلمين بإنشاء فصول عبر الإنترنت حيث يمكنهم تخزين مواد الدورة التدريبية عبر الإنترنت ؛ أدار الواجبات والاختبارات والامتحانات ؛ مراقبة تواريخ الاستحقاق ؛ نتائج الصف و تزويد الطلاب بالملاحظات في مكان واحد."}
          </p>
        </div>
      </div>

      <div className={`row justify-content-center mb-5 ${isScreenSmall ? 'mx-2 px-1' : 'mx-5 px-5'}`}>
        {sectionData.map((item, index) => (
          <div key={index} className={`col-md-4 p-0 ${index === 1 && (isScreenSmall ? 'mt-3' : 'offset-1')}`}>
            <div className="position-relative">
              <img src={item.imgSrc} className="w-100 rounded-4" alt="" />
              <div className={`${Style.layer} rounded-4`}>
                <div className="top-50 position-absolute start-50 translate-middle text-center">
                  <p className="fs-5 fw-bold text-white">{item.title}</p>
                  <button className={item.buttonClassName}>{item.buttonText}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
