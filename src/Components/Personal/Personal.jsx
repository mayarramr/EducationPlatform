import React from 'react';
import Style from './Personal.module.css';
import Img1 from '../../Assets/personal1.jpg';
import person1 from '../../Assets/img12.jpg';
import person2 from '../../Assets/man1 (1).jpg';
import person3 from '../../Assets/man2.jpg';
import Img2 from '../../Assets/personal2.jpg';
import Img3 from '../../Assets/personal3.jpg';
import Img4 from '../../Assets/personal4.jpeg';
import { useLanguage } from '../LanguageContext';

const personalDevelopmentCourses = [
  {
    title: "Mastering Self-Confidence: Unlock Your Full Potential",
    category: "Confidence & Self-Esteem",
    duration: "4 Week",
    imageUrl: Img1,
    instructor: "Dr. Alia",
    instructorImage: person1,
    description: "Develop unshakeable self-confidence, overcome self-doubt, and achieve your goals in this comprehensive course.",
    originalPrice: 120,
    discountedPrice: 90,
  },
  {
    title: "Effective Communication Skills for Success",
    category: "Communication",
    duration: "6 Week",
    imageUrl: Img2,
    instructor: "Mr. Omar",
    instructorImage: person2,
    description: "Learn powerful communication techniques to express yourself clearly, build strong relationships, and achieve success in all areas of life.",
    originalPrice: 150,
    discountedPrice: 110,
  },
  {
    title: "Mindfulness for Beginners: Reduce Stress and Improve Focus",
    category: "Stress Management",
    duration: "8 Week",
    imageUrl: Img3,
    instructor: "Ms. Layla",
    instructorImage: person3,
    description: "Discover the power of mindfulness to manage stress, improve focus, and enhance overall well-being in this beginner-friendly course.",
    originalPrice: 80,
    discountedPrice: 65,
  },
  {
    title: "The Art of Time Management: Get More Done in Less Time",
    category: "Productivity",
    duration: "5 Week",
    imageUrl: Img4,
    instructor: "Mr. Karim",
    instructorImage: person1,
    description: "Master effective time management strategies, overcome procrastination, and achieve greater productivity in this practical course.",
    originalPrice: 100,
    discountedPrice: 80,
  },
];

export default function Personal() {
  const { language } = useLanguage();
  return (
    <>
      <div className="container pb-3">
        <div className="d-flex align-items-center justify-content-between">
          <h3 className="fw-bold">
            {language === 'en' ? 'The courses in ' : 'الدورات في '}
            <span className="text-color">{language === 'en' ? 'personal development' : 'التنمية الشخصية'}</span>
          </h3>
          <button className="btn fw-bold text-color font-sm">
            {language === "en" ? "See All" : "طالع الكل"}
          </button>
        </div>
        <div className="row pb-5 pt-3">
          {personalDevelopmentCourses.map((course) => (
            <div className="col-md-3" key={course.title}>
              <div className="bg-white rounded-4 p-3 my-4 shadowbox">
                <div>
                  <img src={course.imageUrl} className="w-100 rounded-3" alt={course.title} />
                </div>
                <div className="d-flex justify-content-between my-3 gray-text">
                  <div className="d-flex align-items-center font-sm">
                    <i className="fa-solid fa-table-cells-large me-1"></i>
                    <p>{course.category}</p>
                  </div>
                  <div className="d-flex align-items-center font-sm">
                    <i className="fa-regular fa-clock me-1"></i>
                    <p>{course.duration}</p>
                  </div>
                </div>
                <h5 className="fw-bold">{course.title}</h5>
                <p className="font-sm gray-text mt-4">{course.description}</p>
                <div className="d-flex mt-3">
                  <div className="d-flex w-75 align-items-center">
                    <img src={course.instructorImage} className="w-25 rounded-pill" alt={course.instructor} />
                    <p className="font-sm fw-bold ms-2">{course.instructor}</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <del className="gray-text font-sm me-2"><em>{course.originalPrice}</em></del>
                    <h6 className="fw-bold text-color m-0">{course.discountedPrice}</h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
