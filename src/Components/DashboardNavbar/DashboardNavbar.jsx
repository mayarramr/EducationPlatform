import React from 'react'
import Style from './DashboardNavbar.module.css'
import { RiHomeLine } from "react-icons/ri";
import logo from '../../Assets/footerlogo.png'
import { IoNotificationsOutline ,IoSettingsOutline, IoSearchOutline } from "react-icons/io5";
import { RiUserSettingsLine ,RiBox3Line } from "react-icons/ri";
import { MdInsertChartOutlined, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaShareNodes ,FaBlogger ,FaRegCircleUser } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { CiViewBoard } from "react-icons/ci";
import { Link } from 'react-router-dom';
const buttonsData = [
    { icon: <RiHomeLine className="text-white fs-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" /> },
    { icon: <IoNotificationsOutline className="textGray fs-3" /> },
    { icon: <RiUserSettingsLine className="textGray fs-3" /> },
    { icon: <IoSettingsOutline className="textGray fs-3" /> },
]
const renderButtons = () => {
    return buttonsData.map((button, index) => (
        <Link>
            <button key={index} className={`${index === 0 ? "bg-color" : ""} border-0 rounded-3 d-flex align-items-center justify-content-center p-1`}>
                {button.icon}
            </button>
        </Link>
    ))
}

const sideNavData = [
    { icon: <MdInsertChartOutlined />, title: "Dashboard", arrowIcon: <MdOutlineKeyboardArrowDown /> },
    { icon: <CiViewBoard />, title: "Courses" },
    { icon: <FaRegCircleUser />, title: "Profile" },
    { icon: <RxDashboard />, title: "Career" },
    { icon: <RiBox3Line />, title: "Home" },
    { icon: <MdInsertChartOutlined />, title: "Brand" },
    { icon: <FaBlogger />, title: "Blog" },
    { icon: <FaShareNodes />, title: "Marketing" },
]

const renderSideNavData = () => {
    return sideNavData.map((data, index) => (
        <div className={`p-2 rounded-3 fs-5 d-flex align-items-center my-2 ${index === 0 ? "bg-color text-white" : ''}`}>
            <div className="d-flex align-items-center">
                {data.icon}
                <p className="mx-2">{data.title}</p>
            </div>
            <div className="ms-auto">
                {data.arrowIcon}
            </div>
        </div>
    ))
}

export default function Navbar() {
    return <>
        <div className="position-fixed border-end top-0 bottom-0 start-0 index bg-white" style={{ width: "115px" }}>
            <div className="d-flex flex-column justify-content-around align-items-center h-50">
                <img src={logo} className="rounded-pill w-75" alt="" />
                {renderButtons()}
            </div>
        </div>
        <div className="offcanvas offcanvas-start ms-5 ps-3" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="w-75 mx-auto">
                <div className="offcanvas-header ">
                    <form className="d-flex w-100" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="border-0 rounded-3 d-flex align-items-center justify-content-center p-1 px-3 bg-color" ><IoSearchOutline className="text-white fs-5" /></button>
                    </form>
                </div>
                <div className="offcanvas-body">
                    {renderSideNavData()}
                </div>
            </div>
        </div>
    </>
}


