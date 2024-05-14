import React, { useRef } from "react";
import Style from "./Navbar.module.css";
import logo from "../../../Assets/footerlogo.png";
import img12 from "../../../Assets/img12.jpg";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import DashboardNavbar from "../../DashboardNavbar/DashboardNavbar";
import { useLanguage } from '../../LanguageContext';

export default function Navbar() {
  const location = useLocation();
  const isScreenSmall = useMediaQuery({ minWidth: 0, maxWidth: 768 });

const { language, toggleLanguage } = useLanguage();
const navRef = useRef();

  const handleLanguageToggle = () => {
    toggleLanguage();
  };
  const toggleNav = (e) => {
    navRef.current
      .querySelectorAll("li")
      .forEach((f) => f.classList.remove("active"));
    e.target.closest("li").classList.add("active");
  };
  
  
  return <>
    {location.pathname === '/admin-dashboard' || location.pathname === '/page2' ?
      <> <DashboardNavbar /> </>
      :
      <>

{/* <div className="">
      <nav className={`navbar navbar-expand-lg ${location.pathname === "/home" ? "bg-color text-white" : "bg-white"}`}>
        <div className="container-fluid container">
        <button className={`${Style.languageToggleBtn}`} onClick={handleLanguageToggle}> 
                    {language === "en" ? "العربية" : "English"}
                </button>
          <Link to={"home"}>
            <img src={logo} className=" rounded-5" alt="icon of website"style={{ width: "55px", height: "55px" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav d-flex nav mb-2 mb-lg-0" ref={navRef}>
              <li className="nav-item" onClick={toggleNav}>
                <Link className="nav-link" to={"home"}>
                  Home
                </Link>
              </li>

              <li className="nav-item" onClick={toggleNav}>
                <Link className="nav-link" to={"/courses"}>
                  Courses
                </Link>
              </li>

              <li className="nav-item" onClick={toggleNav}>
                <Link className="nav-link" to={"/career"}>
                  Career
                </Link>
              </li>

              <li className="nav-item" onClick={toggleNav}>
                <Link className="nav-link" to={"/aboutus"}>
                  About Us
                </Link>
              </li>

              <li className="nav-item" onClick={toggleNav}>
                <Link className="nav-link" to={"profile"}>
                  Profile
                </Link>
              </li>

            </ul>

            <ul className="ms-auto pt-3">
            <input
                class="form-control me-5 mx-5 bg-body-secondary rounded-5"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
            </ul>

            <ul className="navbar-nav ms-auto ">
              
              <button className="btn btn-success rounded-5 px-4" style={{border:"1px solid", borderColor:"#fff", backgroundColor:"#008772"}}> 
                <Link
                to={"/"}
                className="text-decoration-none text-black"
                type="button"
              >
                Login
              </Link>
              </button>
              <button className="btn btn-outline-light rounded-5 px-4 mx-2" style={{border:"1px solid", borderColor:"#000"}} >
              <Link
                to={"/signup"}
                className="text-decoration-none text-black"    
                type="button"
              >
                Sign Up
              </Link>
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div> */}














        <div className="container-fluid px-5 mb-5">
          {["/courses", "/quiz", "/profile"].includes(location.pathname) ?
            <>
              <nav className={`navbar navbar-expand-lg fixed-top p-0 ${location.pathname === "/home" ? "bg-color text-white" : "bg-white"}`}>
                <div className="container">
                <button className={`${Style.languageToggleBtn}`} onClick={handleLanguageToggle}> 
                    {language === "en" ? "العربية" : "English"}
                </button>
                  <Link className="navbar-brand" to={"/home"}>
                    <img src={logo} className="rounded-5" alt="logo" style={{ width: "55px", height: "55px" }} />
                  </Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className={`collapse navbar-collapse ${["/courses", "/quiz", "/profile"].includes(location.pathname) ? "justify-content-around" : "justify-content-between"}`} id="navbarSupportedContent">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link to={"/home"} className={`nav-link text-black ${location.pathname === "/home" ? "text-white" : ""}`} href="#">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                <Link className="nav-link text-black" to={'/categories'}>
                  Course Categories
                </Link>
              </li>
              <li className="nav-item">
                        <Link className="nav-link text-black" to={'/courses'}>
                          Courses
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link text-black" to={'/career'}>
                          Career
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link text-black" to={'/profile'}>
                          Profile
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link text-black" to={'/aboutus'}>
                          About Us
                        </Link>
                      </li>
                    </ul>
                    <form className="ps-4" style={{ width: isScreenSmall && ["/courses", "/quiz", "/profile"].includes(location.pathname) ? "100%" : "40%" }}>
                      <div className="position-relative" style={{ width: "80%" }}>
                        <input className="gray-border mx-2 py-1 rounded-5 ps-4 w-100" aria-label="Search" placeholder="Search by course, instructor, etc." />
                        <i className="fa-solid fa-magnifying-glass position-absolute ms-3 gray-text small-font" style={{ top: "50%", transform: "translateY(-50%)" }}></i>
                      </div>
                    </form>
                  </div>
                </div>
              </nav>
            </>
            :
            <>
              <nav className={`navbar navbar-expand-lg fixed-top p-0 ${location.pathname === "/home" ? "bg-color text-white" : "bg-white"}`}>
                <div className="container">
		            <button className={`${Style.languageToggleBtn}`} onClick={handleLanguageToggle}>
            		  {language === "en" ? "العربية" : "English"}
                </button>
                  <Link className="navbar-brand" to={"/home"}>
                    <img src={logo} className="rounded-5" alt="logo" style={{ width: "55px", height: "55px" }} />
                  </Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link to={"/home"} className={`nav-link text-black ${location.pathname === "/home" ? "text-white" : ""}`} href="#">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                <Link className="nav-link text-black" to={'/categories'}>
                  Course Categories
                </Link>
              </li>
              <li className="nav-item">
                        <Link className="nav-link text-black" to={'/courses'}>
                          Courses
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link text-black" to={'/career'}>
                          Career
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link text-black" to={'/profile'}>
                          Profile
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link text-black" to={'/aboutus'}>
                          About Us
                        </Link>
                      </li>
                    </ul>
                    <form className="ps-4" style={{ width: isScreenSmall ? "100%" : "40%" }}>
                      <div className="position-relative" style={{ width: "80%" }}>
                        <input className="gray-border mx-2 py-1 rounded-5 ps-4 w-100" aria-label="Search" placeholder="Search by course, instructor, etc." />
                        <i className="fa-solid fa-magnifying-glass position-absolute ms-3 gray-text small-font" style={{ top: "50%", transform: "translateY(-50%)" }}></i>
                      </div>
                    </form>

                    <div className={`${isScreenSmall ? "d-flex justify-content-center my-3" : ""}`}>
                      {location.pathname === "/library" ? (
                        <div style={{ height: "100px" }} className="d-flex align-items-center px-5">
                          <img src={img12} style={{ height: "50px" }} className="rounded-pill" alt="" />
                          <p className="font-sm fw-bold mx-2">Lina</p>
                          <i className="fa-solid fa-angle-down"></i>
                        </div>
                      ) : (
                        <>
                          <Link to={"/"} className={`btn mx-2 rounded-5 border-white border-2 text-color me-4 px-4 py-1 btn-sm ${location.pathname !== "/signup" ? "bg-color text-white" : location.pathname === "/home" ? "text-white border-white" : ""}`} type="button">
                            Login
                          </Link>
                          <Link to={"/signup"} className={`btn rounded-5 text-color px-4 py-1 btn-sm main-border ${location.pathname === "/signup" ? "bg-color text-white" : location.pathname === "/home" ? "bg-white" : ""}`} type="button">
                            Sign Up
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </nav>
            </>
          }
        </div>
      </>
    }
  </>
}
