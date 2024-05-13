import React from 'react';
import { Link } from 'react-router-dom';
import businessImage from '../../Assets/business.jpg';
import programmingImage from '../../Assets/programming.jpg';
import webImage from '../../Assets/webdev.jpg';
import dataImage from '../../Assets/datascience.jpg';
import cyberImage from '../../Assets/cyber.jpg';
import artificialImage from '../../Assets/ai.jpg';
import designImage from '../../Assets/design.jpg';
import langImage from '../../Assets/language.jpg';
import freeImage from '../../Assets/enterpreneurship.jpg';

import { useLanguage } from '../LanguageContext'

const Categories = () => {
  const categories = [
    { name: 'Business & Management ', image: businessImage, numCourses: 10 },
    { name: 'Computer Programming', image: programmingImage, numCourses: 15 },
    { name: 'Web Development', image: webImage, numCourses: 20 },
    {name: 'Data Science and Analytics',image: dataImage,numCourses:5},
    { name: 'Cybersecurity', image: cyberImage, numCourses: 9 },
    { name: 'Artificial Intelligence and Machine Learning', image: artificialImage, numCourses: 9 },
    { name: 'Creative Arts & Design', image: designImage, numCourses: 9 },
    { name: 'Language & Communication', image: langImage, numCourses: 9 },
    { name: 'Entrepreneurship & Freelancing', image: freeImage, numCourses: 9 },

  ];

 

  const CategoryCard = ({ category }) => {
    const {language} = useLanguage();

    return (
      <div className="mt-6 bg-white rounded-4 p-3 my-4 shadowbox d-flex flex-column" style={{ height: '340px' }}>
        <div style={{ height: '50%', overflow: 'hidden' }}>
          <img src={category.image} className="w-100 rounded-top-4" alt="" style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
        </div>

        <div className="border-bottom border-white border-2 pb-4">
          <h5 className="fw-bold ps-3 text-center">{category.name}</h5>
        </div>

        <p className="font-sm fw-bold ms-2">{category.numCourses} {language === 'en' ? 'Courses' : ' الدورات'}</p>

        <div className="mt-auto text-center">
          <Link to={`/courses`} className="btn bg-color text-white rounded-5">{language === 'en' ? 'View Courses' : 'عرض الدورات'}</Link>
        </div>
      </div>
    );
  };
  

  return (
    <div className="container">
      {/*<h1 className="my-4">Choose a Category</h1>*/}
      <div className="row">
        {categories.map((category, index) => (
          <div key={index} className="col-md-4">
            <CategoryCard category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
