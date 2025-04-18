import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/student/Loading";
import { AppContext } from "../../context/AppContext";
import { FiChevronDown } from "react-icons/fi";
import { BsFillPlayFill } from "react-icons/bs";
import humanizeDuration from "humanize-duration";

function CourseDetail() {
  const { id } = useParams();
  const { courseData, courseDuration, numberOfLectures, chapterTime } =
    useContext(AppContext);
  const [courseDetail, setCourseDetail] = useState(null);

  useEffect(() => {
    const fetchCourseDetail = () => {
      const foundCourse = courseData.find((course) => course.id === id);
      setCourseDetail(foundCourse);
    };
    fetchCourseDetail();
  }, [id, courseData]);

  return courseDetail ? (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-200 via-light-blue-300 to-white p-8 text-gray-800 animate__animated animate__fadeIn">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="md:w-2/3 bg-white bg-opacity-80 p-6 rounded-xl shadow-lg backdrop-blur-md animate__animated animate__fadeInLeft">
            <h1 className="text-4xl font-semibold mb-6 text-blue-800">
              {courseDetail.courseTitle}
            </h1>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              {courseDetail.courseDescription}
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <p className="text-yellow-500 font-semibold text-xl">
                  {courseDetail.courseRatings.rating}
                </p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848 1.42 8.284L12 19.896l-7.42 3.984L6 15.596 0 9.748l8.332-1.73z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-500">
                {courseDetail.enrolledStudents?.length || 0} students
              </p>
            </div>
            <p className="text-right text-lg text-gray-800">
              By &nbsp;
              <span className="font-medium text-blue-700">
                {courseDetail.mentor}
              </span>
            </p>

            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                Course Details
              </h2>

              <div className="space-y-6">
                {courseDetail.courseContent.map((chapter, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md p-4 transition-colors hover:bg-blue-50"
                  >
                
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-blue-700">
                        <FiChevronDown className="text-xl text-blue-500" />
                        <h5 className="text-lg font-semibold">
                          {chapter.chTitle}
                        </h5>
                      </div>
                      <p className="text-sm font-medium text-gray-600">
                        {chapter.chContent.length} Lectures •{" "}
                        {chapterTime(chapter)}
                      </p>
                    </div>

                  
                    <ul className="space-y-4">
                      {chapter.chContent.map((lecture, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-4 p-4 border rounded-lg hover:bg-gray-50 transition"
                        >
                          <div className="mt-1 text-blue-600">
                            <BsFillPlayFill className="text-xl" />
                          </div>
                          <div className="flex flex-col">
                            <p className="font-semibold text-gray-800">
                              {lecture.lTitle}
                            </p>
                            <div className="flex items-center text-sm text-gray-600 mt-1 gap-4">
                              {lecture.isPreviewFree && (
                                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">
                                  Preview
                                </span>
                              )}
                              <p>
                                {humanizeDuration(
                                  lecture.duration * 60 * 1000,
                                  {
                                    units: ["h", "m"],
                                    round: true,
                                  }
                                )}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/3 bg-white bg-opacity-80 p-6 rounded-xl shadow-lg backdrop-blur-md animate__animated animate__fadeInRight"></div>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default CourseDetail;
