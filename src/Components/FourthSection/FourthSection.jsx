import React from 'react'
import Style from './FourthSection.module.css'
import rightimg from '../../Assets/img5.jpg'
import leftimg from '../../Assets/img11.png'
import { useMediaQuery } from 'react-responsive'


export default function FourthSection() {
    const isScreenSmall=useMediaQuery({maxWidth:576})
    return <>
   <div className="container py-5">
   <div className="row justify-content-between">
        <div className={`col-md-6 mt-4 ${isScreenSmall?'':'ms-5 ps-3'}`}>
            <h3 className="fw-bold"><span className="text-color">Screen Reader</span> Feature</h3>
            <p className="gray-text">It's a new feature for prople who has disabilities, It's often available in multiple languages to cater users worldwide, often support Braille displays, which provide tactile output to users who are proficient in Braille.</p>
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
            <h3 className="fw-bold"><span className="text-color">Chat</span> with Instructors</h3>
            <p className="gray-text">There are available instructors any time to help students who need to understand anything. Students will be more comfortable with this feature as they want instructors to follow their progress and it will make courses and learning easier.</p>
        </div>
       
    </div>
   </div>
    
    </>
}


