import React from 'react'
import Style from './Dashboard.module.css'
import { PieChart, Pie, Cell } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
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
import laptop from '../../Assets/choice3.jpg'
import { Link } from 'react-router-dom';


const data = [
    { name: 'Group A', value: 100 },
    { name: 'Group B', value: 700 },
    { name: 'Group C', value: 200 },
];
const COLORS = ['#37E89E', '#039B6F', '#FFC000'];

const formatYAxis = (tick, index) => `${index * 3}k`;

const Bardata = [
    { name: 'May 04', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'May 05', uv: 9000, pv: 5000, amt: 2210 },
    { name: 'May 06', uv: 4000, pv: 3800, amt: 2290 },
    { name: 'May 07', uv: 7000, pv: 3200, amt: 2290 },
    { name: 'May 08', uv: 5600, pv: 1800, amt: 2290 },
    { name: 'May 09', uv: 5300, pv: 4000, amt: 2290 },
    { name: 'May 10', uv: 7000, pv: 4800, amt: 2290 },
    { name: 'May 11', uv: 8000, pv: 6200, amt: 2290 },
    { name: 'May 12', uv: 6000, pv: 4200, amt: 2290 },
    { name: 'May 13', uv: 8200, pv: 5200, amt: 2290 }
];

export default function Dashboard() {
    return <>
        <div className="row">
            <div className="col-md-1">
                <DashboardNavBar />
            </div>
            <div className={`${Style.Dashboard} col-md-11 px-5 d-flex flex-column `}>
                <div className="d-flex pb-5 pt-3 justify-content-between">
                    <div className="d-flex align-items-end">
                        <h1 className="m-0">Dashboard</h1>
                        <p><span className="gray-text">Dashboard /</span> Promotion</p>

                    </div>
                    <div className="d-flex align-items-center">
                        <Link to="/admin-dashboard">
                            <div className="rounded-pill main-border mx-2 d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>
                                <p>1</p>
                            </div>
                        </Link>
                        
                        <Link to="/page2">
                            <div className="rounded-pill main-border d-flex align-items-center justify-content-center text-white bg-color" style={{ width: "40px", height: "40px" }}>
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
                    <div className="col-md-9 px-4">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="blue-border p-3 rounded-4 bg-white">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5>Sale by Category</h5>
                                        <HiOutlineDotsHorizontal className="fs-4" />
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <PieChart width={180} height={200} >
                                            <Pie
                                                data={data}
                                                cx={80}
                                                cy={100}
                                                innerRadius={65}
                                                outerRadius={80}
                                                fill="#8884d8"
                                                paddingAngle={0}
                                                dataKey="value"
                                            >
                                                {data.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                        </PieChart>
                                        <div>
                                            <div className="d-flex align-items-center font-sm">
                                                <FaSquare style={{ color: "#039B6F" }} className="fs-5" />
                                                <p>courses</p>
                                            </div>
                                            <div className="d-flex align-items-center font-sm my-3">
                                                <FaSquare style={{ color: "#FFC000" }} className="fs-5" />
                                                <p>certificate fees</p>
                                            </div>
                                            <div className="d-flex align-items-center font-sm">
                                                <FaSquare style={{ color: "#37E89E" }} className="fs-5" />
                                                <p>advertisment</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h5 className="text-color">Total sale</h5>
                                            <h5>250</h5>
                                        </div>
                                        <div>
                                            <h5 className="text-color">Total profit</h5>
                                            <h5>$ 459.98</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blue-border bg-white rounded-4 p-3 d-flex flex-column justify-content-between h-100">
                                    <h4>Total courses</h4>
                                    <div className="d-flex flex-column align-items-center">
                                        <LuClipboardList style={{ fontSize: "100px" }} />
                                        <h3 style={{ color: "#37E89E" }}>79</h3>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <p className="text-center text-color">60% Target</p>
                                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar" style={{ width: "60%", backgroundColor: "#7ED956" }}></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blue-border bg-white rounded-4 p-3 d-flex flex-column justify-content-between h-100">
                                    <h4>Total learners</h4>
                                    <div className="d-flex flex-column align-items-center">
                                        <LuUsers style={{ fontSize: "100px" }} />
                                        <h3 style={{ color: "#37E89E" }}>79</h3>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <p className="text-center text-color">60% Target</p>
                                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar" style={{ width: "60%", backgroundColor: "#7ED956" }}></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-12 d-flex align-items-center blue-border rounded-4 my-3 me-2 py-4 bg-white">
                                <div className="d-flex flex-column">
                                    <div className="d-flex">
                                        <h4>Statistics</h4>
                                    </div>
                                    <div className="my-5">
                                        <p className="textLightGreen">Revenue</p>
                                        <h1 className="fw-bold">$12,598</h1>
                                    </div>
                                    <div>
                                        <p className="textLightGreen">Income</p>
                                        <h1 className="fw-bold">$7,285</h1>
                                    </div>
                                </div>
                                <ResponsiveContainer width="100%" height="90%">
                                    <BarChart
                                        width={200}
                                        height={100}
                                        data={Bardata}
                                        margin={{
                                            top: 0,
                                            bottom: 0,
                                        }}
                                    >
                                        <CartesianGrid />
                                        <XAxis dataKey="name" stroke="#04BF89" />
                                        <YAxis tickFormatter={formatYAxis} />
                                        <Tooltip />
                                        <Bar dataKey="pv" fill="#FFC000" />
                                        <Bar dataKey="uv" fill="#37E89E" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex flex-column justify-content-between">
                        <div className="row blue-border rounded-4 py-3 bg-white h-100">
                            <div className="col-md-6 d-flex flex-column justify-content-evenly">
                                <h3 className="fw-bold">Average Revenue</h3>
                                <h4 className="fs-3">$2,075</h4>
                                <div className="py-1 w-75 rounded-pill d-flex align-items-center justify-content-center" style={{ border: "2px solid #37E89E" }}>
                                    <h5 className="m-0">+ 25</h5>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 d-flex flex-column justify-content-around align-items-end">
                                <FaArrowTrendUp className="fs-4 mx-3" style={{ color: "#37E89E" }} />
                                <div className="bg-color rounded-pill d-flex align-items-center justify-content-center text-white" style={{ width: "160px", height: "160px" }}>
                                    <FaHandHoldingUsd className="display-1" />
                                </div>
                            </div>
                        </div>
                        <div className="row blue-border rounded-4 bg-white p-3 my-3">
                            <div className="d-flex align-items-center justify-content-between">
                                <h5 className="m-0">Most viewed courses</h5>
                                <div className="d-flex align-items-center">
                                    <IoIosArrowBack />
                                    <IoIosArrowForward />
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <img src={laptop} className="w-100 rounded-4 my-4" alt="" />
                            </div>
                            <div>
                                <div>
                                    <p className="text-color">Title</p>
                                    <p>Frontend Advanced Course</p>
                                </div>
                                <div className="d-flex justify-content-between my-3">
                                    <div>
                                        <p className="text-color">Sold</p>
                                        <p>205</p>
                                    </div>
                                    <div>
                                        <p className="text-color">On Going</p>
                                        <p>52</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
}


