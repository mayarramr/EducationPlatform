import React from 'react'
import styles from './Dashboard.module.css'
import { PieChart, Pie, Cell } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,Sankey, ResponsiveContainer } from 'recharts';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import DashboardNavBar from '../DashboardNavbar/DashboardNavbar'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaSquare } from "react-icons/fa6";
import { LuClipboardList } from "react-icons/lu";
import { LiaClipboardSolid } from "react-icons/lia";
import { LuUsers } from "react-icons/lu";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import MixedChart from './MixedChart';
import { Link } from 'react-router-dom';
import SankeyChart from './SankeyChart';
import Map from './Map';
import CoursesbyStatus from './CoursesbyStatus';
import CourseCard from './CourseCard';
import Chart from './CylindricalChart';


export default function Page2(){
   
    const data = {
        nodes: [
          { name: 'Courses Viewed' },
          { name: 'Checkout' },
          { name: 'Ongoing' },
          { name: 'New Visitors' },
        ],
        links: [
          { source: 0, target: 1, value: 20 },
          { source: 0, target: 2, value: 15 },
          { source: 1, target: 3, value: 10 },
          { source: 2, target: 3, value: 5 },
        ],
      };
    const courses = [
        { name: "Programming", studentCount: 1580 },
        { name: "AI", studentCount: 850 },
        { name: "UI/UX", studentCount: 630 },
        { name: "Business", studentCount: 500 },
        
    ];
   
    const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return <>
        <div className="row">
            <div className="col-md-1">
                <DashboardNavBar />
            </div>
            <div className={`${styles.Dashboard} col-md-11 px-5 d-flex flex-column `}>
            <div className="d-flex pb-5 pt-3 justify-content-between">
                    <div className="d-flex align-items-end">
                        <h1 className="m-0">Dashboard</h1>
                        <p><span className="gray-text">Dashboard /</span> Promotion</p>

                    </div>
                    <div className="d-flex align-items-center">
                        <Link to="/admin-dashboard">
                            <div className="rounded-pill main-border d-flex align-items-center justify-content-center text-white bg-color" style={{ width: "40px", height: "40px" }}>
                                <p>1</p>
                            </div>
                        </Link>
                        
                        <Link to="/page2">
                            <div className="rounded-pill main-border mx-2 d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>
                                <p>2</p>
                            </div>
                        </Link>
                        <div className="d-flex align-items-center blue-border text-color rounded-3 py-2 px-3 mx-3 bg-white">
                            <p>May 04, 24 - May 28, 24 EGY</p>
                            <MdOutlineKeyboardArrowDown />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 px-4">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="blue-border p-3 rounded-4 bg-white">
                                    
                                     <h5 className="" style={{color:'1E4243',fontWeight: '500', height:'134px'}}>Sales Status</h5>
                                     <div className="d-flex justify-content-center align-items-center">
                                            <MixedChart  />
                                     </div>
                                    
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="blue-border p-3 rounded-4 bg-white">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 style={{color:'1E4243',fontWeight: '500'}}>Sales Funnel</h5>
                                        <SankeyChart width={800} height={400} data={data} />
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ height: '500px' }}>
                            <div className="col-md-5" >
                                <div className="blue-border p-3 rounded-4 bg-white mt-3" style={{ height: '300px' }}>
                                    
                                        <h5 className='mb-3' style={{color:'1E4243',fontWeight: '500'}}>Courses by ategory</h5> 
                                        <div className="d-flex justify-content-center" >
                                        <CourseCard courses={courses} />
                                        </div>
                                         
                                    
                                </div>
                            </div>
                            <div className="col-md-7">
                            <div className="blue-border p-3 rounded-4 bg-white mt-3" style={{ height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                <h5 style={{ color: '#1E4243', fontWeight: '500', marginBottom: 'auto' }}>Courses Status per Day</h5>
                                <div style={{ display: 'flex', justifyContent: 'space-between',marginLeft:'90px' }}>
                                    {/* First Progress Bar */}
                                    <div className={`progress w-25 ${styles["rotate-90"]}`} >
                                        <div className="progress-bar " role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "62%", backgroundColor: "#37E89E" }}></div>
                                    </div>
                                    
                                    {/* Second Progress Bar */}
                                    <div className={`progress w-25 ${styles["rotate-90"]}`}>
                                        <div className="progress-bar w-50" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%", backgroundColor: "#37E89E" }}></div>
                                    </div>
                                    {/* Third Progress Bar */}
                                    <div className={`progress w-25 ${styles["rotate-90"]}`}>
                                        <div className="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "88%", backgroundColor: "#37E89E" }}></div>
                                    </div>
                                    {/* Fourth Progress Bar */}
                                    <div className={`progress w-25 ${styles["rotate-90"]}`}>
                                        <div className="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%", backgroundColor: "#37E89E" }}></div>
                                    </div>
                                    {/* Fifth Progress Bar */}
                                    <div className={`progress w-25 ${styles["rotate-90"]}`}>
                                        <div className="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "74%", backgroundColor: "#37E89E" }}></div>
                                    </div>
                                    {/* Sixth Progress Bar */}
                                    <div className={`progress w-25 ${styles["rotate-90"]}`}>
                                        <div className="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "5%", backgroundColor: "#37E89E" }}></div>
                                    </div>
                                    {/* Seventh Progress Bar */}
                                    <div className={`progress w-25 ${styles["rotate-90"]}`}>
                                        <div className="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%", backgroundColor: "#37E89E" }}></div>
                                    </div>
                                </div>
                                <div className={`d-flex justify-content-between align-items-center ${styles["weekdays-container"]}`}>
                                    {weekdays.map((day, index) => (
                                        <span key={index} className="weekday">{day}</span>
                                    ))}
                                </div>
                            </div>
                        </div>


                        </div>
                        <div className="row justify-content-between my-3">
                            <div className="col-md-5">
                                <CoursesbyStatus />
                            </div>
                            <div className="col-md-7">
                               <Map />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}