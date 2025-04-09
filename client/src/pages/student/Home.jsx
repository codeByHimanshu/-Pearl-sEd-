import React from "react";

import HeroSection from "../../components/student/HeroSection";
import Companies from "../../components/student/Compnies";
import Courses from "../../components/student/Courses";
import Navbar from "../../components/student/Navbar";
import Testimonials from "../../components/student/Testimonials";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Companies />
      <Courses />
      <Testimonials />
    </div>
  );
}

export default Home;
