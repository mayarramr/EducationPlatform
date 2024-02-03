import React from 'react'
import Style from './Choices.module.css'
import Img1 from '../../Assets/choice1.jpg'
import person1 from '../../Assets/img12.jpg'
import person2 from '../../Assets/man1 (1).jpg'
import person3 from '../../Assets/man2.jpg'
import Img2 from '../../Assets/choice2.webp'
import Img3 from '../../Assets/choice3.jpg'
import Img4 from '../../Assets/choice4.png'

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
              <div className="col-md-3">
                <div className="bg-white rounded-4 p-3 my-4 shadowbox">
                  <div>
                    <img src={Img1} className="w-100 rounded-3" alt="" />
                  </div>
                  <div className="d-flex justify-content-between my-3 gray-text">
                    <div className="d-flex align-items-center font-sm">
                    <i className="fa-solid fa-table-cells-large me-1"></i>
                    <p>Design</p>
                    </div>
                    <div className="d-flex align-items-center font-sm">
                    <i className="fa-regular fa-clock me-1"></i>
                    <p>3 Month</p>
                    </div>
                  </div>
                  <h5 className="fw-bold">AWS Certified Solution Architect</h5>
                  <p className="font-sm gray-text mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque architecto obcaecati.</p>
                  <div className="d-flex mt-3">
                  <div className="d-flex w-75 align-items-center">
                    <img src={person1} className="w-25 rounded-pill" alt="" />
                    <p className="font-sm fw-bold ms-2">Sara</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <del className="gray-text font-sm me-2"><em>100$    </em></del>
                    <h6 className="fw-bold text-color m-0">80$</h6>
                  </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="bg-white rounded-4 p-3 my-4 shadowbox">
                  <div>
                    <img src={Img2} className="w-100 rounded-3" alt="" />
                  </div>
                  <div className="d-flex justify-content-between my-3 gray-text">
                    <div className="d-flex align-items-center font-sm">
                    <i className="fa-solid fa-table-cells-large me-1"></i>
                    <p>Design</p>
                    </div>
                    <div className="d-flex align-items-center font-sm">
                    <i className="fa-regular fa-clock me-1"></i>
                    <p>3 Month</p>
                    </div>
                  </div>
                  <h5 className="fw-bold">AWS Certified Solution Architect</h5>
                  <p className="font-sm gray-text mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque architecto obcaecati.</p>
                  <div className="d-flex mt-3">
                  <div className="d-flex w-75 align-items-center">
                    <img src={person2} className="w-25 rounded-pill" alt="" />
                    <p className="font-sm fw-bold ms-2">Nour</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <del className="gray-text font-sm me-2"><em>100$    </em></del>
                    <h6 className="fw-bold text-color m-0">80$</h6>
                  </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="bg-white rounded-4 p-3 my-4 shadowbox">
                  <div>
                    <img src={Img3} className="w-100 rounded-3" alt="" />
                  </div>
                  <div className="d-flex justify-content-between my-3 gray-text">
                    <div className="d-flex align-items-center font-sm">
                    <i className="fa-solid fa-table-cells-large me-1"></i>
                    <p>Design</p>
                    </div>
                    <div className="d-flex align-items-center font-sm">
                    <i className="fa-regular fa-clock me-1"></i>
                    <p>3 Month</p>
                    </div>
                  </div>
                  <h5 className="fw-bold">AWS Certified Solution Architect</h5>
                  <p className="font-sm gray-text mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque architecto obcaecati.</p>
                  <div className="d-flex mt-3">
                  <div className="d-flex w-75 align-items-center">
                    <img src={person3} className="w-25 rounded-pill" alt="" />
                    <p className="font-sm fw-bold ms-2">Ahmed</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <del className="gray-text font-sm me-2"><em>100$    </em></del>
                    <h6 className="fw-bold text-color m-0">80$</h6>
                  </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="bg-white rounded-4 p-3 my-4 shadowbox">
                  <div>
                    <img src={Img4} className="w-100 rounded-3" alt="" />
                  </div>
                  <div className="d-flex justify-content-between my-3 gray-text">
                    <div className="d-flex align-items-center font-sm">
                    <i className="fa-solid fa-table-cells-large me-1"></i>
                    <p>Design</p>
                    </div>
                    <div className="d-flex align-items-center font-sm">
                    <i className="fa-regular fa-clock me-1"></i>
                    <p>3 Month</p>
                    </div>
                  </div>
                  <h5 className="fw-bold">AWS Certified Solution Architect</h5>
                  <p className="font-sm gray-text mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque architecto obcaecati.</p>
                  <div className="d-flex mt-3">
                  <div className="d-flex w-75 align-items-center">
                    <img src={person1} className="w-25 rounded-pill" alt="" />
                    <p className="font-sm fw-bold ms-2">Salma</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <del className="gray-text font-sm me-2"><em>100$    </em></del>
                    <h6 className="fw-bold text-color m-0">80$</h6>
                  </div>
                  </div>
                </div>
              </div>

             
           
           
            </div>
          </div>
    </>
}


