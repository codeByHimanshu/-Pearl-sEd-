import { createContext, useEffect, useState } from "react";
import { dummyCourses,dataTestimonial } from "../assets/assets";
import humanizeDuration from "humanize-duration"

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = "INR";
  const [courseData, setCourseData] = useState([]);
  const [isMentor,setIsMentor] = useState(false)
  const [dummyTestimonials ,setDummyTestimonials]=useState([])
  const [enrolled ,setEnrolled]=useState([])


  // Function to get duration of a chapter
  const chapterTime = (chapter) => {
  
    let time = 0;
    chapter.chContent.forEach((lecture) => {
      const duration = lecture.duration;
      time += duration;
    });
  
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"], round: true });
  };
  
  
  //  total duration of the course
  const courseDuration = (course) => {
    let time = 0;
  
    if (Array.isArray(course?.courseContent)) {
      course.courseContent.forEach((chapter) => {
        if (Array.isArray(chapter.chContent)) {
          chapter.chContent.forEach((lecture) => {
            time += lecture.duration || 0;
          });
        }
      });
    }
  
    return humanizeDuration(time * 60 * 1000, {
      units: ["h", "m"],
      round: true,
    });
  };
  
  
  //  total number of lectures in the course
  const numberOfLectures = (course) => {
    let totalLectures = 0;
  
    if (course && Array.isArray(course.courseContent)) {
      course.courseContent.forEach((chapter) => {
        if (Array.isArray(chapter.chContent)) {
          totalLectures += chapter.chContent.length;
        }
      });
    }
  
    return totalLectures;
  };
  
  const fetchEnrolled = async () => {
    setEnrolled(dummyCourses

    )
  }

  useEffect(() => {
    setDummyTestimonials(dataTestimonial)
    setCourseData(dummyCourses);
    fetchEnrolled()
  }, []);

  const value = {
    currency,
    courseData,
    isMentor,
    dummyTestimonials,
    courseDuration,
    numberOfLectures,
    chapterTime,
    enrolled,fetchEnrolled
     
    
  };

 
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
