import React from "react";
import Hero from "../../components/Hero/Hero";
import Billboard from "../../components/Billboard/Billboard";
import HeroMessage from "../../components/Hero/HeroMessage";
import StepCustomize from "../../components/Steps/stepsCustomize";
import StepCleaning from "../../components/Steps/stepsCleaning";
import CleaningSection from "../../components/Sections/CleaningSection";
import Testimonial from "../../components/Testimonial/testimonial";
import { Footer } from "antd/es/layout/layout";
import Navigation from "../../components/Navigation/Navigation";

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Billboard />
      <StepCustomize />
      <HeroMessage />
      <StepCleaning />
      <CleaningSection />
      <Testimonial />
      <Footer/>
    </div>
  );
};

export default HomePage;
