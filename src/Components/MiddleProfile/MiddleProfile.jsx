import React from "react";
import Style from "./MiddleProfile.module.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { FaRegClipboard } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { PiWaveSawtoothBold } from "react-icons/pi";
import img12 from "../../Assets/img12.jpg";
import img11 from "../../Assets/man1 (1).jpg";
import { useMediaQuery } from "react-responsive";
import GaugeComponent from 'react-gauge-component'

const data = [
  {
    name: "Jan",
    Exams: 4000,
    Study: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    Exams: 3000,
    Study: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    Exams: 2000,
    Study: 5800,
    amt: 2290,
  },
  {
    name: "Apr",
    Exams: 2780,
    Study: 3908,
    amt: 2000,
  },
  {
    name: "May",
    Exams: 1890,
    Study: 1500,
    amt: 2181,
  },
];

export default function MiddleProfile() {
    
  const isScreenSmall = useMediaQuery({ minWidth: 0, maxWidth: 768 });
  const formatYAxis = (tick, index) => `${index * 20}Hr`;

  return (
    <>
    <div className={`d-flex justify-content-between align-items-center ${isScreenSmall ? "flex-column" : ""}`}>
        <div className="ps-4">
            <div className={`d-flex align-items-center ${isScreenSmall ? "justify-content-center mt-3" : ""}`}>
                <h4 className="fw-bold me-2">Hello Maietry</h4>
                <p style={{ display: "inline" }}>&#128075;</p>
            </div>
            <p className="fw-bold gray-text font-sm">Let's learn something new today</p>
        </div>
        <div className="d-flex align-items-center justify-content-between">
            <input type="text" style={{ width: "300px" }} className="ps-2 border rounded-2" placeholder="Search from courses..." />
            
        <div className="d-flex border border-1 p-1 rounded-2"><i class="fa-regular fa-bell position-relative fs-5"><div className="p-1 bg-danger rounded-pill position-absolute top-0 end-0" style={{ width: "3px" }}></div></i></div>
        </div>
    </div>

    <div className={`row justify-content-evenly my-3 ${isScreenSmall ? "gy-3" : ""}`}>
        <div className={`col-md-3 py-4 px-1 rounded-4 ${isScreenSmall ? " w-75" : ""}`} style={{ backgroundColor: "#E1E2F6" }}>
            <div className="bg-white rounded-pill d-flex align-items-center justify-content-center" style={{ width: "30px", height: "30px" }}><i class="fa-solid fa-code font-sm" style={{ color: "#5855A9" }}></i></div>
            <p className={`fw-bold my-3 ${isScreenSmall ? "ms-2" : "text-center"}`}>Basic : HTML and CSS</p>
            <div className="d-flex py-1 rounded-2 justify-content-evenly" style={{ backgroundColor: "#FCF9FF" }}>
                <div className="d-flex align-items-center"><HiOutlineBookOpen className="small-font me-1" /><p className="font-sm fw-bold">22</p></div>
                <div className="d-flex align-items-center border-end border-start px-3"><FaRegClipboard className="small-font me-1" /><p className="font-sm fw-bold">8</p></div>
                <div className="d-flex align-items-center"><IoPeople className="small-font me-1" /><p className="font-sm fw-bold">99</p></div>
            </div>
        </div>
        <div className={`col-md-3 py-4 px-1 rounded-4 ${isScreenSmall ? " w-75" : ""}`} style={{ backgroundColor: "#F8EFE2" }}>
    <div className="bg-white rounded-pill d-flex align-items-center justify-content-center" style={{ width: "30px", height: "30px" }}>
        <i class="fa-solid fa-share-nodes" style={{ color: "#FF965C" }}></i>
    </div>
    <p className="fw-bold my-3 mx-2">Branding Design</p>
    <div className="d-flex py-1 rounded-2 justify-content-evenly" style={{ backgroundColor: "#FCF9FF" }}>
        <div className="d-flex align-items-center">
            <HiOutlineBookOpen className="small-font me-1" /><p className="font-sm fw-bold">22</p>
        </div>
        <div className="d-flex align-items-center border-end border-start px-3">
            <FaRegClipboard className="small-font me-1" /><p className="font-sm fw-bold">8</p>
        </div>
        <div className="d-flex align-items-center">
            <IoPeople className="small-font me-1" /><p className="font-sm fw-bold">99</p>
        </div>
    </div>
</div>
<div className={`col-md-3 py-4 px-1 rounded-4 ${isScreenSmall ? " w-75" : ""}`} style={{ backgroundColor: "#EFF7E2" }}>
    <div className="bg-white rounded-pill d-flex align-items-center justify-content-center" style={{ width: "30px", height: "30px" }}>
        <PiWaveSawtoothBold style={{ color: "#559E3B" }} />
    </div>
    <p className="fw-bold my-3 mx-2">Motion Design</p>
    <div className="d-flex py-1 rounded-2 justify-content-evenly" style={{ backgroundColor: "#FCF9FF" }}>
        <div className="d-flex align-items-center">
            <HiOutlineBookOpen className="small-font me-1" /><p className="font-sm fw-bold">22</p>
        </div>
        <div className="d-flex align-items-center border-end border-start px-3">
            <FaRegClipboard className="small-font me-1" /><p className="font-sm fw-bold">8</p>
        </div>
        <div className="d-flex align-items-center">
            <IoPeople className="small-font me-1" /><p className="font-sm fw-bold">99</p>
        </div>
    </div>
</div>


    </div>

    <div className={`row justify-content-around ${isScreenSmall ? "mt-5" : ""}`}>
        <div className={`col-md-6 ${isScreenSmall ? "w-75" : ""}`}>
            <p className="fw-bold">Hours Spent</p>
            <div className="border p-3 rounded-4">
                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center"><div className="rounded-1 p-1 me-1" style={{ width: "13px", height: "13px", backgroundColor: "#A9834F" }}></div><p className="gray-text fw-bold small-font">Study</p></div>
                    <div className="d-flex align-items-center ms-4"><div className="rounded-1 p-1 me-1" style={{ width: "13px", height: "13px", backgroundColor: "#F8EFE2" }}></div><p className="gray-text small-font fw-bold">Exams</p></div>
                </div>
                <BarChart width={300} height={200} className="w-100" data={data} margin={{ top: 20, right: 10, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="5 4" />
                    <XAxis dataKey="name" className="font-xs" />
                    <YAxis tickFormatter={formatYAxis} className="font-xs" />
                    <Bar dataKey="Study" stackId="a" fill="#A9834F" />
                    <Bar dataKey="Exams" stackId="a" fill="#F8EFE2" />
                </BarChart>
            </div>
        </div>
        <div className={`col-md-5 ${isScreenSmall ? "w-75 mt-3" : ""}`}>
            <p className="fw-bold">Perfomance</p>
            <div className="border p-3 rounded-4">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center"><div className="rounded-1 p-1 me-1" style={{ width: "13px", height: "13px", backgroundColor: "#45A8A3" }}></div><p className="fw-bold small-font">Point Progress</p></div>
                    <div className="d-flex align-items-center small-font fw-bold text-black bg-dark-subtle p-2 rounded-3"><p>Monthly</p><i class="fa-solid fa-chevron-down ps-1"></i></div>
                </div>
              <div>
              <GaugeComponent className="w-75 mx-auto"
                    value={70}
                    type="radial"
                    labels={{
                        valueLabel:{
                            hide:true,
                        },
                        tickLabels: {
                        type: "inner",
                        ticks: [
                            { value: 20 },
                            { value: 40 },
                            { value: 60 },
                            { value: 80 },
                            { value: 100 }
                        ],
                        defaultTickValueConfig:{
                            hide:true
                        }
                        }
                    }}
                    arc={{
                        colorArray: ['#037C6A','#F8EFE2'],
                        subArcs: [{limit: 70}, {limit: 100}],
                        padding: 0.00,
                        width: 0.1
                    }}
                    pointer={{
                        color:'#A9834E',
                        length:0.6,
                        elastic: true,
                        animationDelay: 0
                    }}
             />
              </div>
                <div className="font-sm text-center"><p className="fw-bold gray-text">Your point : <span className="text-dark">8.966</span></p></div>
            </div>
        </div>
    </div>

    <div className={`row ${isScreenSmall ? "pt-3" : "p-5"}`}>
        <p className="p-0 fw-bold my-2">Leader Board</p>
        <table class="table table-borderless ">
            <thead className="text-center">
                <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">Name</th>
                    <th scope="col">Course</th>
                    <th scope="col">Hours</th>
                    <th scope="col">Points</th>
                </tr>
            </thead>
            <tbody className="text-center">
                <tr className="fw-bold">
                    <th scope="row" className="d-flex align-items-center justify-content-center"><p>1</p><i class="fa-solid fa-sort-up pt-1 ms-2 text-color"></i></th>
                    <td><div className="d-flex align-items-center justify-content-center"><img src={img12} className="rounded-pill mx-2" style={{ width: "30px", height: "30px" }} alt="" /><p className="fw-bold font-sm">Charlie Rawal</p></div></td>
                    <td>53</td><td>250</td><td className="text-color fw-bold">13.450</td>
                </tr>
                <tr className="fw-bold">
                    <th scope="row" className="d-flex justify-content-center">2<i class="fa-solid fa-sort-down ms-1" style={{ color: "#A9834F" }}></i></th>
                    <td><div className="d-flex align-items-center justify-content-center"><img src={img11} className="rounded-pill mx-2" style={{ width: "30px", height: "30px" }} alt="" /><p className="fw-bold font-sm">Ariana Agrawl</p></div></td>
                    <td>88</td><td>212</td><td className="text-color">10.333</td>
                </tr>
            </tbody>
        </table>
    </div>
</>

  );
}
