import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mentor from "./pages/mentor/Mentor";
import Dashboard from "./pages/mentor/Dashboard";
import AddCourse from "./pages/mentor/AddCourse";
import MyCourses from "./pages/mentor/MyCourses";
import StudentsEnrolled from "./pages/mentor/StudentsEnrolled";
import Home from "./pages/student/Home";
import CourseDetail from "./pages/student/CourseDeatil";
import CoursesList from "./pages/student/CoursesList";
import Enrollments from "./pages/student/Enrollments";
import Player from "./pages/student/player";
import Navbar from "./components/student/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div>

        <Navbar />

        <Routes>
          <Route path="/home" element={<Home />} />

            <Route path="course-detail" element={<CourseDetail />} />
            <Route path="course-list" element={<CoursesList />} />
            <Route path="course-list/:search" element={<CoursesList />} />
          
          <Route path="/mentor" element={<Mentor />}>
           
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="add-course" element={<AddCourse />} />
            <Route path="my-course" element={<MyCourses />} />
            <Route path="students-enrolled" element={<StudentsEnrolled />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
