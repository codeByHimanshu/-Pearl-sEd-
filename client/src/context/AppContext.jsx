import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = "INR";
  const [courseData, setCourseData] = useState([]);


  useEffect(() => {
    setCourseData(dummyCourses);
  }, []);

  const avg_rating = (course) => {
    if ( course.courseRatings.length === 0) return 0;
    const total = 0;
    course.rating.forEeach((rating) => {total +=  courseRatings.rating});
    return (total / course.courseRatings.length);
  };

  const value = {
    currency,
    courseData,
    avg_rating,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
