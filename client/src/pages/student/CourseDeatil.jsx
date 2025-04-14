import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/student/Loading';
import { AppContext } from '../../context/AppContext';

function CourseDetail() {
  const { id } = useParams();
  const { courseData } = useContext(AppContext);
  const [courseDetail, setCourseDetail] = useState(null);

  useEffect(() => {
    const fetchCourseDetail = () => {
      const foundCourse = courseData.find(course => course.id === id);
      setCourseDetail(foundCourse);
    };
    fetchCourseDetail();
  }, [id, courseData]);

 

  return courseData ? (
    <>
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 p-8 text-white animate__animated animate__fadeIn">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">

        {/* Left Column */}
        <div className="md:w-2/3 bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-md shadow-lg animate__animated animate__fadeInLeft">
          <h1 className="text-3xl font-bold mb-4">{courseDetail.courseTitle}</h1>
          <p className="text-base leading-relaxed text-white/90">
            {courseDetail.courseDescription}
          </p>
        </div>

        {/* Right Column */}
        <div className="md:w-1/3 bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-md shadow-lg animate__animated animate__fadeInRight">
         
        </div>
      </div>
    </div>
    </>
  ): <Loading />
}

export default CourseDetail;
