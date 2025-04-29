import React from "react";

import HeroSection from "../../components/student/HeroSection";
import Companies from "../../components/student/Compnies";
import Courses from "../../components/student/Courses";
import Testimonials from "../../components/student/Testimonials";
import ActionButton from "../../components/student/ActionButton";
import Footer from "../../components/student/Footer";

function Home() {
  return (
    <div className="bg-gray-100 ">
      
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
