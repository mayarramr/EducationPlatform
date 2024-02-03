import React from 'react'
import Style from './LeftProfile.module.css'
import { HiSquares2X2 } from "react-icons/hi2";
import { FaRegClipboard , FaChartPie , FaFileMedical , FaInbox } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import logo from '../../Assets/logoo.png'

export default function LeftProfile() {
    return <>
                <div className=" text-center p-4 rounded-start-4 pb-5" style={{backgroundColor:'#F5F7F9'}}>
                    <img src={logo} className="" style={{width:'50px'}} alt="" />
                    <div className="bg-black text-white rounded-2 d-flex align-items-center ps-2 my-2">
                        <HiSquares2X2 />
                        <p className="py-2 px-1 m-0">Overview</p>
                    </div>
                    <div className="rounded-2 d-flex align-items-center ps-2">
                        <FaRegClipboard />
                        <p className="py-2 px-1 text-black m-0">Assignment</p>
                    </div>
                    <div className="rounded-2 d-flex align-items-center ps-2 my-2">
                        <FaChartPie />
                    <p className="py-2 px-1 text-black m-0">Reports</p>
                    <div className="rounded-pill small-font fw-bold d-flex align-items-center justify-content-center ms-2" style={{backgroundColor:'#FAD0CE' , width:'25px' , height:'25px'}}>
                        <p>12</p>
                    </div>
                    </div>
                    <div className="rounded-2 d-flex align-items-center ps-2">
                        <FaFileMedical />
                    <p className="py-2 px-1 text-black m-0">File Storage</p>
                    </div>
                    <div className="rounded-2 d-flex align-items-center ps-2 my-2">
                        <FaInbox />
                    <p className="py-2 px-1 text-black m-0">Inbox</p>
                    <div className="rounded-pill small-font fw-bold d-flex align-items-center justify-content-center ms-4" style={{backgroundColor:'#FAD0CE' , width:'25px' , height:'25px'}}>
                        <p>7</p>
                    </div>
                    </div>
                    <div className="rounded-2 d-flex align-items-center ps-2 pb-4">
                        <IoSettingsOutline />
                    <p className="py-2 px-1 text-black m-0">Settings</p>
                    </div>
                </div>
    </>
}


