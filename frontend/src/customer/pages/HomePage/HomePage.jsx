import React from "react";
import Hero from "../../components/Hero/Hero";
import Billboard from "../../components/Billboard/Billboard";
import HeroMessage from "../../components/Hero/HeroMessage";
import StepCustomize from "../../components/Steps/stepsCustomize";
import CleaningSection from "../../components/Sections/CleaningSection";
import Testimonial from "../../components/Testimonial/testimonial";
import Collection from "../../components/Product/Collection";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Billboard />
      <StepCustomize />
      <HeroMessage />
      <CleaningSection />
      <Collection />
      <Testimonial />
    </div>
  );
};

export default HomePage;
