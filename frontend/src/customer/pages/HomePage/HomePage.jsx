import React from "react";
import Hero from "../../components/Hero/Hero";
import Billboard from "../../components/Billboard/Billboard";
import HeroMessage from "../../components/Hero/HeroMessage";
import StepCustomize from "../../components/Steps/stepsCustomize";
import StepCleaning from "../../components/Steps/stepsCleaning";
import CleaningSection from "../../components/Sections/CleaningSection";
import Testimonial from "../../components/Testimonial/testimonial";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <StepCustomize />
      <HeroMessage />
      <Billboard />
      <StepCleaning />
      <CleaningSection />
      <Testimonial />
    </div>
  );
};

export default HomePage;
