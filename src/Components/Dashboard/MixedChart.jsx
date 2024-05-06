import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const MixedChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const thickness = [
      [100, 130],
      [80, 150],
      [70, 160],
      [100, 130],
      [100, 130],
      [100, 130]
    ];

    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [10, 19, 15],
            backgroundColor: [
              '#FFC000',  // Orange
              '#FF4500',  // Red
              '#37E89E'   // Green
            ],
            borderColor: [
              '#FFC000',  // Orange
              '#FF4500',  // Red
              '#37E89E'   // Green
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        plugins: {
          afterInit: function(chart, options) {
            thickness.forEach((item, index) => {
              chart.getDatasetMeta(0).data[index]._view.innerRadius = item[0];
              chart.getDatasetMeta(0).data[index]._view.outerRadius = item[1];
            });
            chart.draw();
          }
        }
      }
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <div id="chartWrapper">
            <canvas ref={chartRef}></canvas>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-3 ">
        <div className="col-auto">
          <div className="d-flex flex-column align-items-center">
            <div className="dot mb-1" style={{ backgroundColor: '#FF4500', width: '20px', height: '20px', borderRadius: '50%' }}></div>
            <span>New Courses</span>
          </div>
        </div>
        <div className="col-auto">
          <div className="d-flex flex-column align-items-center">
            <div className="dot mb-1" style={{ backgroundColor: '#FFC000', width: '20px', height: '20px', borderRadius: '50%' }}></div>
            <span>Pending</span>
          </div>
        </div>
        <div className="col-auto">
          <div className="d-flex flex-column align-items-center">
            <div className="dot mb-1" style={{ backgroundColor: '#37E89E', width: '20px', height: '20px', borderRadius: '50%' }}></div>
            <span>Finished</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MixedChart;
