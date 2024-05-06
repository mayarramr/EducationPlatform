import React from "react";
import styles from './Dashboard.module.css'; 

const CylindricalChart = () => {
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const randomData = weekdays.map(() => Math.floor(Math.random() * 100));

  return (
    <div className={` ${styles["vertical-progress"]}`}>
    <div className="d-flex justify-content-between textLightGreen">
        <p>Programming Courses</p>
        <p>62%</p>
    </div>
    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar" style={{ height: "62%", backgroundColor: "#09BC71" }}></div>
    </div>
</div>

        

     
  );
}

export default CylindricalChart;
