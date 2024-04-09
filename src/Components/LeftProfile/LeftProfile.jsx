import React from 'react'
import Style from './LeftProfile.module.css'
import { HiSquares2X2 } from "react-icons/hi2";
import { FaRegClipboard, FaChartPie, FaFileMedical, FaInbox } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import logo from '../../Assets/logoo.png'


const profileItems = [
    { icon: <HiSquares2X2 />, text: 'Overview' },
    { icon: <FaRegClipboard />, text: 'Assignment' },
    { icon: <FaChartPie />, text: 'Reports', badge: 12 },
    { icon: <FaFileMedical />, text: 'File Storage' },
    { icon: <FaInbox />, text: 'Inbox', badge: 7 },
    { icon: <IoSettingsOutline />, text: 'Settings' },
  ];

  export default function LeftProfile() {
    return (
      <div className={`text-center p-4 rounded-start-4 pb-5 ${Style.profileContainer}`} style={{ backgroundColor: '#F5F7F9' }}>
        <img src={logo} className="logo" alt="Logo" />
        {profileItems.map((item, index) => (
          <div key={index} className={`rounded-2 d-flex align-items-center ps-2 ${index === 2 || index === 4 ? 'my-2' : ''}`}>
            {item.icon}
            <p className="py-2 px-1 text-black m-0">{item.text}</p>
            {item.badge && (
              <div className="rounded-pill small-font fw-bold d-flex align-items-center justify-content-center ms-2" style={{ backgroundColor: '#FAD0CE', width: '25px', height: '25px' }}>
                <p>{item.badge}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }


