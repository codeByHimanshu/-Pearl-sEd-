import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/student/Loading";
import Footer from "../../components/student/Footer";
import { AppContext } from "../../context/AppContext";
import { FiChevronDown, FiChevronRight, FiClock } from "react-icons/fi";
import { BsFillPlayFill } from "react-icons/bs";
import humanizeDuration from "humanize-duration";
import YouTube from "react-youtube";

function MedialPlayer() {
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
  const [videoPlayer, setVideoPlayer] = useState(null);

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
      <div className=" bg-gradient-to-br from-blue-200 via-light-blue-300 to-white p-8 text-gray-800 animate__animated animate__fadeIn">
        <div className="max-w-6xl  mx-auto flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3 bg-white p-6 rounded-xl  animate__animated animate__fadeInLeft">
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                Course Details
              </h2>

              <div className="space-y-6">
                {courseDetail.courseContent.map((chapter, index) => (
                  <div
                    key={index}
                    className="bg-white  cursor-pointer shadow-md p-4 transition-colors hover:bg-blue-50"
                  >
                    <div
                      onClick={() => toggleChapter(index)}
                      className="flex items-center border rounded-lg p-2 justify-between "
                    >
                      <div className="flex items-center gap-2 text-blue-700">
                        {openChapter === index ? (
                          <FiChevronDown className="text-xl text-blue-500" />
                        ) : (
                          <FiChevronRight className="text-xl text-blue-500" />
                        )}
                        <h5 className="text-lg font-semibold">
                          {chapter.chTitle}
                        </h5>
                      </div>
                      <p className="text-sm font-medium text-gray-600">
                        {chapter.chContent.length} Lectures •{" "}
                        {chapterTime(chapter)}
                      </p>
                    </div>

                    {openChapter === index && (
                      <ul className="mt-4 space-y-4">
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
                                  <span
                                    onClick={() =>
                                      setVideoPlayer({
                                        videoId: lecture.lectURL
                                          .split("/")
                                          .pop(),
                                      })
                                    }
                                    className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium"
                                  >
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
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-3/4 h-auto  p-6 bg-white shadow-lg rounded-lg backdrop-blur-md animate__animated animate__fadeInRight">
            <div className="max-w-sm   overflow-hidden hover:shadow-2xl transition-shadow duration-300">
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
                  className="w-full h-48 object-cover"
                />
              )}
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

export default MedialPlayer;
