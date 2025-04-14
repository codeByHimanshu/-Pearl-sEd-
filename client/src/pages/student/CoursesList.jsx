import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SearchBar from "../../components/student/SearchBar";
import { AppContext } from "../../context/AppContext";
import CourseCard from "../../components/student/CourseCard";
import Footer from "../../components/student/Footer"

function CoursesList() {
  const navigate = useNavigate();
  const { searchvalue } = useParams();
  const { courseData } = useContext(AppContext);
  const [filteredCourse, setFilteredCourse] = useState([]);

  useEffect(() => {
    if (courseData && courseData.length > 0) {
      const tempData = courseData.slice();

      searchvalue
        ? setFilteredCourse(
            tempData.filter((item) =>
              item.courseTitle
                .toLowerCase()
                .includes(searchvalue.toLowerCase())
            )
          )
        : setFilteredCourse(tempData);
    }
  }, [courseData, searchvalue]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-6xl mx-auto backdrop-blur-md bg-white/90 shadow-xl  p-4 animate__animated animate__fadeInUp">
     
        <div className="mb-8 border-b pb-4">
          <h1 className="text-4xl font-extrabold text-blue-800 mb-2 animate__animated animate__fadeInDown">
            Explore Courses
          </h1>
          <p className="text-sm text-gray-600">
            <span
              className="text-blue-600 hover:underline cursor-pointer transition-all duration-300"
              onClick={() => navigate("/")}
            >
              Home
            </span>{" "}
            / <span className="text-gray-800">Courses</span>
          </p>
        </div>

        <div className="mb-8 animate__animated animate__fadeIn">
          <SearchBar data={searchvalue} />
        </div>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate__animated animate__fadeInUp">
          {filteredCourse.length > 0 ? (
            filteredCourse.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No courses found.
            </p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CoursesList;
