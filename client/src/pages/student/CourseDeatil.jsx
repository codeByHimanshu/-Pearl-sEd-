import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/student/Loading";
import Footer from "../../components/student/Footer";
import { AppContext } from "../../context/AppContext";
import { FiChevronDown, FiChevronRight, FiClock } from "react-icons/fi";
import { BsFillPlayFill } from "react-icons/bs";
import humanizeDuration from "humanize-duration"; 
import YouTube from 'react-youtube'

function CourseDetail() {
  const { id } = useParams();
  const {
    courseData,
    courseDuration,
    numberOfLectures,
    chapterTime,
    currency,
  } = useContext(AppContext);
  const [courseDetail, setCourseDetail] = useState(null);
  const [openChapter, setOpenChapter] = useState(null);
  const [alreadyEnrolled, setAlreadyEnrolled] = useState(true);
  const [videoPlayer, setVideoPlayer] = useState(null)

  useEffect(() => {
    const fetchCourseDetail = () => {
      const foundCourse = courseData.find((course) => course.id === id);
      setCourseDetail(foundCourse);
    };
    fetchCourseDetail();
  }, [id, courseData]);

  const toggleChapter = (index) => {
    setOpenChapter(openChapter === index ? null : index);
  };

  return courseDetail ? (
    <>
      <div className="bg-white text-gray-800 p-10">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
    {/* Left Content */}
    <div className="md:w-2/3 bg-gray-50 p-8 rounded-2xl shadow-lg">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
        {courseDetail.courseTitle}
      </h1>
      <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
        {courseDetail.courseDescription}
      </p>

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 text-yellow-500">
          <span className="font-semibold text-xl">{courseDetail.courseRatings.rating}</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848 1.42 8.284L12 19.896l-7.42 3.984L6 15.596 0 9.748l8.332-1.73z" />
              </svg>
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-500">
          {courseDetail.enrolledStudents?.length || 0} students
        </p>
      </div>

      <p className="text-right text-gray-600 text-md">
        By <span className="text-blue-600 font-medium">{courseDetail.mentor}</span>
      </p>

      <div className="mt-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Course Content</h2>

        <div className="space-y-6">
          {courseDetail.courseContent.map((chapter, index) => (
            <div key={index} className="border rounded-xl p-4 bg-white shadow hover:shadow-md transition">
              <div
                onClick={() => toggleChapter(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold">
                  {openChapter === index ? <FiChevronDown /> : <FiChevronRight />}
                  <h5>{chapter.chTitle}</h5>
                </div>
                <p className="text-sm text-gray-500">
                  {chapter.chContent.length} Lectures • {chapterTime(chapter)}
                </p>
              </div>

              {openChapter === index && (
                <ul className="mt-4 space-y-3">
                  {chapter.chContent.map((lecture, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 p-3 border rounded-lg hover:bg-gray-100 transition"
                    >
                      <div className="text-blue-600">
                        <BsFillPlayFill className="text-2xl" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{lecture.lTitle}</p>
                        <div className="text-sm text-gray-600 mt-1 flex items-center gap-4">
                          {lecture.isPreviewFree && (
                            <span
                              onClick={() =>
                                setVideoPlayer({ videoId: lecture.lectURL.split("/").pop() })
                              }
                              className="bg-green-200 text-green-800 px-2 py-0.5 rounded-full text-xs font-medium cursor-pointer"
                            >
                              Preview
                            </span>
                          )}
                          <p>
                            {humanizeDuration(lecture.duration * 60 * 1000, {
                              units: ["h", "m"],
                              round: true,
                            })}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Right Panel */}
    <div className="md:w-1/3 bg-blue-50 p-6 rounded-2xl shadow-lg flex flex-col gap-4">
      <div className="rounded-lg overflow-hidden">
        {videoPlayer ? (
          <YouTube
            videoId={videoPlayer.videoId}
            opts={{ playerVars: { autoplay: 1 } }}
            iframeClassName="w-full aspect-video"
          />
        ) : (
          <img
            src={courseDetail.thumbnail}
            alt="Course Thumbnail"
            className="w-full h-48 object-cover rounded-lg"
          />
        )}
      </div>

      <div className="text-lg font-semibold text-gray-700">
        {currency} {courseDetail.coursePrice}
      </div>

      <div className="flex items-center justify-between text-sm font-medium text-gray-600">
        <FiClock />
        <span>{courseDuration(courseDetail)} total duration</span>
        <span>{numberOfLectures(courseDetail)} lectures</span>
      </div>

      <button className="bg-blue-700 text-white w-full py-2 rounded-md hover:bg-blue-800 transition font-semibold">
        {alreadyEnrolled ? 'Already Enrolled' : 'Enroll Now'}
      </button>

      <span className="text-green-700 font-medium text-md text-center">Only few seats left! Hurry up.</span>

      <div className="mt-4">
        <h3 className="text-md font-bold text-gray-800 mb-2">Benefits:</h3>
        <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
          <li>One-time purchase, lifetime access</li>
          <li>Connect directly with mentors</li>
          <li>Free MNC test series</li>
          <li>Practice coding challenges and win rewards</li>
          <li>Collaborate and learn with peers</li>
          <li>Stay updated with the latest tech</li>
        </ul>
      </div>
    </div>
  </div>
</div>

      <Footer />
    </>
  ) : (
    <Loading />
  );
}

export default CourseDetail;
