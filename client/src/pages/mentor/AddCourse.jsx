import React, { useState } from "react";

const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    thumbnail: "",
    price: "",
  });

  const [lectures, setLectures] = useState([
    {
      title: "",
      description: "",
      videoUrl: "",
      duration: "",
      order: 1,
      isFreePreview: false,
    },
  ]);

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCourseChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleLectureChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const updatedLectures = [...lectures];
    updatedLectures[index][name] = type === "checkbox" ? checked : value;
    setLectures(updatedLectures);
  };

  const addLectureField = () => {
    setLectures([
      ...lectures,
      {
        title: "",
        description: "",
        videoUrl: "",
        duration: "",
        order: lectures.length + 1,
        isFreePreview: false,
      },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const token = localStorage.getItem("token");

      // Step 1: Create Course
      const courseRes = await fetch("http://localhost:3000/api/course/create-course", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(courseData),
      });

      const courseResult = await courseRes.json();
      if (!courseRes.ok) throw new Error(courseResult.error || "Course creation failed");

      const courseTitle = courseResult.course.title;

      // Step 2: Create Lectures (one by one)
      for (const lecture of lectures) {
        const payload = {
          ...lecture,
          courseTitle, // used for lookup in backend
        };

        const lectureRes = await fetch("http://localhost:3000/api/lecture/create-lecture", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        });

        const lectureResult = await lectureRes.json();
        if (!lectureRes.ok) throw new Error(lectureResult.error || "Lecture creation failed");
      }

      setMessage("✅ Course and Lectures created successfully!");
      setCourseData({ title: "", description: "", thumbnail: "", price: "" });
      setLectures([
        {
          title: "",
          description: "",
          videoUrl: "",
          duration: "",
          order: 1,
          isFreePreview: false,
        },
      ]);
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md overflow-y-auto max-h-[90vh]">
      <h2 className="text-2xl font-semibold mb-4 text-center">Create Course with Lectures</h2>

      {message && <p className="text-center mb-4 text-red-600">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Course Fields */}
        <div>
          <label className="block mb-1 font-medium">Course Title</label>
          <input
            type="text"
            name="title"
            value={courseData.title}
            onChange={handleCourseChange}
            className="w-full p-3 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={courseData.description}
            onChange={handleCourseChange}
            className="w-full p-3 border rounded-md"
            rows="4"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Thumbnail URL</label>
          <input
            type="url"
            name="thumbnail"
            value={courseData.thumbnail}
            onChange={handleCourseChange}
            className="w-full p-3 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Price (₹)</label>
          <input
            type="number"
            name="price"
            value={courseData.price}
            onChange={handleCourseChange}
            className="w-full p-3 border rounded-md"
            required
          />
        </div>

        {/* Lectures Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Lectures</h3>
          {lectures.map((lecture, index) => (
            <div key={index} className="border p-4 mb-4 rounded-md bg-gray-50">
              <input
                type="text"
                name="title"
                placeholder="Lecture Title"
                value={lecture.title}
                onChange={(e) => handleLectureChange(index, e)}
                className="w-full p-2 border rounded mb-2"
                required
              />

              <input
                type="text"
                name="description"
                placeholder="Lecture Description"
                value={lecture.description}
                onChange={(e) => handleLectureChange(index, e)}
                className="w-full p-2 border rounded mb-2"
              />

              <input
                type="url"
                name="videoUrl"
                placeholder="Video URL"
                value={lecture.videoUrl}
                onChange={(e) => handleLectureChange(index, e)}
                className="w-full p-2 border rounded mb-2"
                required
              />

              <div className="flex gap-4 mb-2">
                <input
                  type="number"
                  name="duration"
                  placeholder="Duration (min)"
                  value={lecture.duration}
                  onChange={(e) => handleLectureChange(index, e)}
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="number"
                  name="order"
                  placeholder="Order"
                  value={lecture.order}
                  onChange={(e) => handleLectureChange(index, e)}
                  className="w-full p-2 border rounded"
                />
              </div>

              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  name="isFreePreview"
                  checked={lecture.isFreePreview}
                  onChange={(e) => handleLectureChange(index, e)}
                />
                Free Preview
              </label>
            </div>
          ))}

          <button
            type="button"
            onClick={addLectureField}
            className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            + Add Lecture
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
        >
          {loading ? "Submitting..." : "Create Course & Lectures"}
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
