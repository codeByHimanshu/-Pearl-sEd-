import React from "react";

import HeroSection from "../../components/student/HeroSection";
import Companies from "../../components/student/Compnies";
import Courses from "../../components/student/Courses";
import Navbar from "../../components/student/Navbar";
import Testimonials from "../../components/student/Testimonials";
import ActionButton from "../../components/student/ActionButton";
import Footer from "../../components/student/Footer";

function Home() {
  return (
    <div className="bg-gray-100 ">
      <Navbar />
      <HeroSection />
      <Companies />
      <Courses />
      <Testimonials />
      <ActionButton />
      <Footer />
    </div>
  );
}

export default Home;
