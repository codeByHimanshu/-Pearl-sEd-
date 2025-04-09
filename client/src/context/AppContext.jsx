import { createContext, useEffect, useState } from "react";
import { dummyCourses,dataTestimonial } from "../assets/assets";


export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = "INR";
  const [courseData, setCourseData] = useState([]);
  const [isMentor,setIsMentor] = useState(false)
  const [dummyTestimonials ,setDummyTestimonials]=useState([])

  


  useEffect(() => {
    setDummyTestimonials(dataTestimonial)
    setCourseData(dummyCourses);
  }, []);


  const value = {
    currency,
    courseData,
    isMentor,
    dummyTestimonials
    
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
