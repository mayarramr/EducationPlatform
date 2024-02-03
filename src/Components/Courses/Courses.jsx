import React from 'react'
import Style from './Courses.module.css'
import PracticeQuiz from '../PracticeQuiz/PracticeQuiz'
import CourseDetails from '../CourseDetails/CourseDetails'
import { useMediaQuery } from "react-responsive";
import { Helmet } from 'react-helmet';


export default function Courses() {
  const isScreenSmall = useMediaQuery({ minWidth: 0, maxWidth: 768 });
    return <>
    <Helmet>
        <title>Courses</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    <div className="row pt-5 mt-5 mx-3">
        <div className="col-md-3">
            <div className={`${isScreenSmall ? "" : "w-75"}`}>
            <PracticeQuiz />
            </div>
        </div>
        <div className="col-md-8 p-0">
            <CourseDetails />
        </div>
    </div>
    </>
}


