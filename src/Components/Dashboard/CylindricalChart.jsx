import React from "react";
import styles from './Dashboard.module.css'; 

const CylindricalChart = () => {
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const randomData = weekdays.map(() => Math.floor(Math.random() * 100));

  return (
    <div className={styles["chart-container"]}>
      {weekdays.map((day, index) => (
        <div className={styles["cylinder-tube"]} key={index}>
          {/* Inner color */}
          <div className={styles["inner-color"]} ></div>
          <div className={styles["lines-left"]}></div> 
          <div className={styles["lines-right"]}></div>
          <p className={styles["day-label"]}>{day}</p>
        </div>
      ))}
    </div>
  );
}

export default CylindricalChart;
