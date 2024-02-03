import React from 'react'
import Style from './RightProfile.module.css'
import img1 from '../../Assets/man1 (1).jpg'
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";

export default function RightProfile() {
  const isScreenSmall = useMediaQuery({ minWidth: 0, maxWidth: 768 });
    return <>
    <h5 className="text-center fw-bold">Profile</h5>
    <div className="text-center ">
    <img src={img1} className={`w-50 rounded-pill p-2 ${Style.border}`} alt="" />
   <div className="d-flex justify-content-center align-items-center">
   <p className="fw-bold">Maietry Prajapti</p>
    <IoShieldCheckmarkSharp className="text-color mx-2" />
   </div>
   <p className="small-font fw-bold">College Student</p>
   <div style={{backgroundColor:'#F8F8F8'}} className={`rounded-4 py-1 ${isScreenSmall ? "w-75 mx-auto mt-3" : ""}`}>
    <div className="d-flex small-font justify-content-around my-2 rounded-3">
    <div className="d-flex align-items-center">
    <i class="fa-solid fa-chevron-left"></i>
    </div>
    <p>November 2023</p>
    <div className="d-flex align-items-center">
    <i class="fa-solid fa-chevron-right"></i>
    </div>
    </div>
    <div className="d-flex font-xs justify-content-evenly fw-bold">
    <div className="p-1 d-flex flex-column justify-content-center">
       <p>T</p>
       <div className="d-flex bg-white rounded-pill p-1">
        <p>24</p>
       </div>
       </div>
       <div className="bg-black rounded-pill p-1 d-flex flex-column justify-content-center">
       <p className="text-white">T</p>
       <div className="d-flex bg-color text-white rounded-pill p-1">
        <p>24</p>
       </div>
       </div>
       <div className="p-1 d-flex flex-column justify-content-center">
       <p>T</p>
       <div className="d-flex bg-white rounded-pill p-1">
        <p>24</p>
       </div>
       </div>
       <div className="p-1 d-flex flex-column justify-content-center">
       <p>T</p>
       <div className="d-flex bg-white rounded-pill p-1">
        <p>24</p>
       </div>
       </div>
       <div className="p-1 d-flex flex-column justify-content-center">
       <p>T</p>
       <div className="d-flex bg-white rounded-pill p-1">
        <p>24</p>
       </div>
       </div>
       <div className="p-1 d-flex flex-column justify-content-center">
       <p>T</p>
       <div className="d-flex bg-white rounded-pill p-1">
        <p>24</p>
       </div>
       </div>
       <div className="p-1 d-flex flex-column justify-content-center">
       <p>T</p>
       <div className="d-flex bg-white rounded-pill p-1">
        <p>24</p>
       </div>
       </div>
      
    
      
    </div>

   </div>
    </div>
<div className={`border-top mt-3 ${isScreenSmall? "mx-5" :""}`}>
<p className="fw-bold mb-3">ToDo List</p>
    <div className="d-flex align-items-center">
    <input type="checkbox" />
    <p className="m-0 small-font text-bg-dark-subtle fw-bold ms-1">Developing Restaurant Apps</p>
    </div>
    <div className="d-flex small-font justify-content-between mx-3 py-1 border-bottom">
        <p>Programming</p>
        <p className="text-gold fw-bold">08:00AM</p>
    </div>
    <div className="d-flex small-font  mx-3 py-1">
       <input type="checkbox" />
        <p className="gray-text ms-1 fw-bold">Integrate API</p>
    </div>
    <div className="d-flex small-font  mx-3 py-1">
       <input type="checkbox" />
        <p className="gray-text ms-1 fw-bold">Slicing Home Screen</p>
    </div>
   <div className="my-3">
   <div className="d-flex align-items-center">
    <input type="checkbox" />
    <p className="m-0 small-font text-bg-dark-subtle fw-bold ms-1">Research Objective User</p>
    </div>
    <div className="d-flex small-font justify-content-between mx-3 py-1 border-bottom">
        <p>Product Design</p>
        <p className="text-gold fw-bold">02:40pM</p>
    </div>
   </div>
   <div className="my-3">
   <div className="d-flex align-items-center">
   <input
    type="checkbox"
    checked
    style={{ display: 'none' }} 
/>
<span className={`${Style.customCheckbox}`}><i className="fa-solid fa-check small-font text-white"></i></span>
<p className="m-0 small-font text-bg-dark-subtle fw-bold ms-1"><del>Report Analysis P2P business</del></p>
    </div>
    <div className="d-flex small-font justify-content-between mx-3 py-1">
        <p>Business</p>
        <p className="text-gold fw-bold">04:50PM</p>
    </div>
   </div>
</div>
    </>
}


