import {
  BrowserRouter,
  Routes,
  Route,
  useMatch,
  useLocation
} from "react-router-dom";
import Mentor from "./pages/mentor/Mentor";
import Dashboard from "./pages/mentor/Dashboard";
import AddCourse from "./pages/mentor/AddCourse";
import MyCourses from "./pages/mentor/MyCourses";
import StudentsEnrolled from "./pages/mentor/StudentsEnrolled";
import Home from "./pages/student/Home";
import CourseDetail from "./pages/student/CourseDeatil";
import CoursesList from "./pages/student/CoursesList";
import Enrollments from "./pages/student/Enrollments";
import Navbar from "./components/student/Navbar";
import MediaPlayer from "./pages/student/MediaPlayer";

const AppRoutes = () => {
  const location = useLocation();
  const isMentorRoute = location.pathname.startsWith("/mentor");

  return (
    <>
      {!isMentorRoute && <Navbar />}

      <Routes>
        {/* Student routes */}
        <Route path="/" element={<Home />} />
        <Route path="course-detail/:id" element={<CourseDetail />} />
        <Route path="media-player/:id" element={<MediaPlayer />} />
        <Route path="my-enrollments" element={<Enrollments />} />
        <Route path="course-list" element={<CoursesList />} />
        <Route path="course-list/:search" element={<CoursesList />} />

        {/* Mentor routes */}
        <Route path="/mentor" element={<Mentor />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="my-course" element={<MyCourses />} />
          <Route path="students-enrolled" element={<StudentsEnrolled />} />
        </Route>
      </Routes>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
