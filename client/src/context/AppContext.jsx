import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";


export const AppContext = createContext();



export const AppContextProvider = (props) => {
  const currency = "INR";
  const [courseData, setCourseData] = useState([]);

  const fetchCourseData = async () => {
    setCourseData(dummyCourses);
  };
  useEffect(()=>{
    fetchCourseData()
  },[])
  const value = { currency, courseData };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
