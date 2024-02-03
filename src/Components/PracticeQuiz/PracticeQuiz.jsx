import React from 'react'
import Style from './PracticeQuiz.module.css'
import { Link } from 'react-router-dom'
import { useMediaQuery } from "react-responsive";

export default function PracticeQuiz() {
  const isScreenSmall = useMediaQuery({ minWidth: 0, maxWidth: 768 });
    return <>
    <div className="row mb-5">
        <div style={{width : isScreenSmall ? '40px' : ''}} className="col-md-2 bg-color d-flex align-items-center justify-content-center text-white p-2">
       
        <i class="fa-solid fa-arrow-left-long fs-5"></i>
     
        </div>
    </div>
    <div>
        
    </div>
   <div className="row">
    <h5 className="fw-bold m-0">Change Simplification</h5>
  <div className="row gy-2 m-0">
    <div className="col-md-12 p-0">
    <div className="bg-color text-white p-2 rounded-3">
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs darkblue">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#E5DACA'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#E2F0FF'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#FAD0CE'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs">30 min</p>
       </div>
    </div>
    </div>
  </div>
   </div>

   <div className="row my-5">
    <h5 className="fw-bold m-0">Practice Quiz</h5>
  <div className="row gy-2 m-0">
  <Link to={'/quiz'} className="p-0">
  <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#E2F0FF'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs darkblue">30 min</p>
       </div>
    </div>
    </div>
    </Link>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#E5DACA'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#E2F0FF'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#FAD0CE'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#E2F0FF'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs darkblue">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#E5DACA'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#E2F0FF'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#FAD0CE'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#E2F0FF'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs darkblue">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#E5DACA'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#E2F0FF'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#FAD0CE'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs">30 min</p>
       </div>
    </div>
    </div>
    
   
  </div>
   </div>
   <div className="row my-5">
    <h5 className="fw-bold m-0">Practice Quiz</h5>
  <div className="row gy-2 m-0">
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#E2F0FF'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs darkblue">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#E5DACA'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#E2F0FF'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#FAD0CE'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#E2F0FF'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs darkblue">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#E5DACA'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#E2F0FF'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#FAD0CE'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#E2F0FF'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs darkblue">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#E5DACA'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#E2F0FF'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#FAD0CE'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#E2F0FF'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs darkblue">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#E5DACA'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#E2F0FF'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#FAD0CE'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#E2F0FF'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs darkblue">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#E5DACA'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#E2F0FF'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs">30 min</p>
       </div>
    </div>
    </div>
    <div className="col-md-12 p-0">
    <div className="darkblue p-2 rounded-3" style={{backgroundColor:'#FAD0CE'}}>
       <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex font-xs align-items-center my-1">
        <i className="fa-solid fa-book-open me-2"></i>
       <p>Lessson 01 : Introduction about XD</p>
        </div>
        <p className="font-xs">30 min</p>
       </div>
    </div>
    </div>
    
   
  </div>
   </div>
    </>
}


