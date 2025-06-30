import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/course/get-all-courses", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch courses");

        const data = await res.json();
        setCourses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <div className="text-center mt-10 text-blue-500">Loading your courses...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div
          key={course._id}
          className="bg-white rounded-xl shadow-md cursor-pointer hover:shadow-lg transition duration-200"
          onClick={() => navigate(`/course-detail/${course._id}`)}
        >
          <img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{course.description}</p>
            <p className="font-bold text-gray-800">₹{course.price}</p>
            <p className="text-sm text-gray-500 mt-2">Instructor: {course.instructor?.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCourses;
