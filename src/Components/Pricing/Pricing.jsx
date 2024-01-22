import React from 'react'
import Style from './Pricing.module.css'
import { useMediaQuery } from 'react-responsive'

export default function Pricing() {
    const isScreenSmall=useMediaQuery({maxWidth:576})
    return <>
    <div className="container pt-5">
   <div className="pt-4 font-sm">
   <p>Enter Your Data <span className="text-color"><i className="fa-solid text-color fa-angles-right px-3"></i> Choose Your Subscription</span></p>
    </div>
    <div className="row text-center py-4">
        <h3 className="fw-bold">Choose your subscription with <span className="text-color">affordable price</span></h3>
        <h4>And enjoy all courses</h4>
    </div>

   <div className={`${isScreenSmall?'container':''}`}>
   <div className="row justify-content-center pb-4">
        <div className="col-md-3 py-3 position-relative">
            <p className="fw-bold text-color">Like a pussy</p>
            <h1 className="fw-bold">$500 <span className="font-sm">/YEAR</span></h1>
       <div className="d-flex align-items-center">
       <div className="bg-dark-subtle rounded-pill d-flex align-items-center justify-content-center" style={{width:'30px' , height:'30px'}}>
            <i className="font-sm fa-solid fa-check"></i>
            </div>
            <p className="ms-2 font-sm">Components-driven system</p>
        </div>
       <div className="d-flex align-items-center my-3">
       <div className="bg-dark-subtle rounded-pill d-flex align-items-center justify-content-center" style={{width:'30px' , height:'30px'}}>
            <i className="font-sm fa-solid fa-check"></i>
            </div>
            <p className="ms-2 font-sm">Sales-boosting landing pages</p>
        </div>
       <div className="d-flex align-items-center">
       <div className="bg-dark-subtle rounded-pill d-flex align-items-center justify-content-center" style={{width:'30px' , height:'30px'}}>
            <i className="font-sm fa-solid fa-check"></i>
            </div>
            <p className="ms-2 font-sm">Awesome Feather icon pack</p>
        </div>
        <div className={`w-100 ${isScreenSmall?'mt-3':'position-absolute bottom-0 start-50 ms-5 translate-middle-x'}`}>
        <button className="mb-3 px-5 btn border border-1 border-black rounded-4 text-color fw-bold font-sm">Subscribe Now</button>
        </div> 
        </div>


        <div className={`col-md-3 shadowbox py-3 rounded-4 mx-3 ${isScreenSmall?'mb-4':''} `}>
     <div className="d-flex align-items-center">
     <i className={`${Style.user} mx-2 fa-solid fa-user`}></i>
            <p className="fw-bold text-color">Individual</p>
     </div>
      <div className="d-flex justify-content-between align-items-center">
      <h1 className="fw-bold">$24 <span className="font-sm">/MONTH</span></h1>
      <div className="border border-2 border-black rounded-5 d-flex align-items-center justify-content-center px-2" style={{height:'25px'}}>
        <p className="font-sm">Best !</p>
      </div>
       </div>
       <div className="d-flex align-items-center">
       <div className="bg-gold rounded-pill d-flex align-items-center justify-content-center" style={{width:'30px' , height:'30px'}}>
            <i className="font-sm text-white fa-solid fa-check"></i>
            </div>
            <p className="ms-2 font-sm">Components-driven system</p>
        </div>
       <div className="d-flex align-items-center my-3">
       <div className="bg-gold rounded-pill d-flex align-items-center justify-content-center" style={{width:'30px' , height:'30px'}}>
            <i className="font-sm text-white fa-solid fa-check"></i>
            </div>
            <p className="ms-2 font-sm">Sales-boosting landing pages</p>
        </div>
       <div className="d-flex align-items-center">
       <div className="bg-gold rounded-pill d-flex align-items-center justify-content-center" style={{width:'30px' , height:'30px'}}>
            <i className="font-sm text-white fa-solid fa-check"></i>
            </div>
            <p className="ms-2 font-sm">Awesome Feather icon pack</p>
        </div>
       <div className="d-flex align-items-center my-3">
       <div className="bg-gold rounded-pill d-flex align-items-center justify-content-center" style={{width:'30px' , height:'30px'}}>
            <i className="font-sm text-white fa-solid fa-check"></i>
            </div>
            <p className="ms-2 font-sm">Themed into 3 different styles</p>
        </div>
       <div className="d-flex align-items-center">
       <div className="bg-gold rounded-pill d-flex align-items-center justify-content-center" style={{width:'30px' , height:'30px'}}>
            <i className="font-sm text-white fa-solid fa-check"></i>
            </div>
            <p className="ms-2 font-sm">Will help to learn Figma</p>
        </div>
        <div className="d-flex justify-content-center">
        <button className="btn mt-5  rounded-4  px-5 text-white bg-color fw-bold py-2">Regular license</button>
        </div> 
        </div>


        <div className="col-md-3 py-3 position-relative">
        <div className="d-flex align-items-center">
     <i className={`${Style.user} mx-2 fa-solid fa-users`}></i>
            <p className="fw-bold text-color">Corporate</p>
     </div>
      <h1 className="fw-bold">$12 <span className="font-sm">/EDITOR</span></h1>
      
       <div className="d-flex align-items-center">
       <div className="bg-success-subtle rounded-pill d-flex align-items-center justify-content-center" style={{width:'30px' , height:'30px'}}>
            <i className="font-sm fa-solid fa-check"></i>
            </div>
            <p className="ms-2 font-sm">Components-driven system</p>
        </div>
       <div className="d-flex align-items-center my-3">
       <div className="bg-success-subtle rounded-pill d-flex align-items-center justify-content-center" style={{width:'30px' , height:'30px'}}>
            <i className="font-sm  fa-solid fa-check"></i>
            </div>
            <p className="ms-2 font-sm">Sales-boosting landing pages</p>
        </div>
       <div className="d-flex align-items-center">
       <div className="bg-success-subtle rounded-pill d-flex align-items-center justify-content-center" style={{width:'30px' , height:'30px'}}>
            <i className="font-sm  fa-solid fa-check"></i>
            </div>
            <p className="ms-2 font-sm">Awesome Feather icon pack</p>
        </div>
       <div className="d-flex align-items-center my-3">
       <div className="bg-success-subtle rounded-pill d-flex align-items-center justify-content-center" style={{width:'30px' , height:'30px'}}>
            <i className="font-sm fa-solid fa-check"></i>
            </div>
            <p className="ms-2 font-sm">Themed into 3 different styles</p>
        </div>
        <div className={`w-100 ${isScreenSmall?'mt-3':'position-absolute bottom-0 start-50 ms-5 translate-middle-x'}`}>
        <button className="mb-3 px-5 btn border border-1 border-black rounded-4 text-color fw-bold font-sm">Extended license</button>
        </div> 
        </div>
    </div>
   </div>

  

    </div>
    <div className="row justify-content-end mb-3">
        <div className="col-md-3 d-flex justify-content-center">
        <button className="btn bg-color text-white rounded-5 px-4">Continue</button>
        </div>
         </div>
    </>
}


