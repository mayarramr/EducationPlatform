import React, {useState} from 'react'
import Style from './FourthSection.module.css'
import rightimg from '../../Assets/img5.jpg'
import leftimg from '../../Assets/img11.png'
import { useMediaQuery } from 'react-responsive'

import { useLanguage } from '../LanguageContext';

export default function FourthSection() {
    const isScreenSmall=useMediaQuery({maxWidth:576})

    const { language } = useLanguage();

    return (
    <>
   <div className="container py-5">
   <div className="row justify-content-between">
        <div className={`col-md-6 mt-4 ${isScreenSmall?'':'ms-5 ps-3'}`}>
            <h3 className="fw-bold">
                <span className="text-color">
                    {language === "en" ? "Screen Reader" : ""}
                </span>
                {language === "en" ? " Feature" : "ميزة "}
                <span className="text-color">
                    {language === "en" ? "" : "قارئ الشاشة"}
                </span>

            </h3>
            <p className="gray-text">{language === "en" 
            ? "It's a new feature for prople who has disabilities, It's often available in multiple languages to cater users worldwide, often support Braille displays, which provide tactile output to users who are proficient in Braille." 
            : "إنها ميزة جديدة للأشخاص ذوي الإعاقة ، وغالبا ما تكون متاحة بلغات متعددة لتلبية احتياجات المستخدمين في جميع أنحاء العالم ، وغالبا ما تدعم شاشات برايل ، والتي توفر مخرجات لمسية للمستخدمين الذين يتقنون طريقة برايل."}</p>
        </div>
        <div className={`col-md-3 ${isScreenSmall?'d-flex justify-content-end':''}`}>
            <img src={rightimg} className={`${Style.rightimg}  ${isScreenSmall?'w-50':'w-75'}`} alt="" />
        </div>
    </div>

   <div className="row justify-content-between">

        <div className={`col-md-5 p-0 ${isScreenSmall?'' : 'offset-1'}`}>
            <img src={leftimg} className={`${isScreenSmall?'w-75' : 'w-100'}`} alt="" />
        </div>
        <div className="col-md-5 px-2 d-flex flex-column justify-content-center my-4">
            <h3 className="fw-bold">
                <span className="text-color">{language === "en" ? "Chat " : "الدردشة "}</span> 
                {language === "en" ? "with Instructors" : "مع المدرسين"}
            </h3>
            <p className="gray-text">
                {language === "en" 
                ? "There are available instructors any time to help students who need to understand anything. Students will be more comfortable with this feature as they want instructors to follow their progress and it will make courses and learning easier."
                : "هناك مدرسون متاحون في أي وقت لمساعدة الطلاب الذين يحتاجون إلى فهم أي شيء. سيكون الطلاب أكثر راحة مع هذه الميزة لأنهم يريدون من المعلمين متابعة تقدمهم وستجعل الدورات التدريبية والتعلم أسهل." }
            </p>
        </div>
       
    </div>
   </div>
    
    </>
    )
}


