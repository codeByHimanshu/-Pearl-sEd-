import { createContext, useEffect, useState } from "react";
import { dummyCourses, dataTestimonial } from "../assets/assets";
import humanizeDuration from "humanize-duration";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = "INR";
  const [courseData, setCourseData] = useState([]);
  const [isMentor, setIsMentor] = useState(false);
  const [dummyTestimonials, setDummyTestimonials] = useState([]);
  const [enrolled, setEnrolled] = useState([]);
  const [user, setUser] = useState(null); // <-- Track user

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser || null);
    setIsMentor(storedUser?.role === "mentor");
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setUser(null);
    setIsMentor(false);
  };

  const fetchEnrolled = async () => {
    setEnrolled(dummyCourses);
  };

  // Get total duration of a chapter
  const chapterTime = (chapter) => {
    let time = 0;
    chapter.chContent.forEach((lecture) => {
      time += lecture.duration || 0;
    });
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"], round: true });
  };

  // Total course duration
  const courseDuration = (course) => {
    let time = 0;
    course?.courseContent?.forEach((chapter) => {
      chapter.chContent?.forEach((lecture) => {
        time += lecture.duration || 0;
      });
    });
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"], round: true });
  };

  // Total number of lectures
  const numberOfLectures = (course) => {
    let total = 0;
    course?.courseContent?.forEach((chapter) => {
      total += chapter.chContent?.length || 0;
    });
    return total;
  };

  useEffect(() => {
    setCourseData(dummyCourses);
    setDummyTestimonials(dataTestimonial);
    fetchEnrolled();
  }, []);

  const value = {
    currency,
    courseData,
    isMentor,
    setIsMentor,
    dummyTestimonials,
    courseDuration,
    numberOfLectures,
    chapterTime,
    enrolled,
    fetchEnrolled,
    user,
    setUser,
    logout,
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};
