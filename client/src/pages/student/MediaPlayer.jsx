import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/student/Loading";
import Footer from "../../components/student/Footer";
import { AppContext } from "../../context/AppContext";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { BsFillPlayFill } from "react-icons/bs";
import humanizeDuration from "humanize-duration";
import YouTube from "react-youtube";

function MediaPlayer() {
  const { id } = useParams();
  const { courseData, chapterTime } = useContext(AppContext);
  const [courseDetail, setCourseDetail] = useState(null);
  const [openChapter, setOpenChapter] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    const foundCourse = courseData.find((course) => course.id === id);
    setCourseDetail(foundCourse);
  }, [id, courseData]);

  const toggleChapter = (index) => {
    setOpenChapter(openChapter === index ? null : index);
  };

  const handleLectureClick = (lecture) => {
    const videoId = lecture.lectURL.split("/").pop();
    setCurrentVideo(videoId);
  };

  return courseDetail ? (
    <>
      <div className="bg-gradient-to-br from-blue-100 via-blue-200 to-white min-h-screen p-8 text-gray-800 animate__animated animate__fadeIn">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">

         
          <div className="md:w-2/3 bg-white p-6 rounded-2xl shadow-md animate__animated animate__fadeInLeft">
            <h2 className="text-2xl font-bold text-blue-700 mb-6">Course Content</h2>

            <div className="space-y-6">
              {courseDetail.courseContent.map((chapter, index) => (
                <div key={index} className="border rounded-lg shadow-sm">
                  <div
                    onClick={() => toggleChapter(index)}
                    className="flex justify-between items-center p-4 cursor-pointer hover:bg-blue-50 rounded-lg transition"
                  >
                    <div className="flex items-center gap-2">
                      {openChapter === index ? (
                        <FiChevronDown className="text-xl text-blue-600" />
                      ) : (
                        <FiChevronRight className="text-xl text-blue-600" />
                      )}
                      <h3 className="font-semibold text-lg">{chapter.chTitle}</h3>
                    </div>
                    <p className="text-sm text-gray-500">
                      {chapter.chContent.length} Lectures • {chapterTime(chapter)}
                    </p>
                  </div>

                  {openChapter === index && (
                    <ul className="p-4 space-y-4 bg-gray-50 rounded-b-lg">
                      {chapter.chContent.map((lecture, idx) => (
                        <li
                          key={idx}
                          onClick={() => handleLectureClick(lecture)}
                          className="flex items-start gap-4 p-2 rounded-lg hover:bg-blue-100 transition cursor-pointer"
                        >
                          <div className="text-blue-600 mt-1">
                            <BsFillPlayFill className="text-2xl" />
                          </div>
                          <div className="flex flex-col">
                            <p className="font-semibold text-gray-800">{lecture.lTitle}</p>
                            <div className="flex items-center text-xs text-gray-500 gap-3 mt-1">
                              <span>
                                {humanizeDuration(lecture.duration * 60 * 1000, {
                                  units: ["h", "m"],
                                  round: true,
                                })}
                              </span>
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

          {/* Right Side - Video Player */}
          <div className="md:w-1/3 bg-white p-6 rounded-2xl shadow-md animate__animated animate__fadeInRight flex flex-col items-center">
            {currentVideo ? (
              <YouTube
                videoId={currentVideo}
                opts={{
                  width: "100%",
                  playerVars: {
                    autoplay: 1,
                    controls: 1,
                    modestbranding: 1,
                    rel: 0,
                  },
                }}
                iframeClassName="w-full rounded-lg aspect-video"
              />
            ) : (
              <div className="w-full h-60 bg-blue-100 flex items-center justify-center text-blue-500 rounded-lg">
                Select a lecture to start
              </div>
            )}
          </div>

        </div>
      </div>

      <Footer />
    </>
  ) : (
    <Loading />
  );
}

export default MediaPlayer;
