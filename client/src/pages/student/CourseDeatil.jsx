import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/course/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch course");

        const data = await res.json();
        setCourse(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) return <div className="text-center mt-10 text-blue-500">Loading course...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;
  if (!course) return null;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img src={course.thumbnail} alt={course.title} className="w-full h-64 object-cover rounded-lg" />
      <h1 className="text-3xl font-bold mt-4">{course.title}</h1>
      <p className="text-gray-600 mt-2">{course.description}</p>
      <p className="mt-4 font-semibold text-xl">₹{course.price}</p>
      <p className="mt-2 text-sm text-gray-500">Instructor: {course.instructor?.name} ({course.instructor?.email})</p>

      <h2 className="mt-6 text-2xl font-semibold">Lectures:</h2>
      {course.lectures?.length > 0 ? (
        <ul className="list-disc ml-6 mt-2">
          {course.lectures.map((lec) => (
            <li key={lec._id} className="mt-1">
              <strong>{lec.title}</strong> - {lec.duration} mins {lec.isFreePreview && "(Free Preview)"}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-gray-400">No lectures added yet.</p>
      )}
    </div>
  );
};

export default CourseDetail;
