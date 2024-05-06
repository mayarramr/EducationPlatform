import React from 'react';

function CourseCard({ courses }) {
  const colors = ['CFFFE6', 'D6F9FF', 'FFF6C8', 'FFF8C8'];

  return (
    <div className="row">
      {courses.map((course, index) => (
        <div key={index} className="col-md-3 mb-3">
          <div className="card" style={{ backgroundColor: `#${colors[index % colors.length]}`, color: 'white', borderRadius: '10px', height: '190px', width: '120px' }}>
            <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100%' }}>
              <div className="bg-white d-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px', borderRadius: '10px' }}>
                <p className="m-0 text-dark font-weight-bold" style={{ fontSize: '1rem', fontWeight: '800' }}>{course.studentCount}</p>
              </div>
              <p className="m-0 text-center" style={{ fontSize: '0.7rem', maxWidth: '100px', whiteSpace: 'nowrap',color: '#738788' }}>{course.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseCard;
