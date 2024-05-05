import React from 'react';

function CourseCard({ courseName, studentCount }) {
  return (
    <div className="card bg-primary text-white p-3" style={{ width: '200px', height: '300px', borderRadius: '10px' }}>
      <div className="d-flex flex-column justify-content-end" style={{ height: '100%' }}>
        <div className="rounded-circle bg-white d-flex align-items-center justify-content-center mb-4" style={{ width: '60px', height: '60px' }}>
          <p className="m-0">{studentCount}</p>
        </div>
        <p className="m-0">{courseName}</p>
      </div>
    </div>
  );
}

export default CourseCard;
