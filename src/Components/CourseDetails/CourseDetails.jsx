import React from 'react'
import Style from './CourseDetails.module.css'
import courseimg from '../../Assets/courseimg.jpg'
import mid from '../../Assets/mid.jpg'
import img1 from '../../Assets/choice4.png'
import Img3 from '../../Assets/choice1.jpg'
import person1 from '../../Assets/img12.jpg'
import person2 from '../../Assets/man2.jpg'
import person3 from '../../Assets/man1 (1).jpg'
import { useMediaQuery } from "react-responsive";



export default function CourseDetails() {
  
  const isScreenSmall = useMediaQuery({ minWidth: 0, maxWidth: 768 });
    return <>
    <div className="bg-color text-white p-3">
    <h2>Learn about Adobe XD & Prototyping</h2>
    <p>Introduction about XD</p>
    <div className="d-flex small-font align-items-center justify-content-between">
    <p className=" text-gold">Try course reader now</p>
   <div className="d-flex align-items-center">
   <i className="fa-regular fa-clock me-1"></i>
   <p>1 hour</p>
   </div>
    </div>
    </div>

    <div className=" p-3">
        <div className="position-relative mb-5">
        <img src={courseimg} className="w-100 rounded-4" alt="" />
        <div className={`${Style.layer} rounded-bottom-4 position-absolute bottom-0 start-0 end-0 bg-black opacity-75`}>
       <div className="position-relative ">
       <div className="progress mt-3 mx-3" style={{height:'6px'}} role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar bg-success" style={{width: '25%'}}></div>
        </div>
        <div className={`position-absolute rounded-pill bg-color ${Style.player}`}></div>
       </div>
<div className="d-flex align-items-center pt-2 text-white justify-content-between px-4">
    <div className="d-flex align-items-center">
<i className="fa-solid fa-play"></i>
<p className="ms-2 small-font">05:00 / 03:26</p>
    </div>
    <i className="fa-solid fa-expand small-font"></i>
</div>
        </div>
        </div>

       <div>
       <div>
    <h5 className="fw-bold">O6 Super Coins on the way</h5>
    <p className="my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis dolores sed sapiente minus nam porro modi reiciendis saepe commodi, ut ducimus maiores possimus, perspiciatis excepturi ratione sint molestiae omnis beatae quibusdam exercitationem suscipit aliquid! Eum magni similique ullam quasi dolor!</p>
</div>
        <div>
    <h5 className="fw-bold">Who is course this for ?</h5>
    <p className="my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis dolores sed sapiente minus nam porro modi reiciendis saepe commodi, ut ducimus maiores possimus, perspiciatis excepturi ratione sint molestiae omnis beatae quibusdam exercitationem suscipit aliquid! Eum magni similique ullam quasi dolor!</p>
</div>
        <div>
    <h5 className="fw-bold">Achivable</h5>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, accusamus alias numquam facilis doloribus modi aperiam repudiandae. Hic, repudiandae dolore nemo quam eos excepturi error reprehenderit veniam numquam! Corrupti odit quia, est, minima facere quas eaque fugiat doloribus suscipit veritatis consequuntur perspiciatis? Enim facilis voluptatem vel delectus quo, ipsa esse harum odit perferendis aliquid nemo. Quam, sit nostrum? Nostrum ullam libero fugiat optio deleniti, ea consequuntur aspernatur atque facilis voluptatum doloribus tempora incidunt debitis in voluptate ad delectus voluptates maiores?</p>
 </div>
       </div>

       <div className="mt-5 p-4 rounded-4" style={{backgroundColor:'#E1D8CA'}}>
      <div className={`d-flex ${isScreenSmall ? "w-75 justify-content-evenly" : "w-25 justify-content-evenly "}`}>
      <img src={mid} className={`${isScreenSmall ? "w-25" : "w-25"}`} alt="" />
      <div className={`fw-bold ${isScreenSmall? " font-sm" : ""}`}>
        <p>Broklin Simons</p>
        <div className="d-flex" style={{color:'#AF8C5C'}}>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>

        </div>
      </div>
      </div>
      <p className="pt-3 ps-3 gray-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit delectus veritatis eos sequi, fugiat ex tenetur fuga quae repellat iure id aut dignissimos aliquid autem?</p>
       </div>

  <div className="d-flex align-items-center pt-5 py-3 justify-content-between">
    <div><h5 className="fw-bold">Students also bought</h5></div>
  <div className="d-flex justify-content-end">
              <div
                className="rounded-1 mx-3 p-2 d-flex align-items-center justify-content-center"
                style={{ backgroundColor: "#94d3ca" }}
              >
                <i className="m-1 font-sm text-white fa-solid fa-angle-left"></i>
              </div>
              <div className="rounded-1 bg-color p-2 d-flex align-items-center justify-content-center">
                <i className="m-1 font-sm text-white fa-solid fa-angle-right"></i>
              </div>
            </div>
  </div>
  <div className="row mb-5">
            <div className="col-md-4">
                <div className="bg-white rounded-4 p-3 my-4 shadowbox">
                  <div>
                    <img src={img1} className="w-100 rounded-3" alt="" />
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

              <div className="col-md-4">
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

              <div className="col-md-4">
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
            </div>
    </div>



    </>
}


